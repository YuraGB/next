import { type Inputs } from "@/modules/types/formTypes";

export default (data: Partial<Inputs>) => Object.values(data).every((field) => field);
