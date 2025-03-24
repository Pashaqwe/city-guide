"use server";

import { revalidateTag } from "next/cache";
import { TCityInfo } from "../types/TCityInfo";
import { GET_CITIES_REQUEST_TAG } from "../lib/constants/requestTags";

export const getCitiesInfo = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("http://localhost:3000/cities", {
    next: { tags: [GET_CITIES_REQUEST_TAG] },
  });
  const data: TCityInfo[] = await response.json();

  return data;
};

export async function revalidateCitiesInfo() {
  revalidateTag(GET_CITIES_REQUEST_TAG);
}
