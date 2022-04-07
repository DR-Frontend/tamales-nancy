const Carrusel = () =>(
   <div className="carrusel">
      <picture>
         <source media="(max-width:768px)" srcset="https://placeimg.com/450/300/sepia" />
         <img src="https://placeimg.com/1000/300/sepia" alt=""/>
    </picture>
   </div>
)

export default Carrusel