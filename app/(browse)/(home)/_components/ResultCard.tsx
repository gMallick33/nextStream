import Thumbnail from "@/components/Thumbnail";
import { Stream, User } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface ResultCardProps {
  data: Stream & { user: User };
}

const ResultCard = ({ data }: ResultCardProps) => {
  return (
    <Link href={`/users/${data.user.username}`}>
      <div className="h-full w-full space-y-4">
        <Thumbnail
          src={data.thumbnailUrl}
          fallback={data.user.imageUrl}
          isLive={data.isLive}
          username={data.user.username}
        />
        {data.isLive && <div>Live</div>}
        <div className="flex flex-col text-sm overflow-hidden">
          <p className="truncate font-semibold hover:text-blue-500">
            {data.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
