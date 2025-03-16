import { getUserInfo } from "@/entities";
import { Avatar, Flex } from "antd";
import Title from "antd/es/typography/Title";
import { ProfileInfoItem } from "./ui/ProfileInfoItem";

export async function Profile() {
  const { firstName, lastName, email, age, country, city, avatar } =
    await getUserInfo();

  return (
    <Flex align="center" vertical>
      <Flex vertical justify="center">
        <Avatar size={148} src={avatar} />

        <Title level={2}>{`${firstName} ${lastName}`}</Title>
      </Flex>

      <Flex vertical gap={15}>
        <ProfileInfoItem label="Возраст" value={age} />
        <ProfileInfoItem label="Страна" value={country} />
        <ProfileInfoItem label="Город" value={city} />
        <ProfileInfoItem label="E-mail" value={email} />
      </Flex>
    </Flex>
  );
}
