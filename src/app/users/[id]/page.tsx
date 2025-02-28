export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">User Page {id}</main>
    </div>
  );
}
