import { useState } from "react";

export const useProfileUpdateAvatarModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, handleOpenModal, handleCloseModal };
};
