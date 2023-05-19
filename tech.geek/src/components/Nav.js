import '../components/Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <div className = "heading">
            
            <h1><Link className = "link" to={`/`} ><span>#TECH.GEEKS</span></Link></h1>
            
      </div>
    
    </>
    
  );
}




export default Nav;