import { Flex, Grid } from "antd";
import React from "react";
import { CardItemType } from "../../../types/card-item.type";
import { ListItem } from "./ListItem";

const { useBreakpoint } = Grid;

type Props = {
  data: CardItemType[];
};

export const ResultList: React.FC<Props> = ({ data }) => {
  const screens = useBreakpoint();
  return (
    <Flex
      vertical={!screens.md}
      justify="center"
      align="center"
      gap={8}
      wrap="wrap"
    >
      {data.map((item) => (
        <ListItem data={item} />
      ))}
    </Flex>
  );
};
