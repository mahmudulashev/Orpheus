import { AmbientGlow } from "@/components/decor/ambient-glow";
import { Navbar } from "@/components/layout/navbar";
import { Connect } from "@/components/sections/connect";
import { Contribution } from "@/components/sections/contribution";
import { Hero } from "@/components/sections/hero";
import { Works } from "@/components/sections/works";

export default function Home() {
  return (
    <div className="relative isolate overflow-x-clip">
      <AmbientGlow />
      <Navbar />
      <main>
        <Hero />
        <Works />
        <Contribution />
      </main>
      <Connect />
    </div>
  );
}
