import { useSession } from "next-auth/react";

export function getClientToken() {
  const { data: session } = useSession();
  return session?.user?.token || "";
}
