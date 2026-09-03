/**
 * Figma: "Background" — soft ellipses behind the header (one bleeding off the
 * left edge, one top-right) plus a warm one further down. Radial gradients
 * keep them crisp, and the tint swaps per theme through CSS variables.
 */
export function AmbientGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[2000px] overflow-hidden"
    >
      {/* Figma "Ellipse 1" — 1129 × 898, centred on the left page edge. */}
      <div
        className="absolute top-[15px] left-[-565px] h-[1010px] w-[1130px] rounded-full blur-[60px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--glow-left), transparent 76%)",
        }}
      />
      {/* Figma "Ellipse 5" — 956 × 1012, tucked into the top-right corner. */}
      <div
        className="absolute top-[-238px] left-[calc(89%-478px)] h-[1012px] w-[956px] rounded-full blur-[60px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--glow-right), transparent 76%)",
        }}
      />
      <div
        className="absolute top-[1020px] left-[-500px] h-[900px] w-[1130px] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--glow-bottom), transparent 72%)",
        }}
      />
    </div>
  );
}
