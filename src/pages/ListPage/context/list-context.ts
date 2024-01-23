import { createContext } from "react";
import { CardItemType } from "../../../types/card-item.type";

export const listContext = createContext<
  | {
      loading: boolean;
      error?: string;
      data?: CardItemType[];
      total?: number;
      setSearchString: (value: string) => void;
      page: number;
      onChangePagination: (value: number) => void;
    }
  | undefined
>(undefined);
