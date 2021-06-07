import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <>
      <h1>Hi, we hope you have enjoyed our page!</h1>

      <p>
        We (Laura, Akseli, Emilia and Salla) are group of class mates in
        Helsinki Business College and in one year we will be full stack web
        developers. Idea for this web platform came from the real life: Whole
        world has been sitting in home the past year, and so have we in Finland
        also done. Some of us have been trying to pick up new hobbies, or
        refreshen old skills. We started to think that all of us know someone
        who is making awesome handcrafts. Some artisaans are self-learned
        artists of their own life, where as some of the artisaans are doing
        handcrafts for hoping to support themselves. No matter what the reason
        is, all of the handcrafts are made with love and we try to find "home"
        for them.
      </p>
      <p>
        This platform is also our summer project for school. We have used
        React.js and for visual side we used React Bootstrap framework and own
        styling with CSS. Backend is build with PHP and Symfony and hosted at
        Heroku.com.
      </p>
      <p>
        Next phase for this platform is putting our artisans behind
        registeration, so that only correct person has access for modifying and
        adding or deleting products. Also we will build actual shopping chart.
        Until then, if you find some handcraft you fell in love and want to
        purchase it, feel free to contact us with below conatact form so we will
        connect you with the artisan.{" "}
      </p>

      <div>
        <h2>Contact us or artisan:</h2>
        {/* <Form onSubmit={submitData} className="form"> */}
        <Form.Group>
          <Form.Label htmlFor="">Your name:</Form.Label>
          <Form.Control
            type="text"
            width="10px"
            name="nimi"
            required
            // onChange={changeData}
          />
        </Form.Group>
        {/* </Form> */}
        <Form.Group>
          <Form.Label htmlFor="">Subject:</Form.Label>
          <Form.Control
            width="10px"
            type="text"
            name="subject"
            required
            // onChange={changeData}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="">Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            type="text"
            name="kuvaus"
            required
            // onChange={changeData}
          />
          <Button type="submit" className="addbtn" value="Send data">
            Send mail
          </Button>
        </Form.Group>
      </div>
    </>
  );
};

export default About;
