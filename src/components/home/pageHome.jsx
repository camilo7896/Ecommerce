import React from "react";
import Styles from "./wineStyle.module.css";
import Icon from "../Icon";
import Wines from "../../pages/Wines";
import { faWineGlass, faBeerMugEmpty, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "../contact/Contact";
import Beer from "../beer/Beer";
import Corousel from '../carousel/Carousel'
import Whatsapp from "../redesBtns/Whatsapp";

export default function pageHome() {
  return (
    <div className={Styles.container}>
      <div className="flex justify-center p-5">
        <Contact />
      </div>
      {/* card del producto Promoción */}
      <div className={Styles.subContainer}>

        <h2 className="font-bold">Banco Magdalena</h2>
        <div className={Styles.containerProduct}>
          <div className={Styles.containerImg}>
            <img
              src="https://i.ibb.co/9pNxJv7/banner-Gorra.jpg"
              alt=" wine"
            />
          </div>
          <div className={Styles.containerText}>
          <Icon css={"icon"} icon={faPhone} />{" "}
            <h2 className="font-semibold">315 6882897</h2>
            <span></span>
            <small>Banco Magdalena</small>
            <Whatsapp/>
          </div>
        </div>
      </div>
      {/* Botones de categorias */}
      <div className={Styles.containerBtns}>
        <div className={Styles.btnCategories}>

          <Link to={"wine"}>
            <button>
              <small>Ver Productos</small>
            </button>
          </Link>
         
        </div>
      </div>
      

      <Routes>
        <Route path="wine" element={<Wines />} />
        <Route path="beer" element={<Beer />} />
      </Routes>
    </div>
  );
}
