import { Input } from "antd";
import React from "react";
import { useListPage } from "../hooks/useListPage";

export const FilterInput: React.FC = () => {
  const { setSearchString } = useListPage();
  return (
    <Input.Search
      placeholder="Digite aqui sua pesquisa"
      onSearch={setSearchString}
    />
  );
};
