import { type FC, type ReactNode } from "react";
import { type OwnerInfo } from ".prisma/client";

const ContactInfo: FC<{ ownerInfo: OwnerInfo | null | undefined }> = ({ ownerInfo }): ReactNode => {
  const { phone, email, name, address } = ownerInfo ?? {};
  return (
    <section>
      <h1 className={"mb-2 text-xl underline"}>Contact Info</h1>
      <p className={"italic"}>Phone: {phone}</p>
      <p className={"italic"}>Email: {email}</p>
      <p className={"italic"}>Address: {address}</p>
      <p className={"italic"}>Owner: {name}</p>
    </section>
  );
};

export default ContactInfo;
