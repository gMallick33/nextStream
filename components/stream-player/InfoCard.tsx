"use client";

import { Pencil } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import InfoModel from "./InfoModel";

interface InfoCardProps {
  name: string;
  thumbnailUrl: string | null;
  hostIdentity: string;
  viewerIdentity: string;
}
const InfoCard = ({
  name,
  thumbnailUrl,
  hostIdentity,
  viewerIdentity,
}: InfoCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;
  if (!isHost) return null;

  return (
    <div className="px-4">
      <div className="rounded-xl bg-background">
        <div className="flex items-center gap-x-2.5 p-4">
          <div className="rounded-md bg-blue-500 p-2 h-auto w-auto">
            <Pencil className="h-5 w-5" />
          </div>
          <div className="text-sm lg:text-lg font-semibold capitalize">
            <h2>Edit your stream info</h2>
            <p className="text-muted-foreground text-xs lg:text-sm">
              Maximize your visibility
            </p>
          </div>
          <InfoModel initialName={name} initialThumbnailUrl={thumbnailUrl} />
        </div>
        <Separator />
        <div className="p-4 lg:p6 space-y-4">
          <h3 className="text-sm text-muted-foreground mb-2">Thumbnail</h3>
          {thumbnailUrl && (
            <div className="relative aspect-video rounded-md overflow-hidden w-[200px] border-white/10">
              <Image
                fill
                src={thumbnailUrl}
                alt={name}
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
