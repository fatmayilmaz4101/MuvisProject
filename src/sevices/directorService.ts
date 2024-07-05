import { DirectorType } from "../types";
import apiClient from "./apiClient";

export const getDirectors = async (): Promise<DirectorType[]> => {
    const response = await apiClient.get('/directors')
    return response.data
}