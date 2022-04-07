import tamales from '../assets/imgs/tamales_bg.jpg'

const Intro = () =>(
   <div className="intro wrapp">
      <div className="intro__text">
         <h2>CON EL PERMISO DIVINO PARA COCINAR</h2>
         <p>¡ANTOJITOS 100% CASEROS!</p>
         <p>Traemos para usted nuestros ricos y deliciciosos "Tamales de Cazuela" de nuestra querida Doña Nancy quien desde 1972 comenzó esta memorable tradición cocinando tamales para el deleite de nuestros paladares.<br />
         Reconocidos ampliamente por toda la CDMX de norte a sur, oficinistas y locatarios, chicos y adultos han sido parte de este gran manjar preparado por una mujer muy especial. Hacemos pedidos para todos sus eventos.</p>
      </div>
      <div className="intro__image">
         <img src={tamales} alt="" />
      </div>
   </div>
)

export default Intro