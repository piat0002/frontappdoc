import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {Form,Button,FloatingLabel} from "react-bootstrap";
//compenent
import Navabar from '../components/Navbar'
const Update = () => {
  const [match,setmatch] = useState(useRouteMatch());
  const [idm,setid] = useState(useParams());

  const fetchupdate = (e)=>{
        fetch('http://localhost:3000/api/user/'+idm.id,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({"prenom": e.target[1].value,
                                    'nom': e.target[0].value,
                                    'tarif': e.target[2].value})
        })
            .then(response=>{
                console.log(response)
                document.location.href='/description/'+idm.id})
  }
  const  submit = (e) => {
    e.preventDefault();
    fetchupdate(e)
  }
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
    <h1> Modifier</h1>
    {/* modifier {idm.id} */}
    <Form onSubmit={(e)=>{submit(e)}}>
            <Form.Group className="mb-3" controlId="nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="Nom" placeholder="Enter Nom" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="prenom">
                <Form.Label>prenom</Form.Label>
                <Form.Control type="prenom" placeholder="Enter prenom" />
            </Form.Group>
            <FloatingLabel controlId="tarif" label="Tarif" className="mb-3">
                <Form.Control as="textarea" placeholder="tarif" />
            </FloatingLabel>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    </>
  );
}
export default Update;
