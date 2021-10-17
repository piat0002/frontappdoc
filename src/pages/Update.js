import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  useParams
} from "react-router-dom";
//compenent
import Navabar from '../components/Navbar'
const Update = () => {
  const [match,setmatch] = useState(useRouteMatch());
  const [idm,setid] = useState(useParams());
  return (
    <>
    <Navabar id={idm.id}>
    </Navabar>
    {/**todo fetch put
     * 
     * exemple curl
     * curl --location --request PUT 'http://localhost:3000/api/user/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "nom": "lol",
    "prenom": "mario"
}'
     * 
    */}
    modifier {idm.id}
    </>
  );
}
export default Update;
