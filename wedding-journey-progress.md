# Wedding Journey Progress

## Mục tiêu

Tạo một phiên bản thiệp cưới mới tại `/thiep-cuoi-3d`, không còn là landing page truyền thống mà là một hành trình tương tác nhiều cảnh, theo hướng cinematic / Awwwards-style storytelling.

## Kiến trúc đã duyệt

Trang mới được thiết kế như một hành trình liên tục gồm 7 cảnh:

1. Opening
2. Our Story
3. Gallery
4. Wedding Information
5. Countdown
6. RSVP
7. Thank You

Các phần được tách theo kiến trúc:

- Scene components
- Animation system
- Camera system
- Data layer
- Asset loader
- Effects
- Utilities
- Motion presets
- Theme tokens

## Module đã triển khai

### Module 1: Foundation

Đã tạo cấu trúc mới cho trải nghiệm wedding journey:

- `app/thiep-cuoi-3d/page.tsx`
- `components/wedding-journey/`
- Data layer: `components/wedding-journey/data/wedding-journey-data.ts`
- Theme tokens: `components/wedding-journey/theme/tokens.ts`
- Scene registry: `components/wedding-journey/animation/scene-registry.ts`
- Motion presets: `components/wedding-journey/animation/motion-presets.ts`
- Device profile utility: `components/wedding-journey/utils/device-profile.ts`

Đã thêm provider system:

- `JourneyProvider`
- `ScrollCameraProvider`
- `AssetLoaderProvider`
- `MotionPreferenceProvider`
- `AudioProvider`

Đã thêm shell và stage:

- `WeddingJourneyPage`
- `JourneyShell`
- `LoadingExperience`
- `JourneyControls`
- `VisualStage`
- `ParticleField`
- `SceneStack`

### Module 2: Opening Scene

Đã triển khai cảnh mở đầu:

- `OpeningScene`
- `OpeningCopy`
- `CoupleHeroVisual`
- `OpeningObjects`

Các điểm chính:

- Hero text lớn kiểu cinematic sans-serif.
- Couple visual bên phải.
- Thảm / object nền tạo cảm giác 3D bằng CSS transform.
- Petals và object nhẹ trong nền.
- Pointer parallax nhẹ trên desktop.
- Global controls gồm logo, sound button, menu/next button.

### Module 3: Our Story Scene

Đã triển khai cảnh kể chuyện:

- `StoryScene`
- `TimelinePath`
- `StoryMomentCard`
- `StoryTransitionLights`

Các điểm chính:

- Timeline path dạng cinematic memory path.
- Memory cards nổi theo chiều sâu.
- Mobile chuyển thành vertical story flow.
- Có transition light layer để tránh cảm giác section rời rạc.

### Module 4: Gallery Scene

Đã triển khai gallery:

- `GalleryScene`
- `FloatingPhotoField`
- `PhotoPlane`
- `FocusedPhotoOverlay` placeholder

Các điểm chính:

- Ảnh được bố trí như floating photo field, không phải grid truyền thống.
- Dùng CSS 3D transform và rotation nhẹ.
- Mobile chuyển thành stack ảnh lớn, nhẹ hơn và dễ xem.

### Module 5: Wedding Information Scene

Đã triển khai cảnh thông tin cưới:

- `WeddingInfoScene`
- `FloatingInfoCard`
- `InfoConstellation`
- `MapAction`

Các điểm chính:

- Thông tin được đặt trong glass cards.
- Có constellation SVG background nhẹ.
- Đã sửa lỗi chữ trong card địa chỉ bị quá lớn làm vỡ layout.
- Đã tăng `scroll-margin-top` để anchor không bị fixed header che.

## Kiểm tra đã chạy

Sau các module đã chạy:

```bash
corepack pnpm exec tsc --noEmit
corepack pnpm build
```

Kết quả:

- Type-check: pass
- Production build: pass
- Route `/thiep-cuoi-3d` build static thành công

Đã kiểm tra responsive bằng Playwright:

- Desktop
- Tablet
- Mobile

Kết quả:

- Không bị overflow ngang.
- Các scene chính render đủ.
- Opening, Story, Gallery, Wedding Information đã được kiểm tra bằng screenshot.

## Ghi chú về ESLint

Đã thử chạy:

```bash
corepack pnpm lint
```

Nhưng hiện repo chưa có `eslint` binary khả dụng, nên lệnh fail với lỗi:

```txt
'eslint' is not recognized as an internal or external command
```

Vì vậy hiện tại đang dùng `tsc --noEmit` và `next build` để kiểm tra chính.

## Sửa lỗi TypeScript ngoài module mới

Trong quá trình chạy `tsc --noEmit`, phát hiện lỗi type có sẵn ở các component Three.js cũ:

