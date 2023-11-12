import { Dispatch } from "react";
import { GET_DATA } from "./actions";
import axios from "axios";
import {IDispatch} from "../interfaces/interfaces";

export const getData = () => {
  return async (dispatch: Dispatch<IDispatch>) => {
    try {
      const response = await axios.get("https://bgaa.by/test");
      dispatch({ type: GET_DATA, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};
