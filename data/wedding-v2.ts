export const weddingV2Data = {
  couple: {
    groom: "Văn Sang",
    bride: "Thu Thương",
    monogram: "VS",
  },
  hero: {
    eyebrow: "Mỗi câu chuyện tình yêu đều có một chương đầu.",
    date: "01.11.2027",
    cta: "Khám phá câu chuyện của chúng tôi",
    scrollLabel: "Kéo xuống",
    image: {
      src: "/images/wedding-v2-couple-cutout.png",
      alt: "Chân dung minh họa Văn Sang và Thu Thương",
    },
  },
  story: {
    title: "Câu chuyện của chúng tôi",
    moments: [
      {
        year: "2014 - 2017",
        title: "Học chung dưới mái trường",
        body: "Cùng học tại THPT Nguyễn Bỉnh Khiêm ở Đắk Lắk.",
        image: {
          src: "/images/gallery-3.jpg",
          alt: "Khoảnh khắc đầu tiên trong hành trình của Văn Sang và Thu Thương",
        },
      },
      {
        year: "2018",
        title: "Gặp lại ở Sài Gòn",
        body: "Gặp lại giữa Sài Gòn trong những năm đại học.",
        image: {
          src: "/images/gallery-1.jpg",
          alt: "Một khoảnh khắc lãng mạn khi gặp lại",
        },
      },
      {
        year: "20.05.2020",
        title: "Chính thức quen nhau",
        body: "Từ những rung động nhỏ, cả hai chọn bước cạnh nhau.",
        image: {
          src: "/images/gallery-2.jpg",
          alt: "Khoảnh khắc yêu nhau của cô dâu chú rể",
        },
      },
      {
        year: "20.05.2026",
        title: "Cầu hôn",
        body: "Một lời hẹn ước mở ra chương mới của hai người.",
        image: {
          src: "/images/gallery-4.jpg",
          alt: "Khoảnh khắc cầu hôn của Văn Sang và Thu Thương",
        },
      },
      {
        year: "31.08.2026",
        title: "Lễ Dạm Ngõ",
        body: "Gia đình hai bên gặp gỡ trong ngày thưa chuyện.",
        image: {
          src: "/images/gallery-5.jpg",
          alt: "Ngày lễ dạm ngõ của hai gia đình",
        },
      },
      {
        year: "01.11.2027",
        title: "Lễ Thành Hôn",
        body: "Ngày Văn Sang và Thu Thương chính thức nên duyên.",
        image: {
          src: "/images/wedding-v2-couple-cutout.png",
          alt: "Ngày thành hôn của Văn Sang và Thu Thương",
        },
      },
    ],
  },
  gallery: {
    title: "Những khoảnh khắc đẹp nhất",
    subtitle: "Từng khoảnh khắc bên nhau đều vô cùng đáng nhớ.",
    cta: "Xem thêm",
    photos: [
      { src: "/images/gallery-1.jpg", alt: "Khoảnh khắc trong vườn hoa", variant: "wide" },
      { src: "/images/gallery-2.jpg", alt: "Cô dâu chú rể nhìn nhau trong studio", variant: "portrait" },
      { src: "/images/gallery-3.jpg", alt: "Cặp đôi trong khung cảnh núi đồi", variant: "square" },
      { src: "/images/gallery-4.jpg", alt: "Cặp đôi trong không gian tiệc cưới", variant: "wide" },
      { src: "/images/gallery-5.jpg", alt: "Cặp đôi đi bên biển lúc hoàng hôn", variant: "square" },
      { src: "/images/1.jpg", alt: "Khoảnh khắc dịu dàng giữa vườn cây", variant: "portrait" },
    ],
  },
  weddingInfo: {
    title: "Lễ cưới",
    families: {
      bride: {
        title: "Nhà gái",
        parents: "Ông Ngô Đình Hùng & Bà Phạm Thị Hà",
        address: "Thôn 2A, xã Krông Pắc, Đắk Lắk",
      },
      groom: {
        title: "Nhà trai",
        parents: "Ông Trần Văn Dũng & Bà Trương Thị Kim Oanh",
        address: "Thôn 1B, xã Krông Pắc, Đắk Lắk",
      },
    },
    ceremonies: [
      {
        label: "Lễ Dạm Ngõ",
        time: "31.08.2026",
        date: "Nhà Gái",
        venue: "Tư gia nhà gái",
        address: "Thôn 2A, xã Krông Pắc, Đắk Lắk",
        mapUrl: "https://maps.app.goo.gl/XA1MpZCgMikMN5CX9",
      },
      {
        label: "Lễ Thành Hôn",
        time: "01.11.2027",
        date: "Nhà Trai",
        venue: "Tư gia nhà trai",
        address: "Thôn 1B, xã Krông Pắc, Đắk Lắk",
        note: "Đãi tiệc tại Nhà Văn Hóa Xã Hòa Tiến",
        mapUrl: "https://maps.app.goo.gl/JonJnaA4yukuVWCp8",
      },
    ],
  },
  countdown: {
    title: "Ngày chúng tôi về chung một nhà",
    targetDate: "2027-11-01T10:00:00+07:00",
    units: {
      days: "Ngày",
      hours: "Giờ",
      minutes: "Phút",
      seconds: "Giây",
    },
  },
  thankYou: {
    scriptTitle: "Cảm ơn bạn",
    message: "vì đã là một phần trong hành trình yêu thương của chúng tôi.",
    signature: "Văn Sang & Thu Thương",
    date: "01.11.2027",
    image: {
      src: "/images/wedding-v2-couple-cutout.png",
      alt: "Văn Sang và Thu Thương",
    },
  },
  audio: {
    src: "/ct.mp3",
    label: "Bật hoặc tắt nhạc nền",
  },
} as const
