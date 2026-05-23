export const getStatusStyle = (status: string) => {
  switch (status) {
    case 'played':
      return 'bg-slate-100 text-slate-700';
    case 'live':
      return 'bg-red-100 text-red-700 animate-pulse';
    case 'upcoming':
      return 'bg-blue-100 text-blue-700';
    default:
      return '';
  }
};

export const getStatusLabel = (status: string) => {
  switch (status) {
    case 'played':
      return 'Đã diễn ra';
    case 'live':
      return 'Đang diễn ra';
    case 'upcoming':
      return 'Sắp tới';
    default:
      return '';
  }
};
