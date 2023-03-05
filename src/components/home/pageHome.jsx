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

        <h2 className={Styles.tilteCard}>Centro comercial Parque Solano</h2>
        <div className={Styles.containerProduct}>
          <div className={Styles.containerImg}>
            <img
              src="https://us.123rf.com/450wm/oleghz/oleghz1702/oleghz170200004/71233942-vino-tinto-en-copas-de-vino-y-botella-de-vino-sobre-un-fondo-negro-silueta-minimalismo-iluminaci%C3%B3n-d.jpg"
              alt=" wine"
            />
          </div>
          <div className={Styles.containerText}>
          <Icon css={"icon"} icon={faPhone} />{" "}
            <h3 className="font-semibold">3012051987</h3>
            <span></span>
            <small>Duitama-Boyacá</small>
            <Whatsapp/>
          </div>
        </div>
      </div>
      {/* Botones de categorias */}
      <div className={Styles.containerBtns}>
        <div className={Styles.btnCategories}>

          <Link to={"wine"}>
            <button>
              <Icon css={"icon"} icon={faWineGlass} />{" "}
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
