import SocialMedia from "@/components/SocialMedia";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row p-4  items-center lg:justify-center overflow-hidden lg:mt-8">
                <div className="flex flex-col items-center lg:items-start m-8  lg:mt-0 lg:w-1/2  lg:flex lg:justify-center">
                    <span className="text-white text-center lg:text-left">Hello I am</span>
                    <h1 className="text-white text-3xl lg:text-6xl font-bold text-center lg:text-left">SHIVAM KUMAR</h1>
                    <p className="text-white text-center lg:text-left mt-1">
                        Also Known as <Link className="text-red-600" href='https://g.co/kgs/7aHVpc2'>@BY.SHIVAM</Link>
                    </p>
                </div>
                <div className="flex justify-center lg:justify-end w-full lg:w-auto  lg:mt-0 lg:w-1/2">
                    <Image src='/avatar.png' width={300} height={420} className="shadow rounded-md grayscale" />
                </div>
            </div>
            <div className="hidden lg:block">
                <SocialMedia />
            </div>
        </>
    );
}
