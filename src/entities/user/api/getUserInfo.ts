import { TUserInfo } from "../types/TUserTypes";

export const getUserInfo = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("http://localhost:3000/profile");
  const data: TUserInfo = await response.json();

  return data;
};