- `components/wedding/dam-ngo-scene-3d.tsx`
- `components/wedding/wedding-scene-3d.tsx`

Đã sửa bằng cách khai báo rõ generic type cho `THREE.Mesh` material/geometry, không đổi behavior render.

## File / thư mục mới chính

```txt
app/thiep-cuoi-3d/
components/wedding-journey/
```

## File untracked không thuộc phần triển khai

Các file sau đang tồn tại nhưng không thuộc phần implementation mới:

```txt
info.md
public/images/damngo.png
```

## Việc còn lại

Các module tiếp theo cần triển khai:

1. Countdown scene
2. RSVP scene
3. Thank You scene
4. Hoàn thiện transition liên cảnh
5. Thêm reduced-motion fallback chi tiết hơn
6. Tối ưu performance / lazy loading sâu hơn
7. Kiểm tra Lighthouse nếu cần

## Cập nhật Module 6: Countdown Scene

Đã triển khai Countdown Scene theo Creative Direction `Lavender Dream`.

Các component mới:

- `components/wedding-journey/scenes/countdown/countdown-centerpiece.tsx`
- `components/wedding-journey/scenes/countdown/countdown-digits.tsx`
- `components/wedding-journey/scenes/countdown/ring-halo.tsx`

Các điểm chính:

- Countdown dùng ngày cưới từ `weddingJourneyData.event.dateISO`.
- Centerpiece có halo/ring nhiều lớp theo hướng lavender + gold.
- Countdown digits đặt trên glass cards.
- Có gold motes nhẹ để giữ cảm giác cinematic nhưng không dùng WebGL.
- Mobile giữ cùng cảm xúc nhưng giảm mật độ visual.
- Đã sửa lỗi hydration do `Date.now()` lệch giữa server và client bằng cách render trạng thái ban đầu ổn định rồi cập nhật sau khi client mount.
- Đã chỉnh kích thước date display để không bị cắt trên desktop.

Kiểm tra sau Module 6:

```bash
corepack pnpm exec tsc --noEmit
corepack pnpm build
corepack pnpm lint
```

Kết quả:

- Type-check: pass
- Production build: pass
- Runtime console khi kiểm bằng Playwright: không còn hydration error
- Responsive smoke test: desktop, tablet, mobile không overflow ngang
- Lint: vẫn chưa chạy được vì repo thiếu `eslint` binary, cùng tình trạng đã ghi chú trước đó

Việc còn lại sau Module 6:

1. RSVP scene
2. Thank You scene
3. Hoàn thiện transition liên cảnh
4. Reduced-motion fallback chi tiết hơn
5. Tối ưu performance / lazy loading sâu hơn
6. Kiểm tra Lighthouse nếu cần

## Cập nhật Module 7: RSVP Scene

Đã triển khai RSVP Scene theo Creative Direction `Lavender Dream`.

Các component mới:

- `components/wedding-journey/scenes/rsvp/rsvp-glass-panel.tsx`
- `components/wedding-journey/scenes/rsvp/rsvp-submit-state.tsx`

Các điểm chính:

- RSVP được thiết kế như hành động ký vào một tấm thiệp cưới premium thay vì điền form web thông thường.
- Glassmorphism panel có lavender/gold bloom nhẹ.
- Form gồm tên, số điện thoại, số khách, xác nhận tham dự và lời nhắn tùy chọn.
- Có label thật cho input, fieldset/legend cho lựa chọn tham dự.
- Có inline validation cho tên, số điện thoại, số khách và xác nhận tham dự.
- Focus state dùng lavender glow mềm, không phá layout.
- Submit button có tương tác hover/focus nhẹ theo hướng premium.
- Success state dùng soft bloom animation, không dùng confetti.
- Mobile giữ bố cục một cột, field lớn, dễ thao tác và không phụ thuộc hover.
- Animation tôn trọng `prefers-reduced-motion` thông qua global reduced-motion rule của journey.

Kiểm tra sau Module 7:

```bash
corepack pnpm exec tsc --noEmit
corepack pnpm build
```

Kết quả:

- Type-check: pass
- Production build: pass
- Runtime console khi kiểm bằng Playwright: không có lỗi
- Responsive smoke test: desktop, tablet, mobile không overflow ngang
- Validation test: submit rỗng hiển thị lỗi inline
- Success test: nhập dữ liệu hợp lệ chuyển sang success state

Việc còn lại sau Module 7:

1. Thank You scene
2. Hoàn thiện transition liên cảnh
3. Reduced-motion fallback chi tiết hơn nếu cần
4. Tối ưu performance / lazy loading sâu hơn
5. Kiểm tra Lighthouse nếu cần

## Cập nhật Module 8: Thank You Scene

