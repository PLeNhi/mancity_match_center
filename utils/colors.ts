export function getPositionColor(position: string): string {
  switch (position) {
    case "Thủ môn":
      return "from-yellow-300 to-yellow-500";
    case "Hậu Vệ":
      return "from-blue-300 to-blue-500";
    case "Tiền Vệ":
      return "from-green-300 to-green-500";
    case "Tiền Đạo":
      return "from-red-300 to-red-500";
    default:
      return "from-gray-300 to-gray-500";
  }
}
