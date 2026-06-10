const Loading = () => {
  return (
    <div className="relative flex min-h-[60vh] items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6">
        <span
          aria-hidden
          className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-plum-500 text-cream-50"
        >
          <span className="font-display text-2xl leading-none">E</span>
          <span className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-cream-100/30 to-transparent" />
        </span>
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55">
          Loading the campaign…
        </p>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

export default Loading
