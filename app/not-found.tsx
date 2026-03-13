import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 font-mono">
			<div className="w-full max-w-2xl rounded-lg overflow-hidden border border-zinc-700 shadow-2xl shadow-black/50">
				{/* Terminal header bar */}
				<div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 border-b border-zinc-700">
					<div className="flex gap-2">
						<span className="w-3 h-3 rounded-full bg-red-500/80" />
						<span className="w-3 h-3 rounded-full bg-amber-500/80" />
						<span className="w-3 h-3 rounded-full bg-emerald-500/80" />
					</div>
					<span className="text-zinc-500 text-sm ml-4">404 — page_not_found</span>
				</div>

				{/* Terminal body */}
				<div className="bg-zinc-950 p-6 space-y-4 text-sm">
					<div>
						<span className="text-emerald-400">visitor@portfolio</span>
						<span className="text-zinc-500">:</span>
						<span className="text-blue-400">~</span>
						<span className="text-zinc-500">$</span>
						<span className="text-zinc-300"> curl /this-page</span>
					</div>
					<div className="text-red-400">
						{">"} Error 404: Page not found. No such file or directory.
					</div>
					<div className="text-zinc-500">
						{">"} Perhaps you meant: <span className="text-zinc-400">cd /</span> ?
					</div>
					<div className="pt-4">
						<span className="text-emerald-400">visitor@portfolio</span>
						<span className="text-zinc-500">:</span>
						<span className="text-blue-400">~</span>
						<span className="text-zinc-500">$</span>
						<span className="text-zinc-400"> </span>
						<span className="animate-pulse">_</span>
					</div>
					<div className="pt-6 border-t border-zinc-800">
						<Link
							href="/"
							className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition"
						>
							<span>$ cd /</span>
							<span className="text-zinc-500 text-xs">← go home</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
