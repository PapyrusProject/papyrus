export const ThemePicker = () => {
  return (
    <section className="flex flex-col my-4">
      <p className="text-muted-foreground ">Choose how GitHub looks to you.</p>
      <div className="h-16 flex items-center gap-4">
        <div className="h-10 w-10 border border-zinc-400 bg-orange-500 rounded-full cursor-pointer hover:scale-110 hover:bg-orange-400" />
        <div className="h-10 w-10 border border-zinc-400 bg-green-500 rounded-full cursor-pointer hover:scale-110 hover:bg-green-400" />
        <div className="h-10 w-10 border border-zinc-400 bg-blue-500 rounded-full cursor-pointer hover:scale-110 hover:bg-blue-400" />
        <div className="h-10 w-10 border border-zinc-400 bg-red-500 rounded-full cursor-pointer hover:scale-110 hover:bg-red-400" />
        <div className="h-10 w-10 border border-zinc-400 bg-zinc-500 rounded-full cursor-pointer hover:scale-110 hover:bg-zinc-400" />
      </div>
    </section>
  );
};
