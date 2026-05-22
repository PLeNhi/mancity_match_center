import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/vi';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('vi');

const DATE_FORMATS = [
  'YYYY-MM-DDTHH:mm:ssZ',
  'YYYY-MM-DDTHH:mm:ss',
  'YYYY-MM-DD',
  'DD/MM/YYYY',
  'DD/MM/YYYY HH:mm',
  'ddd, MMM D • HH:mm [GMT]',
];

export function formatVietnamDateTime(value: string | Date, format = 'DD/MM/YYYY HH:mm') {
  const date = typeof value === 'string' ? dayjs(value, DATE_FORMATS, true) : dayjs(value);

  if (!date.isValid()) {
    return String(value);
  }

  return date.tz('Asia/Ho_Chi_Minh').format(format);
}