Đã triển khai Thank You Scene như cảnh kết thúc cảm xúc của trải nghiệm.

Các component mới:

- `components/wedding-journey/scenes/thank-you/final-couple-visual.tsx`
- `components/wedding-journey/scenes/thank-you/ending-message.tsx`
- `components/wedding-journey/scenes/thank-you/ending-actions.tsx`
- `components/wedding-journey/scenes/thank-you/ending-particles.tsx`
- `components/wedding-journey/scenes/thank-you/ending-audio-fade.tsx`

Các thay đổi hỗ trợ:

- Cập nhật `components/wedding-journey/providers/audio-provider.tsx` để hỗ trợ `fadeToVolume`.

Các điểm chính:

- Final scene dùng couple visual, tên cặp đôi và ngày cưới làm trọng tâm.
- Nền sáng hơn với lavender haze và gold glow nhẹ.
- Có gold/lavender particles và blush petals trôi chậm lên trên.
- Có breathing light/visual motion nhẹ.
- Có thank-you message và lời cảm ơn khách mời.
- Có nút `Xem lại hành trình` và `Chia sẻ`.
- Share button dùng Web Share API nếu có, fallback copy link.
- Khi active scene là `thank-you`, nhạc nền fade nhẹ xuống volume thấp để tạo cảm giác kết thúc.
- Tôn trọng `prefers-reduced-motion` thông qua global reduced-motion rule của journey.

Kiểm tra sau Module 8:

```bash
corepack pnpm exec tsc --noEmit
corepack pnpm build
corepack pnpm lint
```

Kết quả:

- Type-check: pass
- Production build: pass
- Runtime console khi kiểm bằng Playwright: không có lỗi
- Responsive smoke test: desktop, tablet, mobile không overflow ngang
- Thank You scene hiển thị đủ couple names, wedding date và 2 actions
- Lint: vẫn chưa chạy được vì repo thiếu `eslint` binary, cùng tình trạng đã ghi chú trước đó

Việc còn lại sau Module 8:

1. Hoàn thiện transition liên cảnh
2. Reduced-motion fallback chi tiết hơn nếu cần
3. Tối ưu performance / lazy loading sâu hơn
4. Kiểm tra Lighthouse nếu cần
## Cập nhật UX/UI Polish Pass

Đã hoàn thành một lượt polish toàn bộ trải nghiệm `/thiep-cuoi-3d` sau khi core implementation hoàn tất. Không thêm feature mới, chỉ tinh chỉnh presentation, motion và responsive để journey liền mạch hơn.

Các thay đổi chính:

- Chuẩn hóa lại token màu/motion cho Lavender Dream: lavender, pale lavender, plum, glass, glow/focus shadow.
- Làm nền global mềm hơn với ivory/lavender/champagne lighting và thay đổi atmosphere theo active scene.
- Chuẩn hóa scene grid bằng `grid-template-columns: minmax(0, 1fr)` để tránh content dài kéo rộng layout trên mobile.
- Tăng nhịp scroll/scene spacing, làm các scene có nhiều breathing space hơn.
- Làm transition giữa scene mềm hơn bằng glow layer chung và easing thống nhất.
- Giảm mật độ particle global và Thank You particles; chuyển cảm giác từ confetti sang dust/motes nhẹ.
- Làm chậm halo/countdown/ring animation để đúng cinematic pacing.
- Giảm hover lift quá mạnh ở story card, gallery photo và info card.
- Đồng bộ focus state cho controls, CTA, map action, RSVP fields, attendance options và ending actions.
- Chỉnh glass effect nhẹ hơn, tăng readability và giảm shadow quá nặng.
- Cải thiện mobile spacing ở Thank You scene; sửa lỗi nội dung bị lệch/cắt ngang do grid auto track.
- Ẩn scene indicator/progress line khi vào Thank You để cảnh kết không bị header đè lên visual focus.

Kiểm tra sau polish:

```bash
corepack pnpm exec tsc --noEmit
corepack pnpm build
```

Kết quả:

- Type-check: pass
- Production build: pass
- Runtime smoke test bằng Playwright Core: desktop, tablet, mobile không có console error.
- Responsive smoke test: desktop, tablet, mobile đều có 7 scene, không overflow ngang.
- Scroll tới cuối journey: active scene đúng là `thank-you`.
- Đã kiểm tra screenshot mobile Thank You sau fix: nội dung không còn bị lệch/cắt.

Ghi chú:

- `corepack pnpm lint` vẫn chưa chạy được do repo không có `eslint` binary khả dụng, cùng tình trạng đã ghi chú trước đó.

## Cập nhật Visual Excellence Pass

