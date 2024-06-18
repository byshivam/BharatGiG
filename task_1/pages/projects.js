import Cards from "@/components/Cards";


export default function project(){
    return (
        <>
        <section className="p-4 h-full">
            <div className="flex  justify-center item-center">
            <Cards title='BharatGiG' imgSrc='/bharatGIG.png' desc='This Project contains the projects and tasks I completed during my internship at #BharatGiG. The internship focused on enhancing my skills in web development' URL='https://github.com/byshivam/BharatGiG'/>
            <Cards title='AnimeZ' imgSrc='/animez.png' desc='Animez is your go-to anime website, offering an extensive database of characters, series, movies, and more. Discover and explore the vast world of anime all in one place with Animez.' URL='#'/>
            <Cards title='BY.SHIVAM' imgSrc='/byshivam.png' desc='“BY.SHIVAM Rebooted" on YouTube showcases my music and video projects, blending creativity, technology, and artistic skills.' URL='https://github.com/byshivam/BharatGiG'/>
            </div>
        </section>
        </>
    )
}
