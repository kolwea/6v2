import { SixDegreeHeader } from "./_components/Header";
import Example from "./_components/TailwindExample";
import ThreeScene from "./_components/ThreeScene";


export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <ThreeScene >
        <SixDegreeHeader />
      </ThreeScene>
    </main>
  );
}
