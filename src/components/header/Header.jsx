import React from 'react';
import bonsai from './../../assets/bonsai.jpg';
import Hero from './Hero';

function Header() {
  return(
    <header className="headerContainer">

      <style jsx>{`

      `}</style>

      <section className="section">
        <div className="logo">
          <img  src={bonsai}/>
          <p className="Tall">Tall</p>
          <p className="Daisy">Daisy</p>
        </div>
      </section>

      <section>
        <ul>
          <li>PRODUCTS</li>
          <li>SERVICES</li>
          <li>ABOUT US</li>
        </ul>
      </section>

    </header>
  )
}



export default Header;
