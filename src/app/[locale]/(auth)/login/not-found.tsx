import Link from "next/link";
import { type ReactNode } from "react";
import { Pages } from "@/utils/pages";

export default function NotFound(): ReactNode {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={Pages.HOME}>Return Home</Link>
    </div>
  );
}
