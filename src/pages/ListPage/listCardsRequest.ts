import { api } from "../../requests/api";
import { CardItemType } from "../../types/card-item.type";

type Params = {
  name?: string;
  page: number;
};

type Response = {
  cards: CardItemType[];
  total: number;
};

export async function listCardRequest(params: Params): Promise<Response> {
  const response = await api.get<{ cards: CardItemType[] }>("cards", {
    params: {
      ...params,
      pageSize: 10,
      contains: "imageUrl",
    },
  });
  return {
    cards: response.data.cards.map(({ name, rarity, type, imageUrl, id }) => ({
      name,
      rarity,
      type,
      imageUrl,
      id,
    })),
    total: +response.headers["total-count"],
  };
}
