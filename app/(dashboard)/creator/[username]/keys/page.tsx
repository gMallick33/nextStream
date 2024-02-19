import { Button } from "@/components/ui/button";
import React from "react";
import UrlCard from "./_components/UrlCard";
import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";
import { notFound } from "next/navigation";
import KeyCard from "./_components/KeyCard";
import ConnectModels from "./_components/ConnectModels";

const page = async () => {
  const self = await getSelf();
  if (!self) {
    notFound();
  }
  const stream = await getStreamByUserId(self.id);
  if (!stream) {
    throw new Error("stream not found");
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Keys and URLs</h1>
        <ConnectModels />
      </div>
      <div>
        <UrlCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </div>
  );
};

export default page;
