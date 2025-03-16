import { getUserInfo } from "@/entities";
import { Avatar, Descriptions, Flex } from "antd";
import Title from "antd/es/typography/Title";

import { descriptionItems } from "./config/descriptionItems";

export async function Profile() {
  const data = await getUserInfo();

  return (
    <Flex justify="center" align="center" gap={30}>
      <Flex vertical justify="center">
        <Avatar size={148} src={data.avatar} />

        <Title level={2}>{`${data.firstName} ${data.lastName}`}</Title>
      </Flex>

      <Descriptions
        style={{ maxWidth: "800px" }}
        title="Информация о пользователе"
        items={descriptionItems(data)}
      />
    </Flex>
  );
}
