

const GetCommonDate = (date: Date) => {
    const fullDate = new Date(date)
    const commonDate = `${fullDate.getFullYear()} ${fullDate.getMonth()} ${fullDate.getDate()}`
    return commonDate
}

export default GetCommonDate