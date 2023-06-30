/**
 * Convert date to milliseconds
 * @param day
 * @param month
 * @param year 
 * @returns number - Date milliseconds 
 */
export function dateToUTC(day: number, month: number, year: number) {
    const dt = new Date(year, month-1, day);
    return dt.getTime();
}

/**
 * Add a left zero to numbers from 1 to 9.
 * @param number 
 * @returns number | string
 */
function leftZero(number: number): number | string {
    return number < 10 ? `0${number}` : number;
}

/**
 * Convert date in milliseconds to SectionList date in string format
 * @param utc 
 * @returns string - date in format "dd.mm.yy"
 */
export function UTCParse(utc: number): string {
    const dt = new Date();
    dt.setTime(utc);
    const date = `${leftZero(dt.getDate())}.${leftZero(dt.getMonth()+1)}.${dt.getFullYear()}`;
    return date;
}

/**
 * Convert string date from SectionList to JS date instance
 * @param date - date in string format "dd.mm.yy"
 * @returns Date
 */
export function sectionTitleToDate(date: string) {
    return new Date(
        Number(`20${date.slice(-2)}`),
        Number(date.slice(3,5)), 
        Number(date.slice(0,2))
    )
}

export function sectionDateToStringDate(date: string) {
    const dt = date.split('.')
    return `${dt[0]}/${dt[1]}/20${dt[2]}`;
}

export function dateStringToSectionTitle(date: string) {
    const dt = date.split('/')
    return `${dt[0]}.${dt[1]}.${dt[2].slice(-2)}`;
}