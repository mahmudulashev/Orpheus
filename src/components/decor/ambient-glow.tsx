/**
 * Figma: "Background" — two soft ellipses behind the header, one bleeding off
 * the left edge and one tucked into the top-right corner. Radial gradients
 * keep them crisp, and the tint swaps per theme through CSS variables.
 */
export function AmbientGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1200px] overflow-hidden"
    >
      <div
        className="absolute top-[40px] left-[-540px] h-[880px] w-[1120px] rounded-full blur-[60px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--glow-left), transparent 78%)",
        }}
      />
      <div
        className="absolute top-[-280px] left-[calc(96%-500px)] h-[560px] w-[1000px] rounded-full blur-[60px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--glow-right), transparent 78%)",
        }}
      />
    </div>
  );
}
