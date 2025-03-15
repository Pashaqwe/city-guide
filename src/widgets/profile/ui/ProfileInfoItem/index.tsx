import { Flex } from "antd";
import { ReactNode } from "react";
import Text from "antd/es/typography/Text";

type TProfileInfoItemProps = { label: ReactNode; value: ReactNode };

export function ProfileInfoItem({
  label,
  value,
}: Readonly<TProfileInfoItemProps>) {
  return (
    <Flex align="center" vertical>
      <Text strong>{label}:</Text>
      <Text>{value}</Text>
    </Flex>
  );
}
