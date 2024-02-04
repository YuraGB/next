// Code: ContuctUsForm
"use client";
import { Button } from "@nextui-org/button";
import React, { type ReactNode } from "react";
import { useContuctUs } from "@/app/[locale]/contacts/_components/ContactUsForm/useContuctUs";
import { FormattedMessage } from "react-intl";

const ContactUsForm = (): ReactNode => {
  const { formFields, onSubmit, handleSubmit } = useContuctUs();

  return (
    <section>
      <form
        aria-label={"Forgot password form"}
        className="mb-4 w-full rounded bg-white px-8 pb-8 pt-6 shadow-md sm:w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {formFields}
        <div className="flex flex-wrap items-center justify-between">
          <Button
            variant={"flat"}
            color={"primary"}
            fullWidth={true}
            className={"mb-4"}
            type={"submit"}
          >
            <FormattedMessage id={"contactUs.send"} defaultMessage={"Send up the message"} />
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactUsForm;
