import { ProductDisplay } from "@/components/ProductDisplay";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const title = "♾️ Infinite shop";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        className={`flex h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <ProductDisplay title={title} />
      </main>
    </>
  );
}
