import React, { useState } from "react";
import {
    BrowserRouter as Router,
    useRouteMatch,
    useParams
  } from "react-router-dom";

//compenent
import Navabar from '../components/Navbar'
const Delete = () => {
    const [match,setmatch] = useState(useRouteMatch());
    const [idm,setid] = useState(useParams());

    const fetchdelete = ()=>{

        let resultat = window.confirm("etes vous sur d'effacer votre compte");
        console.log(resultat)
        if(resultat){
            fetch('http://localhost:3000/api/user/'+idm.id,{
                method: 'DELETE'
            }).then(
                response=>document.location.href='/'
            )
        }
    }
    React.useEffect(() => {
        fetchdelete();
      },[]);
  return (
    <>
        <Navabar id={idm.id}>
        </Navabar>
        supprimer {idm.id}
    </>
  );
}
export default Delete;
