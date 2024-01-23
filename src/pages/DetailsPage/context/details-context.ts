import React from "react";
import { CardDetailsType } from "../../../types/card-details.type";

export const detailsContext = React.createContext<
  | {
      loading: boolean;
      error?: string;
      data?: CardDetailsType;
    }
  | undefined
>(undefined);
