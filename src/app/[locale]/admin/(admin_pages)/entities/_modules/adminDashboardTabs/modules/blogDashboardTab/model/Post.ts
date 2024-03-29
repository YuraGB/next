import { type User } from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab/model/User";

export type PostT = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author?: Partial<User>;
  authorId: string;
  public: boolean;
  image: string | null;
};
