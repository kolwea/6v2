import { SixDegreeHeader } from "./_components/Header";
import NavigationMenu from "./_components/Navigation";
import ThreeScene from "./_components/ThreeScene";
import { founders } from "./layout";


export default async function Home() {
  return (
    <main className={`flex flex-col items-center justify-center font-sans ${founders.className}`}>
      <ThreeScene >
        <NavigationMenu />
      </ThreeScene>
    </main>
  );
}
