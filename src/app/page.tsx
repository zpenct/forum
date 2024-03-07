import ThreadPreview from "@/components/ThreadPreview";

export default function Home() {
  return (
    <main className="w-full bg-slate-50 md:pl-10 pt-10">
      <div className="w-full max-w-3xl flex flex-col gap-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <ThreadPreview key={i} />
        ))}
      </div>
    </main>
  );
}
