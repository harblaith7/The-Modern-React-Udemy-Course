import { useReducer } from "react";
import { supabase } from "../supabase";

const initialState: State = {
  data: null,
  loading: false,
  error: null,
};

export interface Trip {
  id: number;
  origin: string;
  destination: string;
  departureDateTime: string;
  seats: number;
  price: number;
  image: string;
  detail: string;
}

interface State {
  data: null | Trip;
  error: null | string;
  loading: boolean;
}

enum ActionType {
  FETCHING_DATA,
  FETCH_SUCCESS,
  FETCH_FAILED,
}

type Action =
  | {
      type: ActionType.FETCHING_DATA;
    }
  | {
      type: ActionType.FETCH_SUCCESS;
      payload: Trip;
    }
  | {
      type: ActionType.FETCH_FAILED;
      payload: string;
    };

const reducer = (_: State, action: Action): State => {
  switch (action.type) {
    case ActionType.FETCHING_DATA:
      return {
        data: null,
        error: null,
        loading: true,
      };
    case ActionType.FETCH_FAILED:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    case ActionType.FETCH_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return initialState;
  }
};

type UseFetchTripReturnType = [State, (id: number) => Promise<void>];

export interface FilterTrip {
  origin: string;
  destination: string;
  date: string;
}

const queryTrip = (id: number) => {
  return supabase.from("trips").select("*", { count: "exact" }).eq("id", id);
};

const useFetchTrip = (): UseFetchTripReturnType => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const fetchTrip = async (id: number) => {
    dispatch({ type: ActionType.FETCHING_DATA });

    try {
      const { data, count, error } = await queryTrip(id);

      if (data) {
        console.log(data);
        const {
          id,
          origin,
          destination,
          departure_datetime,
          seats,
          price,
          car_img,
          detail,
        } = data[0];

        const trip = {
          id,
          origin,
          destination,
          departureDateTime: departure_datetime,
          seats,
          price,
          image: car_img,
          detail,
        };

        dispatch({ type: ActionType.FETCH_SUCCESS, payload: trip });
      } else if (error) {
        dispatch({ type: ActionType.FETCH_FAILED, payload: error.message });
      }
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_FAILED,
        payload: "Something went wrong",
      });
    }
  };

  return [{ data, loading, error }, fetchTrip];
};

export default useFetchTrip;