Đã hoàn thành Visual Excellence Pass cho `/thiep-cuoi-3d` sau khi project feature complete. Không thêm scene mới, không đổi architecture, không đổi storytelling flow; chỉ nâng chất lượng thị giác, nhịp chuyển cảnh, chiều sâu và cảm giác cinematic theo Creative Direction `Lavender Dream`.

Các thay đổi chính:

- Tăng scene continuity bằng global atmosphere/stage layers: ánh sáng ivory-lavender-gold chuyển mềm theo active scene, giảm cảm giác mỗi cảnh là một section độc lập.
- Tinh chỉnh scene spacing: giảm khoảng trắng dọc quá rời rạc nhưng vẫn giữ breathing room.
- Nâng hero bằng ambient glow, shadow nhiều lớp, breathing highlight cho couple visual, CTA/floating pills có depth tốt hơn.
- Nâng Our Story bằng timeline path đủ điểm cho các mốc, memory cards có lớp sáng/glow liên kết hơn, giảm cảm giác card rời.
- Nâng Gallery thành cụm ảnh floating rõ hierarchy hơn: ảnh featured lớn hơn, các ảnh phụ overlap, có depth scale, ambient glow và perspective.
- Nâng Wedding Information từ cảm giác dashboard cards sang luxury invitation glass: có stage kính chung, card nổi, typography và composition cân bằng hơn.
- Nâng Countdown thành centerpiece rõ hơn bằng halo glow, soft shadow, ring motion chậm hơn và digit cards có kính/shadow tinh tế.
- Nâng RSVP về mặt visual: glass panel sâu hơn, focus/hover mềm hơn, success bloom rõ hơn, giữ nguyên UX/validation.
- Nâng Thank You thành emotional climax: camera-settle, ánh sáng sáng dần, final visual có bloom, particles/petals dịu hơn, typography có drop shadow mềm.
- Sửa các chuỗi tiếng Việt bị mojibake trong những scene đã polish để giao diện hiển thị sạch hơn.

Kiểm tra sau Visual Excellence Pass:

```bash
corepack pnpm exec tsc --noEmit
corepack pnpm build
```

Kết quả:

- Type-check: pass
- Production build: pass
- Runtime console test bằng Playwright Core: desktop, tablet, mobile không có console error.
- Responsive smoke test: desktop, tablet, mobile đều có đủ 7 scene và không overflow ngang.
- Gallery vẫn click mở được lightbox sau khi polish layout ảnh floating.
- Scroll tới cuối journey trên desktop xác nhận active scene là `thank-you`.

## Cập nhật theo mockup Lavender Editorial mới

Đã triển khai lại visual/layout của `/thiep-cuoi-3d` theo ảnh reference mới, không copy pixel trực tiếp nhưng bám visual language, spacing, typography hierarchy và cảm giác tổng thể của mockup.

Các thay đổi chính:

- Xóa RSVP khỏi journey render và scene registry. Trang hiện còn 6 scene: Opening, Our Story, Gallery, Wedding, Countdown, Thank You.
- Sửa data layer tiếng Việt về UTF-8 sạch cho tên, ngày, venue, story moments và alt text.
- Đổi global navigation từ kiểu dev/app controls sang monogram `V/S`, nav editorial và icon controls nhẹ như mockup.
- Rework global stage/background sang nền lavender paper, grid/noise nhẹ, glow mềm và panel cards gần source of truth hơn.
- Rebuild Opening thành hero editorial: text lớn bên trái, couple visual bên phải, CTA, date line, petals và circular accent.
- Rebuild Our Story thành timeline/editorial card với ảnh dán giấy và tape corners.
- Rebuild Gallery thành memories collage với polaroid-style photos, vẫn giữ lightbox production-ready.
- Rebuild Wedding Information thành Wedding Day invitation panel với Save the Date center, thông tin cưới bên phải, không còn dashboard card.
- Rebuild Countdown thành horizontal editorial strip giống mockup, giữ logic countdown live.
- Rebuild Thank You thành closing card ngang với ảnh couple, names/date, replay/share actions tinh tế hơn.
- Tinh chỉnh `scroll-margin-top` để anchor không bị fixed header che trên mobile/tablet.

Kiểm tra sau cập nhật mockup:

```bash
corepack pnpm exec tsc --noEmit
corepack pnpm build
```

Kết quả:

- Type-check: pass
- Production build: pass
- Runtime console test bằng Playwright Core: desktop, tablet, mobile không có console error.
- Responsive smoke test: desktop, tablet, mobile không overflow ngang.
- Có đủ 6 scene mới và `#rsvp` không còn trong DOM.
- Nav không còn RSVP.
- Gallery vẫn click được ảnh để mở lightbox.
- Scroll cuối journey active scene là `thank-you`.
