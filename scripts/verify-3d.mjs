import { chromium } from "playwright-core"

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
const browser = await chromium.launch({
  headless: true,
  executablePath: chromePath,
})

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
]

const results = []

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
  })

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle",
    timeout: 30000,
  })
  await page.locator("text=The Wedding Invitation").click()
  await page.waitForTimeout(2200)

  const info = await page.evaluate(async () => {
    const canvas = document.querySelector("canvas")
    const firstSection = document.querySelector("section")
    const text = document.body.innerText

    let pixelStats = null
    if (canvas instanceof HTMLCanvasElement) {
      const dataUrl = canvas.toDataURL("image/png")
      const image = new Image()
      image.src = dataUrl
      await image.decode()

      const sampler = document.createElement("canvas")
      sampler.width = 64
      sampler.height = 64
      const context = sampler.getContext("2d")
      context?.drawImage(image, 0, 0, 64, 64)
      const pixels = context?.getImageData(0, 0, 64, 64).data

      if (pixels) {
        let nonTransparent = 0
        let colored = 0
        let brightnessTotal = 0

        for (let i = 0; i < pixels.length; i += 4) {
          const r = pixels[i]
          const g = pixels[i + 1]
          const b = pixels[i + 2]
          const a = pixels[i + 3]
          const brightness = (r + g + b) / 3

          if (a > 8) nonTransparent += 1
          if (a > 8 && brightness > 8 && brightness < 248) colored += 1
          brightnessTotal += brightness
        }

        pixelStats = {
          nonTransparent,
          colored,
          averageBrightness: Number((brightnessTotal / (pixels.length / 4)).toFixed(2)),
        }
      }
    }

    const rect = canvas?.getBoundingClientRect()
    return {
      hasCanvas: canvas instanceof HTMLCanvasElement,
      canvasRect: rect
        ? {
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            x: Math.round(rect.x),
            y: Math.round(rect.y),
          }
        : null,
      canvasBuffer:
        canvas instanceof HTMLCanvasElement
          ? { width: canvas.width, height: canvas.height }
          : null,
      pixelStats,
      hasCoupleNames: text.includes("Văn Sang") && text.includes("Thu Thương"),
      hasCorrectWeekday: text.includes("Thứ Bảy"),
      heroHeight: firstSection ? Math.round(firstSection.getBoundingClientRect().height) : null,
    }
  })

  const screenshotPath = `D:\\wedding\\verification-${viewport.name}.png`
  await page.screenshot({ path: screenshotPath, fullPage: false })
  results.push({ viewport, screenshotPath, info })
  await page.close()
}

await browser.close()
console.log(JSON.stringify(results, null, 2))
