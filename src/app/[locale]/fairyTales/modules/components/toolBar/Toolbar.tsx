import SortFilter from "@/app/[locale]/fairyTales/modules/components/SortFilter/SortFilter";
import type { ChangeEvent, ReactNode } from "react";

type TToolbar = {
  setSort: (sort: ChangeEvent<HTMLSelectElement>) => void;
};

const Toolbar = ({ setSort }: TToolbar): ReactNode => {
  return (
    <section className={"mb-4 w-full rounded-md bg-blue-50 px-5 py-3 backdrop-blur"}>
      <SortFilter onChangeHandler={setSort} />
    </section>
  );
};

export default Toolbar;
