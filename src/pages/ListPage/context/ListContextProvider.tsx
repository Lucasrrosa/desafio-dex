import React, { PropsWithChildren, useEffect, useState } from "react";
import { useRequest } from "../../../hooks/useRequest";
import { listCardRequest } from "../listCardsRequest";
import { listContext } from "./list-context";

export const ListContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { execute, loading, data } = useRequest(listCardRequest);
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>();

  useEffect(() => {
    execute({ name: "", page: 1 });
  }, []);

  const setSearchString = (value: string) => {
    setPage(1);
    setName(value);
    execute({ name: value, page: 1 });
  };

  const onChangePagination = (value: number) => {
    setPage(value);
    execute({ page: value, name });
  };
  return (
    <listContext.Provider
      value={{
        onChangePagination,
        setSearchString,
        data: data?.cards,
        loading,
        page,
        total: data?.total || 0,
      }}
    >
      {children}
    </listContext.Provider>
  );
};
