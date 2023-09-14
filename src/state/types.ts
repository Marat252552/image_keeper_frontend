import { Draft, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Image_T } from "../components/shared/lib/types";


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

export type MainSlice_T = Slice<initialState_T, {
    setToken(state: Draft<initialState_T>, action: PayloadAction<{
        accessToken: string;
    }>): void;
    setImages(state: Draft<initialState_T>, action: PayloadAction<{
        images: Image_T[];
    }>): void;
    addImage(state: Draft<initialState_T>, action: PayloadAction<{
        image: Image_T;
        initial_image_id?: string
    }>): void;
    deleteImage(state: Draft<initialState_T>, action: PayloadAction<{
        image: Image_T;
    }>): void;
    updateImage(state: Draft<initialState_T>, action: PayloadAction<{
        image: Image_T;
    }>): void;
}, "main">