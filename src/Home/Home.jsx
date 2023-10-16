
function Home() {
    return (
        <div>
            <nav className="flex mt-14">
                <ul className="flex flex-grow text-center ">
                    <li className="w-full text-2xl font-bold"><a href="#">Home</a></li>
                    <li className="w-full text-2xl font-bold"><a href="#">Voluntarios</a></li>
                    <li className="w-full text-2xl font-bold"><a href="#">Programas</a></li>
                    <li className="w-full text-2xl font-bold"><a href="#">Donar</a></li>
                    <li className="w-full text-2xl font-bold"><a href="#">Soporte</a></li>
                </ul>
            </nav>
            <div className="mt-10 justify-center text-center bg-teal-600 h-28">
                <h1 className="text-4xl font-bold text-">Participa ahora...</h1>
                <h1 className="text-4xl font-bold">Elige de que manera deseas ayudarnos</h1>
            </div>
        </div>
    )
}

export default Home;