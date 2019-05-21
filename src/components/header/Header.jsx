import React from 'react';
import bonsai from './../../assets/bonsai.jpg';
import seedoflife from './../../assets/seedoflife.gif';



function Header() {
  return(

    <header className="headerContainer">

      <style jsx>{`
          .tall {

            padding-left: 25px;
            font-size: 25px;
            letter-spacing: -2.37;
            color:white;
            position: absolute;
            top: 8px;
            left: 16px;
          }
          .daisy {
            padding-left: 50px;
            font-size: 25px;
            position: absolute;
            top: 4%;
            z-index: 10;
            letter-spacing: 27.23;
            color: white;
          }
          .seedOfLife {
            padding-left: 55px;
            color:white;
            position: absolute;
            top: 30px;
            left: 50px;
            height: 5vh;
            width:5vw;
            max-width:5vh;
          }
          .site-nav {
            display: inline-block;
              float: right;
              position: absolute;
              top: 8px;
              right: 16px;
              color:white;
          }

      `}</style>

    <section className="logo">
        <img style={{ height: '100vh', width: '100vw', objectFit: 'cover', position:'relative',}} src={bonsai}/>
        <div className="logo">
          <img className="seedOfLife"src={seedoflife}/>
          <p className="tall">Tall</p>
          <p className="daisy">Daisy</p>
        </div>
      </section>

      <section className="site-nav">
        <ul>
          PRODUCTS
          SERVICES
          ABOUT US
        </ul>
      </section>

    </header>
  )
}



export default Header;
