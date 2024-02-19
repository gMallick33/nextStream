"use client";

interface HeaderProps {
  hostName: string;
  imageUrl: string;
  hostIdentity: string;
  viewerIdentity: string;
  isFollowing: boolean;
  name: string;
}
import React from "react";
import UserAvatar from "../UserAvatar";
import VerifiedMark from "./VerifiedMark";
import {
  useParticipants,
  useRemoteParticipant,
} from "@livekit/components-react";
import { UserIcon } from "lucide-react";
import Action from "./Action";

const Header = ({
  hostName,
  imageUrl,
  hostIdentity,
  viewerIdentity,
  isFollowing,
  name,
}: HeaderProps) => {
  const participants = useParticipants();
  const participant = useRemoteParticipant(hostIdentity);

  const isLive = !!participant;
  const participantCount = participants.length - 1;

  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  return (
    <div className="flex flex-col lg:flex-row gap-y4 lg:gap-y-0 items-start justify-between px-4">
      <div className="flex items-center gap-x-3">
        <UserAvatar
          imageUrl={imageUrl}
          username={hostName}
          size="lg"
          isLive={isLive}
        />
        <div className="space-x-1">
          <div className="flex items-center gap-x-2">
            {/* <h2 className="text-lg font-semibold">{hostName}</h2> */}
            <VerifiedMark />
          </div>
          <p className="text-sm font-semibold">{name}</p>
          {isLive ? (
            <div className="font-semibold flex gap-x-1 items-center text-xs text-rose-500">
              <UserIcon className="h-4 w-4" />
              <p>
                {participantCount}{" "}
                {participantCount === 1 ? "viewer" : "viewers"}
              </p>
            </div>
          ) : (
            <p className="font-semibold text-xs text-muted-foreground">
              Offline
            </p>
          )}
        </div>
      </div>
      <Action
        isFollowing={isFollowing}
        hostIdentity={hostIdentity}
        isHost={isHost}
      />
    </div>
  );
};

export default Header;
