import { useContext } from "react";
import { listContext } from "../context/list-context";

export function useListPage() {
  const context = useContext(listContext);

  if (!context)
    throw new Error(
      `Este hook deve ser usado somente sob o componente ListContextProvider`
    );

  return context;
}
