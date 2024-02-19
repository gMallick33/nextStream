import Image from "next/image";
import Results from "./_components/Results";

export default function Home() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Results />
    </div>
  );
}
