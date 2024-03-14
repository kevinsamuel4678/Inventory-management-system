import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
      <nav className="navbar" >
        <h1>Inventory <br />Managment <br />System</h1>
        <div className="links">
          <Link to ="/Summary" id='sum'>Inventory Summary</Link>
          <Link to="/" style={{ 
            color: 'white', 
            backgroundColor: '#e9a5a5',
            borderRadius: '8px' 
          }}>New Product Entry</Link >
        </div>
      </nav>
    );
  }
   
  export default Navbar;
  