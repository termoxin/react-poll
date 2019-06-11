import { format } from "date-fns";

export function dateToStr(obj) {
  const date = format(obj, "MM.DD.YYYY HH:mm:ss");
  return date;
}
