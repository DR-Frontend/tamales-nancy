import champi from "../assets/imgs/tamal-champi.jpg"
import verde from "../assets/imgs/tamal-verde.jpg"
import rajas from "../assets/imgs/tamal-rajas.jpg"
import mole from "../assets/imgs/tamal-mole.jpg"
import dulce from "../assets/imgs/tamal-dulce.jpg"
import zarza from "../assets/imgs/tamal-zarza.jpg"

const Main = ()=>(
   <main id="main" className="main">
      <div className="main__lists wrapp">
         <h2>MENÚ DE TAMALES</h2>
         <div className="main__lists-tamales">
            <div className="tamal">
               <div className="tamal__txt">
                  <h2>Champiñones</h2>
                  <p><span>Para los Aventureros.</span></p><br/>
                  <p>Relleno con champiñones y queso. Una nueva variedad para los paladares más atrevidos.</p>
               </div>
               <div className="tamal__img">
                  <img src={champi} alt="" />
               </div>
            </div>
            <div className="tamal">
               <div className="tamal__txt">
                  <h2>Verdes</h2>
                  <p><span>Para los Clásicos.</span></p><br/>
                  <p>Rellenos con carne de cerdo y salsa verde. Nuestro tamal más tradicional para el día a día.</p>
               </div>
               <div className="tamal__img">
                  <img src={verde} alt="" />
               </div>
            </div>
            <div className="tamal">
               <div className="tamal__txt">
                  <h2>Rajas</h2>
                  <p><span>Para los Valientes.</span></p><br/>
                  <p>Rellenos con unas picositas rajas y queso. Solo nuestros clientes más osados se atreven a este reto.</p>
               </div>
               <div className="tamal__img">
                  <img src={rajas} alt="" />
               </div>
            </div>
            <div className="tamal">
               <div className="tamal__txt">
                  <h2>Mole</h2>
                  <p><span>Para los Variados.</span></p><br/>
                  <p>Rellenos con carne de cerdo y salsa de guajillo. Uno más para nuestros comensales valientes.</p>
               </div>
               <div className="tamal__img">
                  <img src={mole} alt="" />
               </div>
            </div>
            <div className="tamal">
               <div className="tamal__txt">
                  <h2>Dulce rojo/piña</h2>
                  <p><span>Para los Dulces.</span></p><br/>
                  <p>Rellenos con pasas o piña. Perfectos para el "postre" después de una buena tandada de tamales.</p>
               </div>
               <div className="tamal__img">
                  <img src={dulce} alt="" />
               </div>
            </div>
            <div className="tamal">
               <div className="tamal__txt">
                  <h2>A la medida</h2>
                  <p><span>Para los Exploradores.</span></p><br/>
                  <p>¿Deseas algo nuevo? Hacemos el tamal que tú desees: Zarzamora, Carlos V, Philadephia, etc. </p>
               </div>
               <div className="tamal__img">
                  <img src={zarza} alt="" />
               </div>
            </div>
         </div>
         <h2>COMIDA PARA LLEVAR</h2>
         <p>El 'extra' para deleitar el paladar.</p>
         <div className="main__lists-foods">
            <ul className="main__lists-ul">
               <li className="main__lists-li">
                  <h2>Atoles</h2>
                  <p><span>Para que "resbale" todo.</span></p>
                  <p>Exquisita variedad de atoles para acompañar sus tamales: Cajeta, Piloncillo, Champurrado, Arroz y Fresa.</p>
               </li>
               <li className="main__lists-li">
                  <h2>Tortas</h2>
                  <p><span>Para tener "energía" todo el día.</span></p>
                  <p>Deliciosas y calientitas tortas de Cochinita, Choriqueso, Pollo, Jamón, Salchicha, Huevo o Milaneza.</p>
               </li>
               <li className="main__lists-li">
                  <h2>Chilaquiles</h2>
                  <p><span>Para empezar "bravo" el día.</span></p>
                  <p>Bien picositos ya sean Rojos o Verdes. Con su respectiva cebolla, crema, queso y huevo (o bistec) al gusto.</p>
               </li>
               <li className="main__lists-li">
                  <h2>Huevos al gusto</h2>
                  <p><span>Para que gane "fuerzas".</span></p>
                  <p>Con jamón, salchicha, tocino, con chorizo o a la mexicana. El complemento perfecto para iniciar el día.</p>
               </li>
               <li className="main__lists-li">
                  <h2>Sincronizadas</h2>
                  <p><span>Para los que comen "ligero".</span></p>
                  <p>Con jamón, queso oaxaca y salsa verde/roja. Pedirás más de una orden.</p>
               </li>
               <li className="main__lists-li">
                  <h2>Tacos Dorados</h2>
                  <p><span>Para recargar "el tanque".</span></p>
                  <p>Picadillo, pollo, queso, jamón, papa con queso y su respectiva crema, lechuga, queso y salsa verde/roja.</p>
               </li>
            </ul>
         </div>
         <div class="main__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dup9E3wMdC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
      </div>
   </main>
)

export default Main