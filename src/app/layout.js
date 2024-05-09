import { Inter } from "next/font/google";
import "./globals.css";
import { getGlobalData } from "@/data/loaders";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";
import { getGlobalPageMetaData }  from "@/data/loaders";

export async function generateMetadata() {
  const metadata = await getGlobalPageMetaData();
  console.log(metadata);
  return {
      title: metadata?.title,
      description: metadata?.description,
  };
}

const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({ children }) {
  const globalData = await getGlobalData();
  console.log(globalData);
  console.log(generateMetadata)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header data={globalData.header} />
        <div>
        {children}
        </div>
        <Footer data={globalData.footer} />
        
        </body>
    </html>
  );
}
