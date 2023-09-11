import { Image_T } from "../../components/shared/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CreateTimePeriods from "../helpers/CreateTimePeriods";

export type TimePeriod_T = {
  label: string;
  date: string;
};

export type initialState_T = {
  data: {
    timePeriods: TimePeriod_T[];
    images: Image_T[];
  };
  token: string;
};

const initialState: initialState_T = {
  data: {
    timePeriods: [],
    images: [],
  },
  token: localStorage.getItem("accessToken") || "",
};

const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<{ accessToken: string }>) {
      state.token = action.payload.accessToken;
    },
    updateTimePeriods(state) {
      const timePeriods = CreateTimePeriods(state);
      state.data.timePeriods = timePeriods;
    },
    setImages(state, action: PayloadAction<{ images: Image_T[] }>) {
      const { images } = action.payload;
      state.data.images = images;
    },
    addImage(state, action: PayloadAction<{ image: Image_T }>) {
      const { image } = action.payload;
      state.data.images.push(image);
    },
    deleteImage(state, action: PayloadAction<{ image: Image_T }>) {
      const { _id } = action.payload.image;

      state.data.images = state.data.images.filter((image) => {
        return image._id !== _id;
      });
    },
    updateImage(state, action: PayloadAction<{image: Image_T}>) {
      const {image} = action.payload
      state.data.images = state.data.images.filter(el => {
        return el._id !== image._id
      })
      state.data.images.push(image)
    }
  },
});

export default MainSlice;
