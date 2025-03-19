"use client";

import { TUserInfo } from "@/entities";
import { Avatar, Flex, Modal, theme } from "antd";
import { useProfileUpdateAvatarModal } from "../../lib/hooks/useProfileUpdateAvatarModal";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import s from "./ProfileUpdateAvatarModal.module.scss";
import { themeConfig } from "@/shared";

import Text from "antd/es/typography/Text";

const { getDesignToken } = theme;
const globalToken = getDesignToken(themeConfig);

type TProfileUpdateAvatarModalProps = { data: TUserInfo };

export function ProfileUpdateAvatarModal({
  data,
}: Readonly<TProfileUpdateAvatarModalProps>) {
  const { isModalOpen, handleOpenModal, handleCloseModal } =
    useProfileUpdateAvatarModal();

  return (
    <>
      <Avatar
        className={s.avatar}
        onClick={handleOpenModal}
        size={148}
        src={data.avatar}
      />
      <Modal
        title="Обновить аватарку"
        onCancel={handleCloseModal}
        open={isModalOpen}
      >
        <Dragger listType="picture">
          <Flex gap={10} vertical justify="center" align="center">
            <InboxOutlined
              style={{ color: globalToken.colorPrimary }}
              className={s.icon}
            />
            <Text type="secondary">
              Нажмите или перетащите файл в эту область для загрузки
            </Text>
          </Flex>
        </Dragger>
      </Modal>
    </>
  );
}
