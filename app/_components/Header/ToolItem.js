import Image from "next/image"

export default function ToolItem({url, key}) {
  return (
    <button key={key} className="border border-neutral-300 px-4 py-4 rounded-full max-mdx:px-3 max-mdx:py-3">
        <Image
        src={url}
        height={100}
        width={100}
        alt={`Tools Item ${key}`}
        className="w-6 h-6 max-mdx:w-3 max-mdx:h-3"
        />
    </button>
  )
}
