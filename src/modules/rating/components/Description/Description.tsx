import React, { memo, type ReactNode } from "react";
import { FormattedMessage } from "react-intl";

const Description = ({
  canVote,
  userId,
}: {
  canVote: boolean;
  userId: string | null | undefined;
}): ReactNode => {
  if (userId === undefined || userId === null) {
    return (
      <p>
        <FormattedMessage
          id={"notLoggedIn.user.vote"}
          defaultMessage={"You need to log in to vote"}
        />
      </p>
    );
  }

  if (canVote) {
    return null;
  }

  return (
    <p className={"text-sm text-gray-900"}>
      <FormattedMessage id={"user.voted"} defaultMessage={"You have already vote"} />
    </p>
  );
};

export default memo(Description);
