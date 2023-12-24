import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from "@emailjs/browser"
import "./Footer.css";

const Footer = () => {
    function sendFeedback (serviceId, templateId, variables) {
        emailjs.send(serviceId, templateId, variables, "3CeQZNdcd04dvzKrS")
            .then(answer => {
                alert("Merci, votre demande sera traitée au plus vite ! ;-)");
            })
            .catch(error => {
                alert("Erreur lors de l'envoi du formulaire :-(");
            })
    }

    function onMySubmit() {        
        let name = document.getElementById("nom").value;
        let email = document.getElementById("email").value;

        if (name === null || email === null)
        {
            alert("L'un des deux champs du formulaire est incomplet. Veuillez compléter.")
        }
        else
        {
            const button = document.getElementById("newsletterButton");
            button.innerHTML = "Patientez..."

            const templateId = "template_w2k0vcr";
            const serviceId = "service_aiwzfqd";

            sendFeedback(serviceId, templateId, {
                name: name,
                email: email
            });

            button.innerHTML = "OK !"
        }        
    }

    return (
        <div className = "Footer">
            <div className = 'FooterText'>
                Vous souhaitez vous inscrire à la newsletter ? <br/>Veuillez remplir le formulaire ci-dessous.
            </div>
            <div className = 'FooterForm'>
                <Form>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Votre adresse mail</Form.Label>
                                    <Form.Control type="email" placeholder="Votre email" id='email'/>
                                    <Form.Text className="text-muted">
                                        Votre adresse mail ne sera pas divulgée.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Votre nom (permettra l'acceptation de la demande)</Form.Label>
                                    <Form.Control type="text" placeholder="Votre nom" id='nom'/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" type="button" id="newsletterButton" onClick={(event) => onMySubmit(event)}>
                                    Envoyer
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>
        </div>
        
    );
};

export default Footer;