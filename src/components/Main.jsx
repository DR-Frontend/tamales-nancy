

const Main = ()=>(
   <main id="main" className="main">
      <div className="main__lists wrapp">
         <h2>TAMALES DE CAZUELA</h2>
         <p>¡La 'carta fuerte' de la casa!</p>
         <div className="main__lists-tamales">
            <div className="tamal">
               <div className="tamal__txt">
                  <h2>Champiñones</h2>
                  <p>Tamal verde con relleno de carne de cerdo</p><br/>
                  <a href="#" className="btn">Hacer un pedido</a>
               </div>
               <div className="tamal__img">
                  <img src="https://placeimg.com/150/200/animal" alt="" />
               </div>
            </div>
         </div>
         <h2>COMIDA PARA LLEVAR</h2>
         <p>El 'extra' para deleitar el paladar.</p>
         <div className="main__lists-foods"></div>
      </div>
   </main>
)

export default Main