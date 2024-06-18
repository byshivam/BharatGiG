import Image from "next/image";

export default function Cards({ title, imgSrc, desc, URL }) {
    return (
        <div className="bg-gradient-to-b from-dark via-midDark to-black w-60 p-4 text-white m-8 flex flex-col justify-between text-center rounded-xl shadow shadow-white min-h-[20rem]">
            <div className="flex-grow">
                <Image src={imgSrc} width={200} height={48} className="rounded-xl mx-auto" alt={title} />
                <h1 className="font-bold text-2xl mt-4">{title}</h1>
                <p className="text-[10px] mt-2">{desc}</p>
            </div>
            <button className="bg-red-600 w-full p-2 mt-4 rounded-md">Check out</button>
        </div>
    );
}
