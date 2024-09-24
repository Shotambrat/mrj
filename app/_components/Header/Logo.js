

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/mrj-logo.png";


function Logo({ logoUrl, id }) {
  console.log(logoUrl)
  return (
    <Link href="/" className="h-full max-mdx:h-[50px]">
        <Image
          src={logoUrl}
          width={300}
          height={300}
          alt="MRJ Logo"
          className="h-full w-auto"
        />
    </Link>
  );
}

export default Logo;
