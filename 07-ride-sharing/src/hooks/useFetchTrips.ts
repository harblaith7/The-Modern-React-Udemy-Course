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
}

interface State {
  data: null | Trip[];
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
      payload: Trip[];
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

type UseFetchTripReturnType = [State, (filter?: FilterTrip) => Promise<void>];

export interface FilterTrip {
  origin: string;
  destination: string;
  date: string;
}

const queryTrips = (filter?: FilterTrip) => {
  if (filter) {
    const start = `${filter.date} 00:00:00`;

    const end = `${filter.date} 23:59:59`;
    return supabase
      .from("trips")
      .select("*", { count: "exact" })
      .eq("origin", filter.origin)
      .eq("destination", filter.destination)
      .gte("departure_datetime", start)
      .lte("departure_datetime", end);
  } else {
    return supabase.from("trips").select("*", { count: "exact" });
  }
};

const useFetchTrips = (): UseFetchTripReturnType => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const fetchTrips = async (filter?: FilterTrip) => {
    dispatch({ type: ActionType.FETCHING_DATA });

    try {
      const { data, count, error } = await queryTrips(filter);

      if (data) {
        const trips =
          data.map(
            ({
              id,
              seats,
              price,
              car_img,
              origin,
              destination,
              departure_datetime,
            }) => {
              return {
                id,
                origin,
                destination,
                departureDateTime: departure_datetime,
                seats,
                price,
                image: car_img,
              };
            }
          ) || [];

        dispatch({ type: ActionType.FETCH_SUCCESS, payload: trips });
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

  return [{ data, loading, error }, fetchTrips];
};

export default useFetchTrips;
