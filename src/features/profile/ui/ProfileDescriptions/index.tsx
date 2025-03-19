import { Descriptions } from "antd";
import React from "react";
import { descriptionItems } from "../../config/descriptionItems";
import { TUserInfo } from "@/entities";

type TProfileDescriptionsProps = { data: TUserInfo };

export function ProfileDescriptions({
  data,
}: Readonly<TProfileDescriptionsProps>) {
  return (
    <Descriptions
      style={{ maxWidth: "800px" }}
      title="Информация о пользователе"
      items={descriptionItems(data)}
    />
  );
}
