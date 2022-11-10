import { Heading } from "../Heading";

export const About = () => {
  return (
    <div className="m-auto max-w-max">
      <Heading level={1} className="inline-flex items-center gap-4">
        <span>ABOUT</span>
        <span>
          <hr className="w-28 border-gray-800 px-4" />
        </span>
        <span className="text-sm">私達について</span>
      </Heading>
    </div>
  );
};
