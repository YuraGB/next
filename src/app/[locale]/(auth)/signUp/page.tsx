import { RegistrationForm } from "@/app/[locale]/(auth)/signUp/components/registrationForm/RegistrationForm";
import { type Metadata } from "next";
import PageWrapper from "@/components/pageWrapper/PageWrapper";
import React, { Suspense } from "react";
import PageTitle from "@/app/[locale]/(auth)/signUp/components/PageTitle";

export const metadata: Metadata = {
  title: "Gyb Next js Sign Up Page",
  description: "Authorization with Next Auth",
  keywords: ["yuhur", "Sign up page"],
  authors: [
    {
      name: "Yurii Hurianov",
      url: "https://www.linkedin.com/in/yurii-hurianov-685373172/",
    },
  ],
};

export default function RegisterPage(): React.ReactNode {
  return (
    <PageWrapper>
      <PageTitle />
      <Suspense fallback={null}>
        <RegistrationForm />
      </Suspense>
    </PageWrapper>
  );
}
