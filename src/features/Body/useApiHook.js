import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, hasError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isEhasErrorrror: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, hasError: true };
    default:
      throw new Error();
  }
};

const useApi = (initialQuery, initialData) => {
  const [query, setQuery] = useState(initialQuery);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(
          `https://jsonplaceholder.typicode.com/photos?_limit=12&q=${query}`
        );
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [query]);

  return [state, setQuery];
};

export default useApi;
