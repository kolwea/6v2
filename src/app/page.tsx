import { SixDegreeHeader } from "./_components/Header";
import NavigationMenu from "./_components/Navigation";
import ThreeScene from "./_components/ThreeScene";


export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <ThreeScene >
        <NavigationMenu />
      </ThreeScene>
    </main>
  );
}
