import CatalogList from "../Catalog/CatalogBar"

export default function Category() {
  return (
    <div className="fixed h-screen w-full z-10 bg-black backdrop-opacity-30 flex justify-center items-center px-12 py-12">
      <div className="w-full h-full overflow-y-scroll no-scrollbar bg-white rounded-3xl relative px-4 pt-4">
        <CatalogList />
      </div>
    </div>
  )
}
