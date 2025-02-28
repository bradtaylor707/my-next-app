import { ReactNode } from "react";
import BackButton from "@/app/components/back-button";

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id={"users-layout"}>
      <BackButton />
      <div className={"route-wrapper"}>{children}</div>
    </div>
  );
}
