import { TCityInfo } from "@/entities";
import { Card, Col, Flex, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import Paragraph from "antd/es/typography/Paragraph";
import { getTagColorByName } from "../../lib/helpers/getTagColorByName";
import { FavoriteButton } from "../FavoriteButton";

type TCityCardProps = { cityInfo: TCityInfo };

export function CityCard({ cityInfo }: Readonly<TCityCardProps>) {
  const { name, image, description, tags } = cityInfo;

  return (
    <Col span={6}>
      <Card
        cover={
          <Image width={800} height={200} alt="alt" src={image} unoptimized />
        }
      >
        <Meta
          title={
            <Flex gap={10} align="center">
              {name}
              <FavoriteButton cityInfo={cityInfo} />
            </Flex>
          }
          description={
            <Paragraph
              ellipsis={{
                rows: 3,
                expandable: true,
                symbol: "Показать полностью",
              }}
            >
              {description}
            </Paragraph>
          }
        />
        <Flex>
          {tags.map((tag) => (
            <Tag color={getTagColorByName(tag.name)} key={tag.id}>
              {tag.name}
            </Tag>
          ))}
        </Flex>
      </Card>
    </Col>
  );
}
