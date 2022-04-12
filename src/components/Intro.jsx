import tamales from '../assets/imgs/img-tamales-1.jpg'

const Intro = () =>(
   <div className="intro wrapp">
      <div className="intro__text">
         <h2>CON EL PERMISO DIVINO PARA COCINAR</h2>
         <p>Traemos para usted nuestros exquisitos <b>"Tamales de Cazuela"</b> de nuestra querida 'Madrina Nancy' quien desde 1972 comenzó esta memorable tradición cocinando tamales para el deleite de nuestros paladares.</p><br />
         <p>¿Por qué de Cazuela? así es llamado el estilo con el que nuestra querida 'Madrina Nancy' prepara sus tamales. La receta secreta con la que niños y adultos; obreros y oficinistas; 'Mirreyes' y 'Godinez' disfrutan su amplia variedad de alimentos de 'Alta cocina'.</p>
      </div>
      <div className="intro__image">
         <img src={tamales} alt="" />
      </div>
   </div>
)

export default Intro