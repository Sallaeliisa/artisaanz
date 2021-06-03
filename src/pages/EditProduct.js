import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductsForAdmin from "../Components/ProductsForAdmin";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "../App.css";
import Products from "./Products";

const EditProduct = () => {
  const [data, setData] = useState({
    //kuva: [],
    nimi: "",
    kuvaus: "",
    hinta: "",
    artesaani: "",
  });
  const [tuotteet, setTuotteet] = useState();
  let { id } = useParams();
  const history = useHistory();
  console.log("product id: " + id);
  id = 4;
  console.log('hardcoded id to "Kokeilu", eli ' + id);

  useEffect(() => {
    if (!tuotteet) {
      axios
        .get("https://artisaanz.herokuapp.com/product/find/" + id)
        .then((res) => setTuotteet(res.data));
    }
  });
  let tuoteData = undefined;

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const editData = (e) => {
    e.preventDefault();
    console.log("Let's edit...");
    if (data.nimi !== "") {
      axios.post(
        "https://artisaanz.herokuapp.com/product/editnimi/" +
          id +
          "/" +
          data.nimi
      );
    }
    if (data.kuvaus !== "") {
      axios.post(
        "https://artisaanz.herokuapp.com/product/editkuvaus/" +
          id +
          "/" +
          data.kuvaus
      );
    }
    if (data.hinta !== "") {
      axios.post(
        "https://artisaanz.herokuapp.com/product/edithinta/" +
          id +
          "/" +
          data.hinta
      );
    }
    if (data.artesaani !== "") {
      axios.post(
        "https://artisaanz.herokuapp.com/product/editartesaani/" +
          id +
          "/" +
          data.artesaani
      );
    }
    console.log("Done!");
  };

  if (tuotteet) {
    tuoteData = (
      <div className="singleProduct">
        <Form onSubmit={editData} className="form">
          <Form.Group>
            <Form.Label htmlFor="">Tuotteen nimi:</Form.Label>
            <Form.Control
              type="text"
              width="10px"
              name="nimi"
              placeholder={tuotteet.nimi}
              onChange={changeData}
            />
          </Form.Group>
          <br></br>
          <select name="kategoria" required>
            <option value="noValue">Valitse Kategoria:</option>
            <option value="Pussukat">Pussukat</option>
            <option value="Laukut">Laukut</option>
            <option value="Leivonnaiset">Leivonnaiset</option>
            <option value="Villasukat">Villasukat</option>
            <option value="Korut">Korut</option>
            <option value="Sisustus">Sisustus</option>
          </select>
          <div>
            <h1> </h1>
          </div>
          <Form.Group>
            <Form.Label htmlFor="">Tuotteen kuvaus:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="kuvaus"
              placeholder={tuotteet.kuvaus}
            />
          </Form.Group>
          {/* {kuvat.map((_, i) => {
        return (
          <Form.Group>
            <Row>
              <Col>
                <Form.Label htmlFor="">Kuvat:</Form.Label>
                <Form.Control
                  type="text"
                  name="kuva"
                  //onChange={(e) => changeKuvaData(e, i)}
                />
              </Col>
            </Row>
          </Form.Group>
        );
      })} */}
          <Button
            className="addbtn"
            //onClick={addMore}
          >
            Lisää kuva
          </Button>
          <div>
            <h1> </h1>
          </div>
          <Form.Group>
            <Form.Label htmlFor="">Hinta:</Form.Label>
            <Form.Control
              type="number"
              name="hinta"
              placeholder={tuotteet.hinta}
              //onChange={changeData}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="">
              Artesaani (no tämähän on turha kun olet kirjautuneena):
            </Form.Label>
            <Form.Control
              type="text"
              placeholder={tuotteet.artesaani}
              name="artesaani"
              //onChange={changeData}
            />
          </Form.Group>
          <button type="submit" className="addbtn" value="Send data">
            Päivitä tuote
          </button>
          <button className="backbtn" onClick={() => history.goBack()}>
            Takaisin
          </button>
        </Form>
      </div>
    );
  }

  return <Container>{tuoteData}</Container>;

  // const [showPopup, setShowPopup] = useState(false);
  // const [popupImg, setPopupImg] = useState();
  // const [tuotteet, setTuotteet] = useState();
  // let { id } = useParams();
  // const history = useHistory();
  // const [data, setData] = useState({
  //   kuva: [],
  //   nimi: "",
  //   kuvaus: "",
  //   hinta: "",
  //   artesaani: "",
  // });
  // useEffect(() => {
  //   if (!tuotteet) {
  //     axios
  //       .get("https://artisaanz.herokuapp.com/product/find/" + id)
  //       .then((res) => setTuotteet(res.data));
  //   }
  // });
  // let tuoteData = undefined;
  // const Popup = () => {
  //   return (
  //     <div className="popup">
  //       <button onClick={close}>Sulje</button>
  //       <img src={popupImg} alt="iso tuotekuva" />
  //     </div>
  //   );
  // };
  // const popupHandler = () => {
  //   setShowPopup(true);
  // };
  // const close = () => {
  //   setShowPopup(false);
  // };
  // if (tuotteet) {
  //   tuoteData = (
  //     <div className="singleProduct">
  //       <div className="mainImage">
  //         {tuotteet.kuva
  //           .filter((item) => item.id === 1)
  //           .map((item) => {
  //             return (
  //               <button
  //                 onClick={() => {
  //                   setPopupImg(item.kuva);
  //                   popupHandler();
  //                 }}
  //               >
  //                 <img src={item.kuva} alt="tuotteen kuva" key={item.id} />
  //               </button>
  //             );
  //           })}
  //       </div>
  //       {tuotteet.kuva
  //         .filter((item) => item.id > 1)
  //         .map((item) => {
  //           return (
  //             <ul key={item.id}>
  //               <button
  //                 onClick={() => {
  //                   setPopupImg(item.kuva);
  //                   popupHandler();
  //                 }}
  //               >
  //                 <img src={item.kuva} alt="tuotteen kuva" key={item.id} />
  //               </button>
  //             </ul>
  //           );
  //         })}
  //       <h1>{tuotteet.nimi}</h1>
  //       <p>{tuotteet.kuvaus}</p>
  //       <p>Artesaani: {tuotteet.artesaani}</p>
  //       <p>Hinta: {tuotteet.hinta} €</p>
  //       <p>Kategoria: {tuotteet.kategoria}</p>
  //       <button className="backbtn" onClick={() => history.goBack()}>
  //         Takaisin
  //       </button>
  //     </div>
  //   );
  // }
  // const [kuvat, setKuvat] = useState([{ id: 1 }]);
  // const changeKuvaData = (e, i) => {
  //   const { name, value } = e.target;
  //   const list = [...kuvat];
  //   list[i][name] = value;
  //   setKuvat(list);
  //   setData({ ...data, kuva: kuvat });
  // };
  // const addMore = (e, i) => {
  //   e.preventDefault();
  //   const newKuva = { id: kuvat.length + 1 };
  //   setKuvat((prevState) => [...prevState, newKuva]);
  // };
  // const submitData = (e) => {
  //   e.preventDefault();
  //   axios.post("https://artisaanz.herokuapp.com/product/add", data);
  //   e.target.reset();
  // };
  // return (
  //   <>
  //     {showPopup && <Popup />}
  //     {tuoteData}
  //     <ProductsForAdmin />
  //     <main>

  //     </main>
  //   </>
  // );
};

export default EditProduct;
