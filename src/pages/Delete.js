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
  return (
    <>
        <Navabar id={idm.id}>
        </Navabar>
        supprimer {idm.id}
    </>
  );
}
export default Delete;
