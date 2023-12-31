import {
  ThunkDispatch,
  CombinedState,
  AnyAction,
} from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { initialState_T } from "../../../../state/types"; 
import { Image_T } from "../../../shared/lib/types";

export type dispatch_T = ThunkDispatch<
  CombinedState<{
    mainReducer: initialState_T;
  }>,
  undefined,
  AnyAction
> &
  Dispatch<AnyAction>;

export type onDropHandler_T = (
  e: React.DragEvent<HTMLDivElement>,
  setDrag: (value: React.SetStateAction<boolean>) => void,
  addImage: (image: Image_T) => void,
  removeImage: (image_id: string) => void
) => void;
