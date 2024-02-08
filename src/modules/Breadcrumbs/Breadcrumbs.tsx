"use client";
import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

type PathItem = {
  name: string;
  url: string;
};

type Props = {
  path?: PathItem[];
  current: string;
};

const BreadcrumbsModule = (props: Props): ReactNode => {
  const { path, current } = props;
  return (
    <nav className="mb-4 w-full rounded-md px-5 py-3 backdrop-blur">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <ol className="list-reset flex">
        <li>
          <Link
            href="/"
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            <FormattedMessage id={"brdcr.home"} defaultMessage={"Home"} />
          </Link>
        </li>

        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-300">/</span>
        </li>
        {Boolean(path?.length)
          ? path?.map((item) => (
              <Fragment key={item.name}>
                <li>
                  <Link
                    href={item.url}
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    {item.name}
                  </Link>
                </li>
                <li>
                  <span className="mx-2 text-neutral-500 dark:text-neutral-300">/</span>
                </li>
              </Fragment>
            ))
          : null}
        <li className="text-neutral-500 dark:text-neutral-300">{current}</li>
      </ol>
    </nav>
  );
};

export default BreadcrumbsModule;
