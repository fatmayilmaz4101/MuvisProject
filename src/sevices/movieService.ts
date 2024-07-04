import { MovieType } from "../types";
import apiClient from "./apiClient";

export const getMovies = async (): Promise<MovieType[]> => {
    const response = await apiClient.get('/movies')
    return response.data
}