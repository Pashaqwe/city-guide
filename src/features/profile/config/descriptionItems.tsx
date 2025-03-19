import { TUserInfo } from "@/entities/user/types/TUserTypes";
import { DescriptionsProps } from "antd";
import Text from "antd/es/typography/Text";

export const descriptionItems = ({
  age,
  country,
  city,
  email,
}: TUserInfo): DescriptionsProps["items"] => [
  {
    key: "age",
    label: "Возраст",
    children: <Text>{age}</Text>,
  },
  {
    key: "country",
    label: "Страна",
    children: <Text>{country}</Text>,
  },
  {
    key: "city",
    label: "Город",
    children: <Text>{city}</Text>,
  },
  {
    key: "email",
    label: "E-mail",
    children: <Text>{email}</Text>,
  },
];
