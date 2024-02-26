import { type FC, type ReactNode } from "react";
import { type OwnerInfo } from ".prisma/client";

const ContactInfo: FC<{ ownerInfo: OwnerInfo | null | undefined }> = ({ ownerInfo }): ReactNode => {
  const { phone, email, name, address } = ownerInfo ?? {};
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <section className={"items-left flex flex-col justify-start text-left leading-[30px]"}>
      <h1 className={"mb-2 text-xl underline"}>Contact Info</h1>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>Owner: {name}</p>
    </section>
  );
};

export default ContactInfo;
