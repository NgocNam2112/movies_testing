import axios from "axios";
import { ApiError } from "../../domain/errors/ApiError";
import FailedToCallApiError from "../../domain/errors/FailedToCallApiError";
import { Movie, Movies } from "../../domain/models/Movie/Movie";
import { convertApiErrorParams } from "../convertApiErrorParams";

const BASE_URL = process.env.REACT_APP_MOVIE_API;

export const fetchListMovie: () => Promise<Movies> = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language="en"&page=1`
    );
    return data;
  } catch (error) {
    throw new FailedToCallApiError(
      ...convertApiErrorParams((error as ApiError).response?.data)
    );
  }
};

export const fetchMovie: (movieId: number) => Promise<Movie> = async (
  movieId: number
) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
    );
    return data;
  } catch (error) {
    throw new FailedToCallApiError(
      ...convertApiErrorParams((error as ApiError).response?.data)
    );
  }
};
