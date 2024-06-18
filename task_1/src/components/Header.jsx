import Link from "next/link"

export default function Header(){
    return (
        <>
        <div className="p-4 bg-header flex justify-center text-center">
            <h1 className="font-bold text-white lg:absolute lg:left-5 text-lg ">PORTFOLIO</h1>
            <nav className="text-white">
                <ul className="flex gap-2">
                    <Link href='/' className="ml-4 hover:text-red-500">HOME</Link>
                    <Link href='/about' className="ml-4 hover:text-red-500">ABOUT</Link>
                    <Link href='/projects' className="ml-4 hover:text-red-500">PROJECTS</Link>
                    {/* <Link href='#' className="ml-4 hover:text-red-500">BLOGS</Link> */}
                </ul>
            </nav>
        </div>
        </>
    )
}