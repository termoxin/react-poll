import { format } from "date-fns";

export function dateToStr(obj) {
  const date = format(obj, "DD.MM.YYYY HH:mm:ss");
  return date;
}
