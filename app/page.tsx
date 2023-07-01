import Image from "next/image";
import Link from "next/link";
import Bunner from "../components/Bunner/Bunner";
import List from "../components/List/List";
import FuterBunner from "../components/FuterBunner/FuterBunner";
export default function Home() {
  return (
    <div className="App">
      <Bunner />
      <List />
      <FuterBunner />
    </div>
  );
}
