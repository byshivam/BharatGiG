import Image from "next/image";

export default function About() {
    return ( 
        <div className="flex">
            <div>
                <div className="text-white p-4 mt-4">
                <div>
                    <h1 className="text-3xl font-bold">Education</h1>
                    <div className="border-t border-gray-500 mt-2 w-80 opacity-[0.4]"></div>
                </div>

                <div className="flex gap-4">
                    <div className="relative bg-gradient-to-r from-black via-midDark to-dark p-5 mt-4 h-32 w-48 rounded-lg shadow-sm shadow-gray-300">
                        <h2 className="font-bold text-sm">CURRENT</h2>
                        <h1 className="font-bold text-2xl">IGNOU - BCA</h1>
                        <span className="text-xs">SEMESTER-2</span>
                        <div className="absolute bottom-0 right-2 w-14 h-14">
                            <Image src='/ignou.png' layout="fill" objectFit="contain" />
                        </div>
                    </div>

                
                    <div className="relative bg-gradient-to-r from-black via-midDark to-dark p-5 mt-4 rounded-lg shadow-sm shadow-gray-300">
                        <h2 className="font-bold text-sm">COMPLETED</h2>
                        <h1 className="font-bold text-2xl">CRAW - CyberSecurity</h1>
                        <span className="text-xs">1 Year Diploma</span>
                        <div className="absolute bottom-0 right-2 w-12 h-12">
                            <Image src='/craw.png' width={40} height={40} objectFit="contain" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-white p-4">
                <div>
                    <h1 className="text-3xl font-bold">Work Experience</h1>
                    <div className="border-t border-gray-500 mt-2 w-80 opacity-[0.4]"></div>
                </div>

                <div className="flex gap-4">
                    <div className="relative bg-gradient-to-r from-black via-midDark to-dark p-5 mt-4 rounded-lg shadow-sm shadow-gray-300">
                        <h2 className="font-bold text-sm">GALGOTIA UNIVERSITY</h2>
                        <h1 className="font-bold text-2xl">SOLO CTF PLAYER</h1>
                        <span className="text-xs">On Rank #42 | Cyber Knight</span>
                    </div>
                </div>
            </div>

            </div>

        <div className="absolute right-8 top-24 text-white bg-gradient-to-r shadow-lg from-black via-midDark to-dark p-4 w-80 rounded-xl">
            <h1 className="text-2xl"> About Me </h1>
            <p className="text-sm mt-4">
            Hello, I'm Shivam, an introvert who enjoys exploring various interests. I love playing the piano, programming, and diving into bug hunting. I started my YouTube journey back in 2015, but faced a setback when I lost my main channel in 2020. However, I didn't give up and returned to YouTube with a new channel called BY.SHIVAM Rebooted.

I completed a 1-year Cyber Security diploma from Craw Cyber Security, which was an exciting experience. During this time, I acquired numerous skills, achieved milestones, and honed my abilities. Prior to that, I spent 1-2 years pursuing a Diploma in Electronics Engineering, but had to leave it for personal reasons. Currently, I am pursuing my graduation from Ignou.
            </p>
            <button className="p-2 bg-red-600 mt-4 w-full">Download Resume</button>
        </div>
        </div>
    );
}
