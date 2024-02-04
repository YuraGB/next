import React, { type ReactNode } from "react";
import { type PostT } from "@/app/[locale]/admin/components/adminDashboardTabs/modules/blogDashboardTab/model/Post";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { Divider } from "@nextui-org/react";

const PostItem = ({ post }: { post: PostT }): ReactNode | null => {
  if (!post) {
    return null;
  }

  const { author, content, image, title, published } = post;
  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image alt="nextui logo" height={40} src={image ? image : ""} width={40} />
        <div className="flex flex-col">
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <p className="text-md">{title}</p>
          <p>{`${published ? "published" : "Not published"}`}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{content}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <p>{author?.name}</p>
      </CardFooter>
    </Card>
  );
};

export default React.memo(PostItem);
