import { api } from "../../requests/api";
import { CardDetailsType } from "../../types/card-details.type";

export async function getDetailsRequest(id: string): Promise<CardDetailsType> {
  const response = await api.get<CardDetailsType>(`cards/${id}`);
  return response.data;
}
