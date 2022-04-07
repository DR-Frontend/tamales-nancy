import logo from '../assets/imgs/logo.svg'

const Header = ()=>(
   <header>
      <nav className='menu wrapp'>
         <img src={logo} alt="" className="menu__img"/>
      </nav>
   </header>
)

export default Header