import Expand from "./Expand";

type Props = {
  bodyText: string;
};

export const Body = ({ bodyText }: Props) => {
  return (
    <section className="bg-white p-2">
      <p className="text-secondary text-sm font-light">{bodyText}</p>
      {/* TODO: ReadMore logic */}
      {/* <Expand /> */}
    </section>
  );
};

export default Body;
