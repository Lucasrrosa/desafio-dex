import { Card, Descriptions, Flex, Grid, Image, Skeleton, Tag } from "antd";
import React from "react";
import { ManaCostComponent } from "../../../components/ManaCostComponent";
import { useDetailsPage } from "../hooks/useDetailsPage";
const { useBreakpoint } = Grid;

export const DetailsContent: React.FC = () => {
  const { data } = useDetailsPage();
  const screens = useBreakpoint();

  if (!data)
    return (
      <Card>
        <Skeleton title paragraph={{ rows: 10 }} />
      </Card>
    );
  return (
    <Flex
      vertical={!screens.md}
      justify="start"
      align={!screens.md ? "center" : "stretch"}
      gap={16}
      style={{ padding: 8 }}
    >
      <Card style={{ width: !screens.md ? "fit-content" : 320 }}>
        <Image src={data?.imageUrl} width={280} />
      </Card>
      <Card>
        <Descriptions title={data?.name}>
          <Descriptions.Item label="Mana cost">
            <ManaCostComponent cost={data.manaCost} />
          </Descriptions.Item>
          <Descriptions.Item label="Type">{data?.type}</Descriptions.Item>
          <Descriptions.Item label="Set">{data?.setName}</Descriptions.Item>
          <Descriptions.Item label="Rarity">{data?.rarity}</Descriptions.Item>
          <Descriptions.Item label="Text">
            {data?.originalText}
          </Descriptions.Item>
          <Descriptions.Item label="Flavor">
            {data?.flavor || "-"}
          </Descriptions.Item>
          <Descriptions.Item label="Legal in formats">
            <Flex wrap="wrap">
              {data?.legalities
                .filter((item) => item.legality === "Legal")
                .map((item) => (
                  <Tag key={item.format}>{item.format}</Tag>
                ))}
            </Flex>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </Flex>
  );
};
