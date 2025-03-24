import { TCityInfo } from "../types/TCityInfo";

export const toggleFavoriteCity = async (params: TCityInfo) => {
  const { id, isFavorite } = params;

  fetch(`http://localhost:3000/cities/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ isFavorite: !isFavorite }),
  });
};
