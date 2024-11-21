import React from "react";
import Image from "next/image";

const TechStack = () => {
  return (
    <section className="md:py-24">
      <h2 className="text-5xl mb-12 md:mb-24 leading-normal">
        Cutting-Edge Tech Stack
      </h2>
      <div className="flex flex-wrap md:gap-24">
        <div className="w-1/2 md:w-auto mb-12 md:mb-0">
          <Image
            priority
            src="/svg/next.svg"
            width="39"
            height="40"
            alt="Next.js icon"
            className="mb-3"
          />
          <div>Next.js</div>
        </div>
        <div className="w-1/2 md:w-auto mb-12 md:mb-0">
          <Image
            priority
            src="/svg/postgres.svg"
            width="40"
            height="41"
            alt="Postgres icon"
            className="mb-3"
          />
          <div>Postgres</div>
        </div>
        <div className="w-1/2 md:w-auto mb-12 md:mb-0">
          <Image
            priority
            src="/svg/redis.svg"
            width="51"
            height="43"
            alt="Redis icon"
            className="mb-3"
          />
          <div>Redis</div>
        </div>
        <div className="w-1/2 md:w-auto mb-12 md:mb-0">
          <Image
            priority
            src="/svg/node.svg"
            width="39"
            height="45"
            alt="Node icon"
            className="mb-3"
          />
          <div>Node.js</div>
        </div>
        <div className="w-1/2 md:w-auto mb-12 md:mb-0">
          <Image
            priority
            src="/svg/react.svg"
            width="50"
            height="38"
            alt="React icon"
            className="mb-3"
          />
          <div>React</div>
        </div>
        <div className="w-1/2 md:w-auto mb-12 md:mb-0">
          <Image
            priority
            src="/svg/js.svg"
            width="40"
            height="35"
            alt="Javascript icon"
            className="mb-4"
          />
          <div>JavaScript</div>
        </div>
        <div className="w-1/2 md:w-auto mb-12 md:mb-0">
          <Image
            priority
            src="/svg/ts.svg"
            width="40"
            height="35"
            alt="Typescript icon"
            className="mb-4"
          />
          <div>TypeScript</div>
        </div>
        <div className="w-1/2 md:w-auto mb-12 md:mb-0">
          <Image
            priority
            src="/svg/prisma.svg"
            width="36"
            height="35"
            alt="Prisma icon"
            className="mb-3"
          />
          <div>Prisma</div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
