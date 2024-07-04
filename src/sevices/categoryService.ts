import { CategoryType } from "../types";
import apiClient from "./apiClient";

export const getCategories = async (): Promise<CategoryType[]> => {
    const response = await apiClient.get('/categories')
    return response.data
}