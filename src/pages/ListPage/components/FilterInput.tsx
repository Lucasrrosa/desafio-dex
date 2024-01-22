import { Input } from "antd";
import React from "react";

type Props = {
  onSubmitSearch: (name: string) => void;
};

export const FilterInput: React.FC<Props> = ({ onSubmitSearch }: Props) => {
  return (
    <Input.Search
      placeholder="Digite aqui sua pesquisa"
      onSearch={onSubmitSearch}
    />
  );
};
