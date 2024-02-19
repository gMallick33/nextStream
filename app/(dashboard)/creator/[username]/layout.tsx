import { redirect } from "next/navigation";

import { getSelfByUsername } from "@/lib/auth-service";

import { Navbar } from "./_component/navbar";
import { Sidebar } from "./_component/sidebar";
import { Container } from "./_component/container";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
