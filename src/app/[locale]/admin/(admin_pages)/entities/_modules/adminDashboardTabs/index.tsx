"use client";
import React, { memo, Suspense } from "react";
import { Tab, Tabs } from "@nextui-org/tabs";
import {
  tabNames,
  useAdminTabs,
} from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/useAdminTabs";
import AdminUserTab from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/adminUserTab";
import AdminBlogTab from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/blogDashboardTab";
import AdminTalesTab from "@admin/(admin_pages)/entities/_modules/adminDashboardTabs/modules/fairyTalesTab";

const AdminDashboardTabs = (): React.ReactNode => {
  const { selected, tales, setSelected, posts, users } = useAdminTabs();

  return (
    <Tabs
      aria-label="Options"
      fullWidth={true}
      variant="bordered"
      selectedKey={selected}
      onSelectionChange={(key) => {
        setSelected(key as string);
      }}
      color={"primary"}
      className={"text-white"}
    >
      <Tab key={tabNames.USERS} title="Users" className={"w-full"}>
        <Suspense fallback={<p>....</p>}>
          <AdminUserTab users={users} />
        </Suspense>
      </Tab>
      <Tab key={tabNames.BLOG} title="Blog" className={"w-full"}>
        <Suspense fallback={<p>....</p>}>
          <AdminBlogTab posts={posts} />
        </Suspense>
      </Tab>
      <Tab key={tabNames.TALES} title="Tales" className={"w-full"}>
        <Suspense fallback={<p>....</p>}>
          <AdminTalesTab tales={tales} />
        </Suspense>
      </Tab>
    </Tabs>
  );
};

export default memo(AdminDashboardTabs);
