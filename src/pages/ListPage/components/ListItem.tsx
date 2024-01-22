import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CardItemType } from "../../../types/card-item.type";

type Props = {
  data: CardItemType;
};

export const ListItem: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`details/${data.id}`);
  };
  return (
    <Card
      hoverable
      onClick={onClickCard}
      bordered
      cover={<img src={data.imageUrl} />}
      style={{ width: "280px" }}
    >
      <Card.Meta title={data.name} description={data.type} />
    </Card>
  );
};
