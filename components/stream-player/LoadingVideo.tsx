import React from "react";
import { Loader, WifiOff } from "lucide-react";

interface LoadingVideoProps {
  label: string;
}

const LoadingVideo = ({ label }: LoadingVideoProps) => {
  return (
    <div className="h-full flex flex-col space-y-4 justify-center">
      <Loader className="h-10 w-10 test-muted-foreground animate-spin" />
      <p className="text-muted-foreground capitalize">{label} is offline</p>
    </div>
  );
};

export default LoadingVideo;