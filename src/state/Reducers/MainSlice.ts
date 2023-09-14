import { createSlice } from "@reduxjs/toolkit";
import CreateTimePeriods from "../helpers/CreateTimePeriods";
import { initialState_T, MainSlice_T } from "../types";


const initialState: initialState_T = {
  data: {
    timePeriods: [],
    images: [],
  },
  token: localStorage.getItem("accessToken") || "",
};

const MainSlice: MainSlice_T = createSlice({
  name: "main",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload.accessToken;
    },
    setImages(state, action) {
      const { images } = action.payload;
      state.data.images = images;

      state.data.timePeriods = CreateTimePeriods(state);
    },
    addImage(state, action) {
      const { image } = action.payload;
      state.data.images.push(image);

      state.data.timePeriods = CreateTimePeriods(state);
    },
    deleteImage(state, action) {
      const { _id } = action.payload.image;

      state.data.images = state.data.images.filter((image) => {
        return image._id !== _id;
      });

      state.data.timePeriods = CreateTimePeriods(state);
    },
    updateImage(state, action) {
      const {image} = action.payload
      state.data.images = state.data.images.filter(el => {
        return el._id !== image._id
      })
      state.data.images.push(image)

      state.data.timePeriods = CreateTimePeriods(state);
    }
  },
});

export default MainSlice;
