import { format } from "date-fns";

interface DateToStr {
  (time: number): string;
}

export const dateToStr: DateToStr = time => {
  const date = format(time, "DD.MM.YYYY HH:mm:ss");
  return date;
};
