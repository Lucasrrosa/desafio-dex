import { useContext } from "react";
import { detailsContext } from "../context/details-context";

export function useDetailsPage() {
  const context = useContext(detailsContext);

  if (!context)
    throw new Error(
      `Este hook deve ser usado somente sob o componente DetailsContextProvider`
    );

  return context;
}
