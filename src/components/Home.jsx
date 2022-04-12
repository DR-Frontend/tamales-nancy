const Home = () =>(
   <div className="home">
      <picture>
         <source media="(max-width:768px)" srcset="https://placeimg.com/450/300/animals" />
         <img src="https://placeimg.com/1000/300/animals" alt=""/>
      </picture>
      <div className="home__order wrapp">
         <div className="home__order-txt">
            <h2>¿Quiere un Pedido para sus eventos?</h2>
            <p>¡Con gusto lo atenderemos!<br/> Envíenos un email y nos pondermos en contacto con usted.</p>
         </div>
         <div className="home__order-btn">
            <a href="mailto:tamales.madrina.nancy@gmail.com" target="_blank" className="btn">Hacer un Pedido</a>
         </div>
      </div>
   </div>
)

export default Home