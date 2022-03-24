import "./styles.css";

import logo from "assets/Img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div class="grupo-1">
        <div className="box imagen">
          <figure>
            <a href="#">
              <img src={logo} alt="Logo Icandy" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>Sobre nosotros</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            labore.
          </p>
        </div>
        <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          &copy; 2022 <b>Icandy</b> -Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
