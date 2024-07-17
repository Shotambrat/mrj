import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="w-full max-w-[1440px] px-2 flex mx-auto">
      <div className="flex-1 h-full flex justify-center">
        <div className="w-full flex flex-col gap-8">
            <h2 className="text-3xl max-mdx:text-2xl font-semibold">
              ABOUT US
            </h2>
            <p className="w-full max-w-[80%] text-neutral-400">
            MRJ Trade is a reliable distributor of medical equipment from leading manufacturers of the world. The company provides solid range of medical diagnostic equipment for IVD, PMLS and MIS such as ultrasound devices, lab analyzers, X-rays, MRI, CT systems, dental units in the UAE.
            </p>
            <Link href="/about">
            <button className="text-xs font-semibold rounded-xl bg-greenView text-white whitespace-nowrap px-12 py-3">
              More details
            </button>
            
            </Link>
        </div>
      </div>
      <div className="flex-1 h-full flex justify-center">
        
      </div>
    </div>
  )
}
