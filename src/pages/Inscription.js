import React, { useState } from "react";
import {Form,Button,FloatingLabel} from "react-bootstrap";
//compenent

const Inscription = () => {
    const  submit = (e) => {
        e.preventDefault();
        //todo faire le fetch post
        /**
         * exemple de curl
         * curl --location --request POST 'http://localhost:3000/api/user' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "nom": "Lolo",
            "prenom": "Jojo",
            "photo": "chemin/photo",
            "tarif": "10€",
            "modalite": "modalite?",
            "modePaiement": "carte bleu",
            "horaire": "24h",
            "formation": "université paris",
            "langue": "francais et chinois"
        }'
        // faire une redirection
         */

        fetch('http://localhost:3000/api/user', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({nom: e.target[0].value,
                     prenom: e.target[1].value,
                     photo:'chemin',
                     tarif: e.target[3].value,
                     modalite: e.target[4].value,
                     modePaiement: e.target[5].value,
                     horaire: e.target[6].value,
                     formation: e.target[7].value,
                     langue: e.target[8].value})
            })
            .then(response=>{return response.json()})
            .then(json=>{document.location.href='/description/'+json.id})
        console.log('lol');
        console.log(e);
    }

  return (
    <>
        <h1>inscription</h1>
        <Form onSubmit={(e)=>{submit(e)}}>
            <Form.Group className="mb-3" controlId="nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="Nom" placeholder="Enter Nom" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="prenom">
                <Form.Label>prenom</Form.Label>
                <Form.Control type="prenom" placeholder="Enter prenom" />
            </Form.Group>
            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" size="lg" />
            </Form.Group>
            <FloatingLabel controlId="tarif" label="Tarif" className="mb-3">
                <Form.Control as="textarea" placeholder="tarif" />
            </FloatingLabel>
            <FloatingLabel controlId="modalite" label="Modalite">
                <Form.Control
                as="textarea"
                placeholder="Modalite de paiment"
                style={{ height: '100px' }}
                />
            </FloatingLabel>
            <FloatingLabel controlId="modePaiement" label="mode de paiement">
                <Form.Control
                as="textarea"
                placeholder="mode de paiement"
                style={{ height: '100px' }}
                />
            </FloatingLabel>
            <FloatingLabel controlId="horaire" label="Horaire" className="mb-3">
                <Form.Control as="textarea" placeholder="tarif" />
            </FloatingLabel>
            <FloatingLabel controlId="formation" label="Formation">
                <Form.Control
                as="textarea"
                placeholder="Formation"
                style={{ height: '100px' }}
                />
            </FloatingLabel>
            <FloatingLabel controlId="langue" label="Langue Parler" className="mb-3">
                <Form.Control as="textarea" placeholder="Langue parler" />
            </FloatingLabel>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    </>
  );
}
export default Inscription;
