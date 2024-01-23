type Props = {
  type: string;
};
export const ManaIcon: React.FC<Props> = ({ type }) => {
  return <i className={`ms ms-cost ms-${type}`} />;
};
