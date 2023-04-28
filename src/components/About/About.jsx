import style from './About.module.css'
import imagen from './nico.jpg';

const About = () => {
    return(
        <div className={style.containerAbout}>
            <img className={style.miFoto} src={imagen} alt="Mi foto" />
            <h2 className={style.tittle}>About me</h2>
            <hr></hr>
            <h3 className={style.tittleName}>Name:</h3>
            <h4 className={style.name}>Nicolás Cordobez</h4>
            <div className='Contenedor'>
                <p className={style.aboutText}>Hola a todos, mi nombre es Nicolas Cordobez, tengo 23 años y soy estudiante en soyHenry.</p></div>
        </div>
    )
}

export default About;