import { ProfileDescriptions, ProfileUpdateAvatarModal } from "@/features";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { getUserInfo } from "@/entities";

async function ProfilePage() {
  const data = await getUserInfo();

  return (
    <Flex justify="center" align="center" gap={30} vertical>
      <Flex vertical justify="center">
        <ProfileUpdateAvatarModal data={data} />

        <Title level={2}>{`${data.firstName} ${data.lastName}`}</Title>
      </Flex>

      <ProfileDescriptions data={data} />
    </Flex>
  );
}

export default ProfilePage;
