import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';
import Logo from '../../assets/icons/face_mask-1.png';

const Landing = (props) => {

  const getLevelClass = (level) => {
    if (level === 0) {
      return 'outdoor'
    } else if (level === 1) {
      return 'beCareful'
    } else {
      return 'indoor'
    }
  }

  return (
    <section className={`landing ${getLevelClass(props.level)}`}>
      <header className="landing__header">
        <img
          className="landing__icon"
          src={Logo}
          alt="icono de la web chica con mascarilla"
        ></img>

        <p className="landing__p">FUNDEMIC</p>

        <Link to="/App" className="landing__btn">
          ¿Te atreves a aceptar el reto?
        </Link>
      </header>
    </section>
  );
};

export default Landing;
