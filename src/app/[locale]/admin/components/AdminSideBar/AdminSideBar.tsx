import { type FC, type ReactNode } from "react";
import { IoIosHome } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrStorage } from "react-icons/gr";
import { Tooltip } from "@nextui-org/tooltip";

const AdminSideBar: FC = (): ReactNode => {
  return (
    <aside
      className={"ml-auto w-full border-1 border-yellow-700 bg-foreground-500 backdrop-blur-md"}
    >
      <nav className={"w-full"}>
        <ul>
          <li
            className={
              "flex h-[100px] w-full items-center justify-center border-y-1 border-yellow-700 align-middle"
            }
          >
            <Tooltip content="Home" placement="right">
              <a href="/admin" className={"flex w-full items-center justify-center"}>
                <IoIosHome size={30} />
              </a>
            </Tooltip>
          </li>
          <li
            className={
              "flex h-[100px] items-center justify-center border-b-1 border-yellow-700 align-middle"
            }
          >
            <Tooltip content="General" placement="right">
              <a href="/admin/general" className={"flex w-full items-center justify-center"}>
                <AiOutlineGlobal size={30} />
              </a>
            </Tooltip>
          </li>
          <li
            className={
              "flex h-[100px] items-center justify-center border-b-1 border-yellow-700 align-middle"
            }
          >
            <Tooltip content="Entities" placement="right">
              <a href="/admin/entities" className={"flex w-full items-center justify-center"}>
                <GrStorage size={30} />
              </a>
            </Tooltip>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
