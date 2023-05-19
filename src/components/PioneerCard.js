import { Link } from 'react-router-dom';
import axios from 'axios'
import {useState, useEffect} from 'react'
import '../components/PioneerCard.css'
import Nav from './Nav'

function Tech({}) {
  
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://helpful-jade-baseball-cap.cyclic.app/pioneer')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <>
        <Nav/>
        {data.map( d =>{
          return <>
          <div key={d.id} id = "display" className="card">
               <img src={d.img} alt="Pioneer-img"/>
              <div className= "text">
                <h1>{d.name}</h1>
                <h3>{d.designation}</h3>
                <p>{d.sdesc}</p>
              </div>
              <Link to={`/pioneer/${d.name}`}>
              <button className ="button-17" role="button">Read more</button>
              </Link>
           
         </div>
                </>
         
        }) }
           
    </>
    
  );
}

export default Tech;