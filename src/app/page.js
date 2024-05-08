import { Button } from "@/components/ui/button";

async function GetHomePageData(path) {

  const baseURL = `http://localhost:1337/${path}`;
  const data = await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
      return data;
    
    });
return data;
}


export default async function Home() {
  const data = await GetHomePageData("api/home-page");

  const { title, description } = data.data.attributes;
  return (
    <main className="container mx-auto py-6">
    <h1 className="text-5xl font-bold">{title}</h1>
    <p className="text-xl mt-4">{description}</p>
  </main>
  );
}
