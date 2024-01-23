import { Pagination } from "antd";
import React from "react";
import { useListPage } from "../hooks/useListPage";

export const ListPagination: React.FC = () => {
  const { page, total, onChangePagination, loading } = useListPage();

  if (loading) return null;

  return (
    <Pagination
      current={page}
      total={total}
      onChange={onChangePagination}
      pageSize={10}
    />
  );
};
