export type CardDetailsType = {
  name: string;
  manaCost: string;
  cmc: number;
  colors: string[];
  colorIdentity: string[];
  type: string;
  supertypes: string[];
  types: string[];
  subtypes: string[];
  rarity: string;
  set: string;
  setName: string;
  artist: string;
  flavor?: string;
  layout: string;
  multiverseid: number;
  imageUrl: string;
  variations: number[];
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: {
    format: string;
    legality: "Legal" | "Banned" | "Restricted";
  };
  id: string;
};
