import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-banner bg-center bg-fixed bg-no-repeat bg-cover p-b-[300px]">
        <div className="w-full h-full pb-96 bg-black opacity-80 text-white">
          <Navbar /> 
          <Banner />
        </div>
      </div>
    </main>
  );
}