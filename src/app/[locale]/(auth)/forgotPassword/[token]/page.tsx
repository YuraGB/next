import PageWrapper from "@/components/pageWrapper/PageWrapper";
import { ResetPasswordForm } from "@/app/[locale]/(auth)/forgotPassword/[token]/_modules/ResetPasswordForm/ResetPasswordForm";
import { getResetPassword } from "@/server/actions/ResetPassword/getResetPassword";
import ErrorBlock from "@/app/[locale]/(auth)/forgotPassword/[token]/_components/ErrorBlock";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ResetPasswordPage = async ({ params: { token } }: { params: { token: string } }) => {
  if (!token) {
    return <ErrorBlock message="Token not found" />;
  }

  const response = await getResetPassword(token);
  return (
    <PageWrapper>
      {"isError" in response && "message" in response ? (
        <ErrorBlock message={response.message} />
      ) : null}
      {"user" in response && response.user ? <ResetPasswordForm userId={response.user.id} /> : null}
    </PageWrapper>
  );
};

export default ResetPasswordPage;
