import Image from "next/image";

export default function NewsTitle({ data }) {
  const { head, newOptions, createDate } = data;

  return (
    <div className="w-full max-w-[832px] mx-auto flex flex-col gap-10 px-4">
      <div className="mt-4">
        <p className="text-gray-400 text-[16px] mdx:text-[18px] xl:text-[20px]">{new Date(createDate).toLocaleDateString()}</p>
        <h1 className="text-[30px] text-black mb-2 mdx:text-[34px] xl:text-[40px] uppercase leading-10">{head.title}</h1>
      </div>
      <div>
        <p className="text-[16px] mdx:text-[20px]">{head.body}</p>
      </div>
      {head.photo && (
        <div className="xl:mt-7 xl:mb-[80px] flex flex-row justify-center">
          <Image
            src={head.photo.url}
            width={500}
            height={500}
            alt={`News Image`}
            className="w-full h-auto max-w-[832px] max-h-[450px] object-cover rounded-3xl"
          />
        </div>
      )}
      {newOptions.map((option, index) => (
        <div className="flex flex-col gap-6" key={index}>
          <h2 className="text-[20px] mdx:text-[27px]">{option.heading}</h2>
          <p className="text-[16px] mdx:text-[20px]">{option.text}</p>
          {option.photo && (
            <div className="mt-[30px] mb-[10px] flex flex-row justify-center">
              <Image
                src={option.photo.url}
                width={500}
                height={500}
                alt={`News Option Image`}
                className="w-full h-auto max-w-[832px] max-h-[450px] object-cover rounded-3xl"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}