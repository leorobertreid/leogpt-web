export default function Hamburger() {
  return (
    <div className="space-y-2">
      <div className="space-y-2 hover:bg-zinc-800 p-3 group transition rounded-lg hover:duration-300">
      <div className="w-8 h-0.5 bg-zinc-800 group-hover:bg-white rounded-lg"></div>
      <div className="w-8 h-0.5 bg-zinc-800 group-hover:bg-white rounded-lg"></div>
      <div className="w-8 h-0.5 bg-zinc-800 group-hover:bg-white rounded-lg"></div>
    </div>
  </div>
  )
}