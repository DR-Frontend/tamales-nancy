import logo_trazos from "../assets/imgs/logo-trazos.svg"
import facebook from "../assets/imgs/icon-facebook.svg"
import whatsapp from "../assets/imgs/icon-whatsapp.svg"
import maps from "../assets/imgs/icon-maps.svg"

const Footer = ()=>(
   <footer id="footer" className="footer">
      <div className="wrapp">
         <div className="footer__order">
            <img src={logo_trazos} alt="" />
            <h2>¿LISTO PARA HACER SU PEDIDO?</h2>
            <p>Con gusto atenderemos sus pedidos para sus eventos.<br/>
            ¿Día de la Candelaria? ¿Posadas de Diciembre? o ¿debe alguna apuesta?, no se preocupe... los tamales de 'La Madrina Nancy' entrarán al rescate!.</p><br/>
            <a href="mailto:tamales.madrina.nancy@gmail.com" target="_blank" rel="noreferrer" className="btn">Hacer un Pedido</a>
         </div>
         <div className="footer__contact">
            <div className="footer__contact-social">
               <a href="https://www.facebook.com/tamales.madrina.nancy/" target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a>
               <a href="https://api.whatsapp.com/send?phone=+5215587237751" target="_blank" rel="noreferrer"><img src={whatsapp} alt="" /></a>
               <a href="https://goo.gl/maps/Z55HqGBXpmW2Sn1e6" target="_blank" rel="noreferrer"><img src={maps} alt="" /></a>
            </div>
            <p>- ¡Negocio Orgullosamente Mexicano! -</p>
            <p>©2022 - Todos los derechos reservados.</p>
         </div>
      </div>
   </footer>
)

export default Footer