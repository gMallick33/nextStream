import { Input } from "@/components/ui/input";
import React from "react";
import CopyButton from "./CopyButton";

interface UrlCardProps {
  value: string | null;
}

const UrlCard = ({ value }: UrlCardProps) => {
  return (
    <div className="rounded-md bg-muted p-6 mt-6">
      <div className="flex items-center gap-x-10">
        <p className="font-semibold shrink-0">Server Url</p>
        <div className="space-y-2 w-full">
          <div className="flex">
            <Input value={value || ""} disabled placeholder="Server Url" />
            <CopyButton value={value || ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlCard;
