import { IDispatch} from "../interfaces/interfaces";



const initialState = {
  data: [],
};

export const dataReducer = (
  state = initialState,
  action: IDispatch
): any => {
  switch (action.type) {
    case "GET_DATA":
      return { data: action.payload };

    default:
      return state;
  }
};
