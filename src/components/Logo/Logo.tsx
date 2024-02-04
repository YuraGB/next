import Image from "next/image";
import { memo, type ReactNode } from "react";
import logo from "@/assets/logo.webp";

const Logo = (): ReactNode => {
  return (
    <section className="relative flex max-h-[300px] justify-center">
      <Image
        src={logo}
        alt="Picture of the author"
        width={0}
        height={0}
        className="size-auto object-contain"
        loading={"eager"}
        fetchPriority={"high"}
        priority={true}
      />
    </section>
  );
};

export default memo(Logo);
