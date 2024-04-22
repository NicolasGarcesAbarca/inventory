import { CategorySelect } from "@/server/db/types";

export const getCategories = (...args: any): Promise<CategorySelect[]> => {
  return fetch("/api/categories", {
    method: "GET",
  }).then((res) => res.json());
};
