import Link from "next/link"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
export default function SocialMedia(){
    return (
        <div className="text-white rotate-90 absolute right-10 top-1/2 translate-x-1/2">
            <ul className="flex gap-4">
                <div>
                    <FontAwesomeIcon icon={faFacebook} className="mr-2"/>
                    <Link href='https://www.facebook.com/byshivam'  className="hover:text-blue-500 font-normal">Facebook</Link>
                </div>
                <div>
                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                    <Link href='https://www.instagram.com/by.shivamyt' className="hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-transparent bg-clip-text font-normal">Instagram</Link>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    <Link href='https://www.github.com/byshivam' className="hover:text-black font-normal">GitHub</Link>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />     
                    <Link href='https://www.linkedin.com/in/byshivam' className="hover:text-blue-400 font-normal">LinkedIN</Link>
                </div>
            </ul>
        </div>
    )
}