import { Flex, Menu } from "antd";
import Link from "next/link";
import React, { Suspense } from "react";
import { Header } from "antd/es/layout/layout";
import SkeletonAvatar from "antd/es/skeleton/Avatar";
import menuItems from "../../config/menuItems";
import { UserAvatar } from "../UserAvatar";

export function AppHeader() {
  return (
    <Header>
      <Flex align="center" justify="space-between">
        <Menu mode="horizontal" items={menuItems} />
        <Link href="/profile">
          <Flex align="center">
            <Suspense
              fallback={
                <SkeletonAvatar
                  style={{ display: "flex", alignItems: "center" }}
                  active
                />
              }
            >
              <UserAvatar />
            </Suspense>
          </Flex>
        </Link>
      </Flex>
    </Header>
  );
}
