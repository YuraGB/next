import { type Inputs } from "@/modules/types/formTypes";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (data: Partial<Inputs>) => Object.values(data).every((field) => field);
