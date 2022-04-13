import video from "../assets/video/cooking.mp4"
import logo from '../assets/imgs/logo.png'

const Home = () =>(
   <div className="home">
      <div className="home__video">
         <div className="home__video-txt">
            <img src={logo} alt="" /><br/>
            <h2>Con el permiso divino para cocinar</h2>
         </div>
         <video src={video} autoPlay muted loop typeof="video/mp4"></video>
         <div className="home__video-layer"></div>
      </div>
      <div className="home__order wrapp">
         <div className="home__order-txt">
            <h2>¿Quiere un Pedido para sus eventos?</h2>
            <p>¡Con gusto lo atenderemos!<br/> Envíenos un email y nos pondermos en contacto con usted.</p>
         </div>
         <div className="home__order-btn">
            <a href="mailto:tamales.madrina.nancy@gmail.com" target="_blank" rel="noreferrer" className="btn">Hacer un Pedido</a>
         </div>
      </div>
   </div>
)

export default Home