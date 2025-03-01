import { getUsers } from "@/data-access/users";
import Link from "next/link";

export default async function Page() {
  const users = await getUsers();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        USERS LIST
        <div className={"users-list"}>
          {users.map((user) => {
            return (
              <div key={user} className={"user"}>
                <Link href={`/users/${user}`}>{user}</Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
