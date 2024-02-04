import Link from "next/link";
import { Pages } from "@/utils/pages";
import { type ReactNode } from "react";

export default function NotFound(): ReactNode {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={Pages.HOME}>Return Home</Link>
    </div>
  );
}
