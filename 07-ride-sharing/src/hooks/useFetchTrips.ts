import { useReducer } from "react";
import { supabase } from "../supabase";

const initialState: State = {
  data: null,
  loading: false,
  error: null,
  count: null,
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
  count: null | number;
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
      payload: {
        trips: Trip[];
        count: number;
      };
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
        count: null,
      };
    case ActionType.FETCH_FAILED:
      return {
        loading: false,
        data: null,
        error: action.payload,
        count: null,
      };
    case ActionType.FETCH_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload.trips,
        count: action.payload.count,
      };
    default:
      return initialState;
  }
};

type UseFetchTripReturnType = [
  State,
  (page: number, filter?: FilterTrip) => Promise<void>
];

export interface FilterTrip {
  origin: string;
  destination: string;
  date: string;
}

const queryTrips = (page: number, filter?: FilterTrip) => {
  const from = (page - 1) * 5;
  const to = from + 4;

  if (filter) {
    const start = `${filter.date} 00:00:00`;

    const end = `${filter.date} 23:59:59`;
    return supabase
      .from("trips")
      .select("*", { count: "exact" })
      .eq("origin", filter.origin)
      .eq("destination", filter.destination)
      .gte("departure_datetime", start)
      .lte("departure_datetime", end)
      .range(from, to);
  } else {
    return supabase
      .from("trips")
      .select("*", { count: "exact" })
      .range(from, to);
  }
};

const useFetchTrips = (): UseFetchTripReturnType => {
  const [{ data, loading, error, count }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchTrips = async (page: number, filter?: FilterTrip) => {
    dispatch({ type: ActionType.FETCHING_DATA });

    try {
      const { data, count, error } = await queryTrips(page, filter);
      console.log(count);
      if (data && count) {
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

        dispatch({ type: ActionType.FETCH_SUCCESS, payload: { trips, count } });
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

  return [{ data, loading, error, count }, fetchTrips];
};

export default useFetchTrips;
