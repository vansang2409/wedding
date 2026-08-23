import { chromium } from "playwright-core"

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
})

const viewports = [{ name: "dam-ngo-v2-tv", width: 1920, height: 1080 }]

const results = []

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 })
  const runtimeErrors = []
  page.on("pageerror", (error) => runtimeErrors.push(`pageerror: ${error.message}`))
  page.on("console", (message) => {
    if (message.type() === "error") runtimeErrors.push(`console: ${message.text()}`)
  })
  page.on("response", (response) => {
    if (response.status() >= 400) runtimeErrors.push(`http ${response.status()}: ${response.url()}`)
  })
  await page.goto("http://localhost:3000/dam-ngo-v2", {
    waitUntil: "networkidle",
    timeout: 30_000,
  })
  await page.waitForTimeout(3600)

  const metrics = await page.evaluate(() => {
    const pageRoot = document.querySelector("main")
    const title = document.querySelector("h1")
    const titleArtwork = document.querySelector("[data-title-artwork]")
    const gratitude = document.querySelector("[data-gratitude]")
    const couple = document.querySelector('[data-depth-layer="couple"]')
    const swallows = document.querySelector('[data-depth-layer="swallows"]')
    const swallowActors = [...document.querySelectorAll('[data-route]')]
    const petals = [...document.querySelectorAll('[data-duration]')]
    const images = [...document.querySelectorAll("img")]
    const visibleImages = images.filter((image) => image.getBoundingClientRect().width > 0)
    const overflowX = document.documentElement.scrollWidth - window.innerWidth
    const overflowY = document.documentElement.scrollHeight - window.innerHeight
    const gratitudeRect = gratitude?.getBoundingClientRect()
    const coupleRect = couple?.getBoundingClientRect()
    const overlapWidth = gratitudeRect && coupleRect
      ? Math.max(0, Math.min(gratitudeRect.right, coupleRect.right) - Math.max(gratitudeRect.left, coupleRect.left))
      : 0
    const overlapHeight = gratitudeRect && coupleRect
      ? Math.max(0, Math.min(gratitudeRect.bottom, coupleRect.bottom) - Math.max(gratitudeRect.top, coupleRect.top))
      : 0

    return {
      pageHeight: pageRoot?.getBoundingClientRect().height ?? null,
      titleLines: title?.textContent?.trim() ? 1 : 0,
      titleArtworkVisible: titleArtwork ? titleArtwork.getBoundingClientRect().width > 0 : false,
      imagesLoaded: visibleImages.every((image) => image.complete && image.naturalWidth > 0),
      visibleImageCount: visibleImages.length,
      gratitudeVisible: gratitude ? gratitude.getBoundingClientRect().height > 0 : false,
      gratitudeText: gratitude?.textContent?.replace(/\s+/g, " ").trim() ?? null,
      gratitudeCoupleOverlapArea: Math.round(overlapWidth * overlapHeight),
      depthLayers: document.querySelectorAll("[data-depth-layer]").length,
      animatedPetalsVisible: petals.filter((petal) => Number.parseFloat(getComputedStyle(petal).opacity) > 0.05).length,
      swallowsTransform: swallows ? getComputedStyle(swallows).transform : null,
      animatedSwallowsVisible: swallowActors.filter((bird) => Number.parseFloat(getComputedStyle(bird).opacity) > 0.05).length,
      firstSwallowTransform: swallowActors[0] ? getComputedStyle(swallowActors[0]).transform : null,
      overflowX,
      overflowY,
      text: document.body.innerText,
    }
  })

  const screenshotPath = `D:\\wedding\\verification-${viewport.name}.png`
  await page.screenshot({ path: screenshotPath, fullPage: false })
  results.push({ viewport, screenshotPath, metrics: { ...metrics, runtimeErrors } })
  await page.close()
}

await browser.close()
console.log(JSON.stringify(results, null, 2))
