"use client";
import { type FC, type ReactNode } from "react";
import { IoIosHome } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrStorage } from "react-icons/gr";
import { Pages } from "@/utils/pages";
import AdminSideBarItem from "@admin/_modules/AdminSideBar/components/AdminSideBarItem/AdminSideBarItem";

const AdminSideBar: FC = (): ReactNode => {
  const styles = "bg-background-600 ml-auto w-full border-1 border-yellow-700 backdrop-blur-md";

  return (
    <aside className={styles}>
      <nav className={"w-full"}>
        <ul>
          <AdminSideBarItem
            title={"Dashboard"}
            path={Pages.ADMIN}
            icon={<IoIosHome size={30} />}
            tooltipContent={"Dashboard"}
          />

          <AdminSideBarItem
            title={"General"}
            path={Pages.ADMIN_GENERAL}
            icon={<AiOutlineGlobal size={30} />}
            tooltipContent={"General"}
          />

          <AdminSideBarItem
            title={"Entities"}
            path={Pages.ADMIN_ENTITIES}
            icon={<GrStorage size={30} />}
            tooltipContent={"Entities"}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
