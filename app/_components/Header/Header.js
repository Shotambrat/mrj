import axios from 'axios';
import Logo from "@/app/_components/Header/Logo";
import Navigation from "@/app/_components/Header/Navigation";
import Tools from "@/app/_components/Header/Tools";

export default async function Header() {
  const res = await axios.get('https://mrjtrade.uz/navbar/get');
  const data = res.data;

  return (
    <header className="w-full bg-white py-4 px-2 h-[90px] shadow-2xl">
      <div className="w-full max-w-[2100px]  flex justify-between gap-2 h-full mx-auto">
        <Logo logoUrl={data.data.logo.url} />
        <Navigation navOptions={data.data.options} />
        <Tools navOptions={data.data.options} />
      </div>
    </header>
  )
}