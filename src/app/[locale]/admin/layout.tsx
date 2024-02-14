import { type FC, type ReactNode } from "react";
import AdminSideBar from "@/app/[locale]/admin/components/AdminSideBar/AdminSideBar";

const layout: FC<{ children: ReactNode | ReactNode[] }> = ({ children }): ReactNode => {
  return (
    <article
      className={
        "mx-auto grid w-full max-w-[1250px] grid-cols-[100px_1fr] grid-rows-1 [grow:1] [&>main]:min-h-full"
      }
    >
      <AdminSideBar />
      {children}
    </article>
  );
};

export default layout;
