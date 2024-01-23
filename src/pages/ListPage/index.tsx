import React from "react";

import { Flex, Layout } from "antd";
import { FilterInput } from "./components/FilterInput";
import { ListPagination } from "./components/ListPagination";
import { ResultList } from "./components/ResultList";
import { ListContextProvider } from "./context/ListContextProvider";
const { Header, Content } = Layout;

export const ListPage: React.FC = () => {
  return (
    <ListContextProvider>
      <Layout>
        <Header>
          <Flex
            style={{ width: "100%", height: "100%" }}
            justify="center"
            align="center"
          >
            <FilterInput />
          </Flex>
        </Header>
        <Content style={{ margin: "12px" }}>
          <Flex vertical justify="center" align="center" gap={12}>
            <ResultList />
            <ListPagination />
          </Flex>
        </Content>
      </Layout>
    </ListContextProvider>
  );
};
