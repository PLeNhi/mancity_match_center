import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/vi';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('vi');

export function formatVietnamDateTime(value: string | Date, format = 'DD/MM/YYYY - HH:mm') {
  if (!value) return '';

  let date;

  if (typeof value === 'string') {
    date = dayjs(value, format, true);

    if (!date.isValid()) {
      date = dayjs(value);
    }
  } else {
    date = dayjs(value);
  }

  if (!date.isValid()) {
    return String(value);
  }

  return date.tz('Asia/Ho_Chi_Minh').format(format);
}
