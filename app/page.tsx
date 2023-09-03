import Banner from "@/app/components/Banner";
import "@/styles/globals.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}