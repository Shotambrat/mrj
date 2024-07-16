import Logo from "@/app/_components/Header/Logo";
import Navigation from "@/app/_components/Header/Navigation";
import Tools from "@/app/_components/Header/Tools";

export default function Header() {
  return (
    <header className="w-full bg-white py-4 px-2 h-[90px] max-mdx:h-[70px] shadow-2xl">
      <div className="w-full max-w-[1440px] flex justify-between gap-2 h-full mx-auto">
        <Logo />
        <Navigation />
        <Tools />
      </div>
    </header>
  )
}
