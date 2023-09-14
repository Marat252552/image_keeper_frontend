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
    isLogged: boolean;
  };

export type MainSlice_T = Slice<initialState_T, {
    setIsLogged(state: Draft<initialState_T>, action: PayloadAction<boolean>): void;
    setImages(state: Draft<initialState_T>, action: PayloadAction<{
        images: Image_T[];
    }>): void;
    addImage(state: Draft<initialState_T>, action: PayloadAction<{
        image: Image_T;
    }>): void;
    removeImage(state: Draft<initialState_T>, action: PayloadAction<{
        image_id: string;
    }>): void;
    deleteImage(state: Draft<initialState_T>, action: PayloadAction<{
        image: Image_T;
    }>): void;
    updateImage(state: Draft<initialState_T>, action: PayloadAction<{
        image: Image_T;
    }>): void;
}, "main">