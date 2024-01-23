import React from "react";
import { ManaIcon } from "./ManaIcon";
type Props = {
  cost: string;
};

function getCosts(cost: string) {
  const regex = /\{([^}]+)\}/g;
  const matches = [];
  let match;
  while ((match = regex.exec(cost)) !== null) {
    matches.push(match[1].replace(/[^\w\s]/gi, "").toLocaleLowerCase());
  }
  return matches;
}

export const ManaCostComponent: React.FC<Props> = ({ cost }) => {
  const costs = getCosts(cost);

  return (
    <>
      {costs.map((item, index) => (
        <ManaIcon key={`${item}-${index}`} type={item} />
      ))}
    </>
  );
};
