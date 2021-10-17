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
  return (
    <>
    <Navabar id={idm.id}>
    </Navabar>
    {/**todo description fetch get
     * 
     * exemple curl
    */}
    description {idm.id}
    </>
  );
}
export default Medecin;




