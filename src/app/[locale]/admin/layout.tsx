import { type FC, type ReactNode } from "react";
import AdminSideBar from "@admin/_modules/AdminSideBar/AdminSideBar";

const layout: FC<{ children: ReactNode | ReactNode[] }> = ({ children }): ReactNode => {
  const classes =
    "mx-auto grid w-full max-w-[1250px] grid-cols-[100px_1fr] grid-rows-1 [flex-grow:1] [&>main]:min-h-full";

  return (
    <article className={classes}>
      <AdminSideBar />
      {children}
    </article>
  );
};

export default layout;
