import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  useParams
} from "react-router-dom";
//compenent
import Navabar from '../components/Navbar'
const Medecin = () => {
  const [match,setmatch] = useState(useRouteMatch());
  const [idm,setid] = useState(useParams());
  const [user,setuser] = useState({})
  const getdata = () =>
  {
    fetch("http://localhost:3000/api/user/"+idm.id)
      .then((response)=>{
        //console.log(response)
        return response.json()
      })
      .then(json=>{console.log(json)
        setuser(json)
      })
  }
  React.useEffect(() => {
    getdata();
  },[]);

  return (
    <>
    <Navabar id={idm.id}>
    </Navabar>
    {/**todo description fetch get
     * 
     * exemple curl
     * curl --location --request GET 'http://localhost:3000/api/user/1'
    */}
    {/* description {idm.id} */}
    <h1>
      bonjour { typeof user.nom === 'undefined' ? '' : user.nom} {typeof user.prenom === 'undefined' ? '' : user.prenom }
    </h1>
    <h2> {typeof user.id === 'undefined' ? '' : 'ton identifiant est: ' + user.id}</h2>
    <p>{typeof user.id === 'undefined' ? '' : 'tarif: ' + user.tarif}</p>
    <p>{typeof user.id === 'undefined' ? '' : 'horaire: ' + user.horaire}</p>
    <p>{typeof user.id === 'undefined' ? '' : 'formation: ' + user.formation}</p>

    <p> {typeof user.id === 'undefined' ? '' : 'langue: ' + user.langue}</p>
    </>
  );
}
export default Medecin;




