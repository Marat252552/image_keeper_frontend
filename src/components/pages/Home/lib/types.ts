import {
  ThunkDispatch,
  CombinedState,
  AnyAction,
  ActionCreatorWithPayload,
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
  dispatch: dispatch_T,
  addImage: ActionCreatorWithPayload<
    {
      image: Image_T;
    },
    "main/addImage"
  >
) => void;
