import GetFullDateAndLabel from "../../components/shared/helpers/GetFullDateAndLabel";
import { TimePeriod_T, initialState_T } from "../types"; 

const CreateTimePeriods = (state: initialState_T) => {
  const timePeriods: TimePeriod_T[] = [];
  state.data.images.forEach((image) => {
    const { createdAt } = image;

    const { fullDate, label } = GetFullDateAndLabel(createdAt);
    const images_folder = timePeriods.find((el) => {
      return el.label === label;
    });
    if (!images_folder) {
      timePeriods.push({ label, date: fullDate });
    }

    timePeriods.sort((el1, el2) => {
        const date1 = new Date(el1.date)
        const date2 = new Date(el2.date)
      if (date1 > date2) {
        return -1;
      } else if (date1 < date2) {
        return 1;
      } else {
        return 0;
      }
    });
  });
  return timePeriods;
};

export default CreateTimePeriods;
