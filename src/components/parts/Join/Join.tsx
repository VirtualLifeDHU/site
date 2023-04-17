import NextImage from "next/image";

export const Join = () => {
  return (
    <div className="relative m-auto ml-auto  max-w-max">
      {/* <Heading level={1} className={"bg-white/90 font-bold backdrop-blur"}> */}
      {/*   <span className={styles.gradesionColor}>Join </span> */}
      {/*   <span>Virtual Life</span> */}
      {/* </Heading> */}

      <a href="https://jooinvl.mochi33.com">
        <NextImage
          alt="Join Virtual Life"
          src={"/assets/ogp.svg"}
          width={800}
          height={600}
        />
      </a>

      <a
        href="https://jooinvl.mochi33.com"
        // className={` rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700`}
      >
        <div className="duration-50  w-full rounded bg-blue-500 py-2 px-4 text-center font-bold text-white hover:bg-blue-700">
          <p>Join</p>
        </div>
      </a>
    </div>
  );
};
