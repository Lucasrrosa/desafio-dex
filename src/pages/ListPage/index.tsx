import React, { useEffect, useState } from "react";
import { useRequest } from "../../hooks/useRequest";
import { listCardRequest } from "./listCardsRequest";

import { Flex, Layout, Pagination } from "antd";
import { FilterInput } from "./components/FilterInput";
import { ResultList } from "./components/ResultList";
const { Header, Content } = Layout;

export const ListPage: React.FC = () => {
  const { execute, loading, data, error } = useRequest(listCardRequest);
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>();

  useEffect(() => {
    execute({ name: "", page: 1 });
  }, []);

  const onSubmitFilter = (value: string) => {
    setPage(1);
    setName(value);
    execute({ name: value, page: 1 });
  };

  const onChangePagination = (value: number) => {
    setPage(value);
    execute({ page: value, name });
  };

  if (loading) return <h1>loading</h1>;

  if (error) return <h1>error</h1>;

  return (
    <Layout>
      <Header>
        <Flex
          style={{ width: "100%", height: "100%" }}
          justify="center"
          align="center"
        >
          <FilterInput onSubmitSearch={onSubmitFilter} />
        </Flex>
      </Header>
      <Content style={{ margin: "12px" }}>
        <Flex vertical justify="center" align="center" gap={12}>
          <ResultList data={data?.cards || []} />
          <Pagination
            current={page}
            total={data?.total || 0}
            onChange={onChangePagination}
            pageSize={10}
          />
        </Flex>
      </Content>
    </Layout>
  );
};
