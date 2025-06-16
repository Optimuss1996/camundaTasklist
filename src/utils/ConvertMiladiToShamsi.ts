import jalaali from "jalaali-js";
// convert gregorian date to jalali date
export function convertToJalaliDateString(gregorianDateStr: string): string {
  const date = new Date(gregorianDateStr);

  if (isNaN(date.getTime())) {
    console.warn("❌ تاریخ نامعتبر است:", gregorianDateStr);
    return "";
  }

  const jDate = jalaali.toJalaali(date);

  // persian number
  const toPersianDigits = (str: string) =>
    str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);

  const year = toPersianDigits(jDate.jy.toString());
  const month = toPersianDigits(jDate.jm.toString().padStart(2, "0"));
  const day = toPersianDigits(jDate.jd.toString().padStart(2, "0"));

  return `${year}/${month}/${day}`;
}
// convert persian number to english number
export function toPersianDigits(input: string | number): string {
  const str = input.toString();
  return str.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[+digit]);
}
