import { Flex, Skeleton } from "antd";
import SkeletonAvatar from "antd/es/skeleton/Avatar";

export function ProfileSkeleton() {
  return (
    <Flex gap={15} align="center" vertical>
      <Flex vertical justify="center">
        <SkeletonAvatar size={148} />
      </Flex>

      <Flex align="center">
        <Skeleton
          title={false}
          paragraph={{ rows: 4, width: [300, 300, 300, 300] }}
        />
      </Flex>
    </Flex>
  );
}
