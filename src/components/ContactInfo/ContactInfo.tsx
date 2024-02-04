import { type ReactNode } from "react";

const ContactInfo = (): ReactNode => {
  return (
    <section>
      <h1 className={"mb-2 text-xl underline"}>Contact Info</h1>
      <p className={"italic"}>Phone: 123-456-7890</p>
      <p className={"italic"}>Email: gg@ss.com</p>
    </section>
  );
};

export default ContactInfo;
