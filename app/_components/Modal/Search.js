export default function Search() {
  return (
    <div className="fixed h-screen w-full bg-modalBg left-0 top-[100px] z-[9999]">
      <div className="h-[70%] w-full bg-white pt-8">
        <div className="h-full w-full max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex items-center bg-snowy rounded-lg p-4 w-full shadow-sm">
            <input
              type="text"
              placeholder="Enter the name of the product, page, etc..."
              className="bg-transparent outline-none flex-1 text-gray-600 placeholder-gray-400"
            />
            <svg
              className="w-5 h-5 text-greenView"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
