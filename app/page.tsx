import Banner from "@/app/components/Banner";
import "@/styles/globals.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-banner w-full bg-center bg-fixed bg-no-repeat bg-cover p-b-[300px]">
      <div className="w-full h-full pb-96 bg-black opacity-80 text-white bg-cover">
      <Navbar />
      <Banner />
      </div>
    </div>
  );
}