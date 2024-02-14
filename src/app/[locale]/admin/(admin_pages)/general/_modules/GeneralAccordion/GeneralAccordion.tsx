"use client";
import { type ReactNode } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const GeneralAccordion = (): ReactNode => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Footer Navigation" title="Footer Navigation">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Footer Socials" title="Footer socials">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Footer Company info" title="Footer company info">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Footer copyright" title="Footer copyright">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
};

export default GeneralAccordion;
