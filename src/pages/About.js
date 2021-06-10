import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../App.css";

const About = () => {
  return (
    <>
      <div className="welcometxt">
        <h1>Hi, we hope you have enjoyed our page!</h1>

        <p>
          We (Laura, Akseli, Emilia and Salla) are group of class mates in
          Helsinki Business College and in one year we will be full stack web
          developers. Idea for this web platform came from the real life: Whole
          world has been sitting in home the past year, and so have we in
          Finland also done. Some of us have been trying to pick up new hobbies,
          or refreshen old skills. We started to think that all of us know
          someone who is making awesome handcrafts. Some artisans hoping to
          support themselves with their products, some are doing them just for
          fun. No matter what the reason is, all of the handcrafts are made with
          love. You can be sure you'll receive an unique product each time you
          support a artisan by ordering through our page.
        </p>
        <p>
          This platform is also our summer project for school. We have used
          React.js and for visual side we used React Bootstrap framework and own
          styling with CSS. Backend is build with PHP and Symfony and hosted at
          Heroku.com.
        </p>
        <p>
          Next phase for this platform is putting our artisans behind
          registeration, so that only correct person has access for modifying
          and adding or deleting products. Also we will build actual shopping
          cart.{" "}
        </p>
        <p>
          <div className="bold">
            Until then, if you find some handcraft you fell in love and want to
            purchase it, feel free to contact us with below contact form so we
            will connect you with the artisan.{" "}
          </div>
        </p>
      </div>

      <div>
        <Form
          method="POST"
          action="//public.bc.fi/s2100140/form/contact.php"
          className="form"
          id="form"
        >
          <Form.Group>
            <Form.Label htmlFor="">Your email:</Form.Label>
            <Form.Control
              type="email"
              width="10px"
              name="email"
              id="email"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="">Subject:</Form.Label>
            <Form.Control
              width="10px"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="">Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              type="text"
              name="message"
              id="message"
              required
            />
            <Button type="submit" className="addbtn" value="Send data">
              Send mail
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default About;
