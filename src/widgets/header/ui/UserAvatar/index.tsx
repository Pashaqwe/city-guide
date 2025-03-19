import { getUserInfo } from "@/entities";
import { Avatar } from "antd";
import React from "react";

export async function UserAvatar() {
  const { avatar } = await getUserInfo();

  return <Avatar src={avatar} />;
}
