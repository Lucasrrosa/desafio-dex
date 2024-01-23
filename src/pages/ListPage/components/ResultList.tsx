import { Card, Flex, Grid, Skeleton } from "antd";
import React from "react";
import { useListPage } from "../hooks/useListPage";
import { ListItem } from "./ListItem";

const { useBreakpoint } = Grid;

export const ResultList: React.FC = () => {
  const { data, loading } = useListPage();
  const screens = useBreakpoint();

  if (loading)
    return (
      <Flex
        vertical={!screens.md}
        justify="center"
        align="center"
        gap={8}
        wrap="wrap"
      >
        {[1, 2, 3].map((item) => (
          <Card key={`${item}`} style={{ width: 300 }}>
            <Skeleton paragraph={{ rows: 2 }} title />
          </Card>
        ))}
      </Flex>
    );

  return (
    <Flex
      vertical={!screens.md}
      justify="center"
      align="center"
      gap={8}
      wrap="wrap"
    >
      {(data || []).map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </Flex>
  );
};
