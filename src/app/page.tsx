import Image from "next/image";
import HomePage from "./Home";
import Layout from "@/Components/Atoms/Layout/Layout";

export default function Home() {
  return (
    <Layout>
    <main className="flex-1 flex p-1">
      
      <HomePage/>
      
    </main>
    </Layout>
  );
}
