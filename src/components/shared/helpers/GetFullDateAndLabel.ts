import GetMonthName from "./GetMonthName";


const GetFullDateAndLabel = (date: string | Date) => {
    const month = GetMonthName(date)
    const day = new Date(date).getDate();
    const year = new Date(date).getFullYear();
    const label = `${month} ${day}`;
    const fullDate = `${year} ${month} ${day}`;
    return {fullDate, label}
}

export default GetFullDateAndLabel