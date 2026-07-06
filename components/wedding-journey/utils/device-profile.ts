export type DeviceProfile = "high" | "medium" | "low"

export function getDeviceProfile(width: number): DeviceProfile {
  if (width < 768) return "low"
  if (width < 1180) return "medium"
  return "high"
}
