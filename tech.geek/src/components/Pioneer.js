import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import '../components/Pioneer.css'
import Nav from './Nav'

export default function Pioneer(){

    const [data, setData] = useState([])
    useEffect(() => {
    axios.get('https://helpful-jade-baseball-cap.cyclic.app/pioneer')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

    const { name } = useParams();     
    const profile = data.filter(profile => profile.name === name);

    console.log(profile);
    
  return (
    <>
         <Nav />
        {profile.map( d =>{
          return <>
         
          <div id = "info" className="card-info">
               <img className='image' src={d.aimg} alt="Pioneer-img"/>
              <div className= "textbox">
                <h1>{d.name}</h1>
                <h3>{d.designation}</h3>
                <p>{d.sdesc}</p>
                <h3>About me</h3>
                <p>{d.desc}</p>
              </div>
         </div>
                </>
         
        }) }
    </>
    
  );
}