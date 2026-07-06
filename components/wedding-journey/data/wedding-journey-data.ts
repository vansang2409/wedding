export type JourneySceneId = "opening" | "story" | "gallery" | "wedding-info" | "countdown" | "thank-you"

export type JourneyScene = {
  id: JourneySceneId
  label: string
  eyebrow: string
  range: [number, number]
  atmosphere: "dream" | "memory" | "gallery" | "glass" | "ceremony" | "ending"
}

export type JourneyImage = {
  src: string
  alt: string
  priority?: boolean
}

export type StoryMoment = {
  date: string
  title: string
  description: string
  image: string
}

export const weddingJourneyData = {
  couple: {
    groom: {
      name: "Văn Sang",
      shortName: "Sang",
      character: "/images/groom-cartoon.png",
      avatar: "/images/6.jpg",
    },
    bride: {
      name: "Thu Thương",
      shortName: "Thương",
      character: "/images/bride-cartoon.png",
      avatar: "/images/3.jpg",
    },
    displayNames: "Văn Sang & Thu Thương",
    brideFamily: {
      label: "Nhà Gái",
      father: "Ngô Đình Hùng",
      mother: "Phạm Thị Hà",
      address: "Thôn 2A, xã Krông Pắc, Dăk Lắk",
      mapUrl: "https://maps.app.goo.gl/XA1MpZCgMikMN5CX9",
    },
    groomFamily: {
      label: "Nhà trai",
      father: "Trần Văn Dũng",
      mother: "Trương Thị Kim Oanh",
      address: "Thôn 1B, xã Krông Pắc, Dăk Lắk",
      mapUrl: "https://maps.app.goo.gl/JonJnaA4yukuVWCp8",
    },
  },
  hero: {
    label: "Every love story has a beginning",
    headline: ["Văn Sang", "&", "Thu Thương"],
    description: "01.11.2027",
    primaryCta: "Explore our story",
  },
  event: {
    title: "Lễ Thành Hôn",
    dateISO: "2027-11-01",
    displayDate: "01.11.2027",
    longDate: "01 November 2027",
    damNgoDate: "31.08.2026",
    venue: "NHÀ VĂN HÓA XÃ HÒA TIẾN",
    address: "NHÀ VĂN HÓA XÃ HÒA TIẾN",
    mapUrl: "https://maps.app.goo.gl/JonJnaA4yukuVWCp8",
  },
  scenes: [
    { id: "opening", label: "Opening", eyebrow: "Scene 01", range: [0, 0.18], atmosphere: "dream" },
    { id: "story", label: "Our Story", eyebrow: "Scene 02", range: [0.18, 0.38], atmosphere: "memory" },
    { id: "gallery", label: "Gallery", eyebrow: "Scene 03", range: [0.38, 0.56], atmosphere: "gallery" },
    { id: "wedding-info", label: "Wedding", eyebrow: "Scene 04", range: [0.56, 0.74], atmosphere: "glass" },
    { id: "countdown", label: "Countdown", eyebrow: "Scene 05", range: [0.74, 0.9], atmosphere: "ceremony" },
    { id: "thank-you", label: "Thank You", eyebrow: "Scene 06", range: [0.9, 1], atmosphere: "ending" },
  ] satisfies JourneyScene[],
  storyMoments: [
    {
      date: "20214 - 2017",
      title: "Học chung tại trường THPT Nguyên Bỉnh Khiêm tại Dăk Lăk",
      description: "",
      image: "/images/1.jpg",
    },
    {
      date: "2018",
      title: "gặp lại nhau tại Sài gòn khi học đại học",
      description: "",
      image: "/images/2.jpg",
    },
    {
      date: "20/05/2020",
      title: "chính thức quen nhau",
      description: "",
      image: "/images/4.jpg",
    },
    {
      date: "20/05/2026",
      title: "Cầu hôn",
      description: "",
      image: "/images/7.jpg",
    },
    {
      date: "31/08/2026",
      title: "Lễ Dạm Ngõ",
      description: "",
      image: "/images/10.jpg",
    },
    {
      date: "01/11/2027",
      title: "Lễ Thành Hôn",
      description: "",
      image: "/images/we.png",
    },
  ] satisfies StoryMoment[],
  gallery: [
    { src: "/images/we.png", alt: "Văn Sang và Thu Thương", priority: true },
    { src: "/images/1.jpg", alt: "Văn Sang và Thu Thương" },
    { src: "/images/2.jpg", alt: "Văn Sang và Thu Thương" },
    { src: "/images/4.jpg", alt: "Văn Sang và Thu Thương" },
    { src: "/images/7.jpg", alt: "Văn Sang và Thu Thương" },
    { src: "/images/10.jpg", alt: "Văn Sang và Thu Thương" },
  ] satisfies JourneyImage[],
  audio: {
    src: "/ct.mp3",
    title: "Wedding music",
  },
}
