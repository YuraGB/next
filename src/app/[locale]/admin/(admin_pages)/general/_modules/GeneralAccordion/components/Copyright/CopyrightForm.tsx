import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { type FC } from "react";

type TCopyrightForm = {
  content?: string | null;
  owner?: string;
  year?: string;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const CopyrightForm: FC<TCopyrightForm> = ({
  onSubmit,
  year = "",
  owner = "",
  content = "",
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit} className={"flex flex-col gap-2"}>
      <Input type="text" label={"Content"} name="content" defaultValue={content ?? ""} />
      <Input type="text" label={"Owner"} name="owner" defaultValue={owner} />
      <Input type="text" label={"Year"} name="year" defaultValue={year} />

      <Button type="submit" color="success" size="lg" isLoading={isLoading}>
        Update copyright
      </Button>
    </form>
  );
};

export default CopyrightForm;
