import { Avatar, GetProps } from "antd";
import { getUserInfo } from "../../api/getUserInfo";

type TUserAvatarProps = GetProps<typeof Avatar>;

export async function UserAvatar(props: TUserAvatarProps) {
  const userInfo = await getUserInfo();

  return <Avatar src={userInfo?.avatar} {...props} />;
}
