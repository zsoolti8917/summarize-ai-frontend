import Link from "next/link";
import { Logo } from "@/components/custom/Logo";
import { Button } from "@/components/ui/button";



export async function Header({ data }) {
  const { logoText, ctaButton } = data;
  console.log(data);
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md dark:bg-gray-800">
      <Logo text={logoText.text}/>
      <div className="flex items-center gap-4">
        <Link href={ctaButton.url}><Button>{ctaButton.label}</Button></Link>
      </div>
    </div>
  );
}