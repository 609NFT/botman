import { FC, useEffect, useState } from "react";
import Image from "next/image";

export const TokenView: FC = ({}) => {
  return (
    <div className="tokenomics p-5">
      <Image
        src="/chart.svg"
        alt="tokenomics diagram"
        width={500}
        height={0}
        priority={true}
      ></Image>
    </div>
  );
};
