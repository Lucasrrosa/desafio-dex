import React, { PropsWithChildren, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../../hooks/useRequest";
import { getDetailsRequest } from "../getDetailsRequest";
import { detailsContext } from "./details-context";

export const DetailsContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { data, loading, execute, error } = useRequest(getDetailsRequest);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) execute(id);
  }, [id]);

  return (
    <detailsContext.Provider
      value={{
        loading,
        data,
        error,
      }}
    >
      {children}
    </detailsContext.Provider>
  );
};
