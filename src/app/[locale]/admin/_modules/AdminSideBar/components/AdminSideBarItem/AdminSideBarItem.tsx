import Link from "next/link";
import { type FC, type ReactNode } from "react";
import { Tooltip } from "@nextui-org/tooltip";
import { usePathname } from "next/navigation";

type AdminSideBarItemProps = {
  title: string;
  icon: ReactNode;
  path: string;
  tooltipContent: string;
};

const AdminSideBarItem: FC<AdminSideBarItemProps> = ({ title, icon, path, tooltipContent }) => {
  const pathName = usePathname();
  const active = pathName === path;

  const styles = `flex h-[100px] w-full items-center justify-center border-y-1 border-yellow-700 align-middle ${
    active ? "bg-yellow-700" : ""
  }`;

  return (
    <li className={styles}>
      <Tooltip content={tooltipContent} placement="right">
        <Link href={path} className={"flex size-full w-full items-center justify-center"}>
          {icon}
          <span className={"hidden"}>{title}</span>
        </Link>
      </Tooltip>
    </li>
  );
};

export default AdminSideBarItem;
