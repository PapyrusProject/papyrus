"use client";
import { Navigation } from "@/app/(settings)/_components/Navigation";
import Spinner from "@/components/ui/Spinner";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return redirect("/");
  }

  return (
    <>
      <div className="container min-h-screen flex ">
        <Navigation />
        <section className="container flex-1 h-full overflow-y-auto mt-5">
          {children}
        </section>
      </div>
    </>
  );
};

export default SettingsLayout;
