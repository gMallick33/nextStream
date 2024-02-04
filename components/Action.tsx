import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Action = async () => {
  const user = await currentUser();

  return (
    <div>
      {!user && (
        <SignInButton>
          <Button variant="secondary" className="bg-blue-700">
            Log In
          </Button>
        </SignInButton>
      )}
      {!!user && (
        <div className="flex flex-row justify-between items-center">
          <Link
            href={`/users/${user.username}`}
            className="p-4 flex items-center"
          >
            <Clapperboard />
            <p>Dashboard</p>
          </Link>

          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};

export default Action;
