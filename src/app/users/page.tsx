import { getUsers } from "@/app/data-access/users";

export default async function Users() {
  const users = await getUsers();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        USERS LIST
        <div className={"users-list"}>
          {users.map((user) => {
            return (
              <div key={user} className={"user"}>
                {user}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
