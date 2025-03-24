"use client";

import {
  revalidateCitiesInfo,
  TCityInfo,
  toggleFavoriteCity,
} from "@/entities";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useTransition } from "react";

type TFavoriteButtonProps = {
  cityInfo: TCityInfo;
};

export function FavoriteButton({ cityInfo }: Readonly<TFavoriteButtonProps>) {
  const [isPending, startTransition] = useTransition();

  const handleToggleFavoriteCity = async () => {
    await toggleFavoriteCity(cityInfo);
    startTransition(async () => {
      await revalidateCitiesInfo();
    });
  };

  return (
    <Button
      icon={cityInfo.isFavorite ? <StarFilled /> : <StarOutlined />}
      size="small"
      color="gold"
      variant="filled"
      onClick={handleToggleFavoriteCity}
      loading={isPending}
    />
  );
}
