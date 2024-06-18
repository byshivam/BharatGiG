import Link from "next/link"

export default function footer(){
    return (
        <div className="text-white text-center ">
            <h3 className="font-bold mt-1">Current Position</h3>
            <p className="mb-4">Web Developer Intern at <Link href='https://bharatgig.site' className="text-red-600">#BharatGiG</Link></p>
        </div>
    )
}