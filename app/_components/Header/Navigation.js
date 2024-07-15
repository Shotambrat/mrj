import Link from "next/link"

export default function Navigation() {
    const data = [
        {
            title: 'Catalog',
            slug: 'catalog',
        },
        {
            title: 'About us',
            slug: 'about',
        },
        {
            title: 'Partners',
            slug: 'partners',
        },
        {
            title: 'News',
            slug: 'news',
        },
        {
            title: 'Contacts',
            slug: 'contacts',
        },
    ]
  return (
    <nav className="h-full flex gap-20 items-center max-2xl:hidden">
        {data.map((item, i) => {
            return (
                <Link href={`/${item.slug}`} key={i}>
                    <div className="text-gray-800 font-semibold text-xl hover:text-gray-400 transition-all duration-300 whitespace-nowrap">{item.title}</div>
                </Link>
            )
        })}
    </nav>
  )
}
