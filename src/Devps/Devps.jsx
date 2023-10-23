

function Devps(img, name, description, infoAcademic, contac, git, linkedin){
    return(
        <div>
            <img src={img} alt="ImgPerfil" />
            <h1>{name}</h1>
            <h2>{description}</h2>
            <h1>Información academica</h1>
            <h2>{infoAcademic}</h2>
            <h1>Contacto:</h1>
            <h2>{contac}</h2>
            <h1>Redes:</h1>
            <ul>
                <li>
                    {git}
                </li>
                <li>
                    {linkedin}
                </li>
            </ul>
        </div>
    )
}
export default Devps