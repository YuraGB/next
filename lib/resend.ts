import { Resend } from "resend";

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export default new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);
