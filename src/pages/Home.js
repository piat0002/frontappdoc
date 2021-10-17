import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";

import { Card,Form,Button} from "react-bootstrap";

const Home = () => {


    const submit = (e) =>{
      e.preventDefault();
      console.log(e.target[0].value)
      document.location.href='/description/'+e.target[0].value;
    }

    return (
      <div className="accueil">
        <center>
            <Card
              bg='black'
              key='0'
              text='light'
              style={{ width: '20rem', marginTop:'4rem' }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title>Connexion</Card.Title>
                <Card.Text>
                  <Form onSubmit={(e)=>{submit(e)}}>
                    <Form.Group className="mb-3" controlId="formHorizontalEmail">
                      <Form.Label>
                        Identifiant
                      </Form.Label>
                        <Form.Control type="id" placeholder="id" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      {/*todo faire un vrai systeme de session avec un mode passe*/}
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control placeholder="Indisponible mot de passe" disabled />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Connexion
                    </Button>
                  </Form>
                  <Link to="/inscription" style={{color: "blue"}}>inscription</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </center>
      </div>
    );
  }
  export default Home;