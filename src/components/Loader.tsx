export default function Loader() {
  return (
    <div className="h-screen flex items-center justify-center bg-zinc-950">
      <div className="flex gap-2">
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150" />
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300" />
      </div>
    </div>
  )
}