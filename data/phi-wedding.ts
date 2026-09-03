export type PhiInvitationSide = "bride" | "groom"

const albumImages = Array.from(
  { length: 10 },
  (_, index) => `/images/phi/album/photo-${String(index + 1).padStart(2, "0")}.jpg`,
)

const shared = {
  groom: "Nguyễn Hồ Hoàng Phi",
  bride: "Lê Thị Mỹ Duyên",
  groomParents: ["Ông Nguyễn Hồ Chương", "Bà Tạ Thị Huệ"],
  brideParents: ["Ông Lê Văn Hoàng", "Bà Vũ Thị Vân"],
  groomAddress: ["52/14/3 Hồ Tùng Mậu", "P. Buôn Ma Thuột, Đắk Lắk"],
  brideAddress: ["TDP 1, P. Thành Nhất", "Đắk Lắk"],
}

export const phiWeddingData = {
  bride: {
    ...shared,
    albumImages,
    side: "bride" as const,
    ceremony: "Lễ vu quy",
    names: ["Mỹ Duyên", "Hoàng Phi"],
    dateLabel: "Thứ Bảy, 19 tháng 09 năm 2026",
    targetDate: "2026-09-19T09:00:00+07:00",
    lunarDate: "Nhằm ngày 09 tháng 08 năm Bính Ngọ",
    venue: "Tư gia nhà gái",
    venueAddress: ["Gần Lối Xưa Quán", "TDP 1, P. Thành Nhất, Đắk Lắk"],
    reception: "10:30",
    banquet: "11:00",
    ceremonyTime: "09:00",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=TDP+1+Phuong+Thanh+Nhat+Dak+Lak",
    qrImage: "/images/phi/qr-nha-gai-cropped-v3.jpg",
    design: {
      cover: "/images/phi/design/bride-cover.png",
      family: "/images/phi/design/bride-family-v2.png",
      event: "/images/phi/design/bride-event.png",
      gallery: "/images/phi/design/bride-gallery.png",
    },
    heroImage: "/images/phi/studio-focus.webp",
    eventImage: "/images/phi/garden-letters.webp",
    gallery: [
      ["/images/phi/bride-portrait.webp", "Chân dung cô dâu Mỹ Duyên"],
      ["/images/phi/studio-standing.webp", "Hoàng Phi và Mỹ Duyên nắm tay trong studio"],
      ["/images/phi/garden-wide.webp", "Hoàng Phi và Mỹ Duyên bên đài phun nước"],
      ["/images/phi/studio-black.webp", "Hoàng Phi và Mỹ Duyên trong trang phục cưới đen trắng"],
    ],
    calendar: {
      start: "20260919T033000Z",
      end: "20260919T053000Z",
      filename: "tiec-cuoi-nha-gai.ics",
    },
  },
  groom: {
    ...shared,
    albumImages,
    side: "groom" as const,
    ceremony: "Lễ tân hôn",
    names: ["Hoàng Phi", "Mỹ Duyên"],
    dateLabel: "Chủ Nhật, 20 tháng 09 năm 2026",
    targetDate: "2026-09-20T09:00:00+07:00",
    lunarDate: "Nhằm ngày 10 tháng 08 năm Bính Ngọ",
    venue: "Nhà hàng Hoàng Lộc 1",
    venueAddress: ["07-09 Y Bih Alêô", "P. Buôn Ma Thuột, Đắk Lắk"],
    reception: "11:00",
    banquet: "11:30",
    ceremonyTime: "09:00",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nha+hang+Hoang+Loc+1+07-09+Y+Bih+Aleo+Buon+Ma+Thuot",
    qrImage: "/images/phi/qr-nha-trai-cropped-v3.jpg",
    design: {
      cover: "/images/phi/design/groom-cover.png",
      family: "/images/phi/design/groom-family-v2.png",
      event: "/images/phi/design/groom-event-v2.png",
      gallery: "/images/phi/design/groom-gallery.png",
    },
    heroImage: "/images/phi/garden-couple.webp",
    eventImage: "/images/phi/garden-wide.webp",
    gallery: [
      ["/images/phi/garden-letters.webp", "Hoàng Phi và Mỹ Duyên trao nhau ánh nhìn trong khu vườn"],
      ["/images/phi/studio-close.webp", "Hoàng Phi hôn lên trán Mỹ Duyên"],
      ["/images/phi/groom-fountain.webp", "Chân dung chú rể Hoàng Phi bên đài phun nước"],
      ["/images/phi/studio-editorial.webp", "Ảnh cưới toàn thân của Hoàng Phi và Mỹ Duyên"],
    ],
    calendar: {
      start: "20260920T040000Z",
      end: "20260920T060000Z",
      filename: "tiec-cuoi-nha-trai.ics",
    },
  },
} as const

export type PhiInvitationData = (typeof phiWeddingData)[PhiInvitationSide]
