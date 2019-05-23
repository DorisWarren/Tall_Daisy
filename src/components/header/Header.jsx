import React from 'react';
import bonsai from './../../assets/bonsai.jpg';
import seedoflife from './../../assets/seedoflife.gif';
import downArrow from './../../assets/downArrow.png';


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
            top: .01%;
            left: 16px;
          }
          .daisy {
            padding-left: 70px;
            font-size: 25px;
            position: absolute;
            top: 2%;
            z-index: 10;
            letter-spacing: 27.23;
            color: white;
          }
          .seedOfLife {
            padding-left: 25px;
            color:white;
            position: absolute;
            top: 20px;
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
            color: white;
            font-family: "Montserrat","HelveticaNeue","Helvetica Neue",sans-serif;
            font-weight: 400;
            font-style: normal;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-size: 16px;
            justify-content: space-between;
            margin: 0px, 0px, 0px, 15px;
          }
          .carrot {
            position: relative;
            top: 2px;
            padding-left:5px;
            padding-right: 5px;
          }
          .products{
            color:white;
            text-decoration: none;
            justify-content:space-around;
            padding: 10px;
          }
          .green {
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-family: "Montserrat","HelveticaNeue","Helvetica Neue",sans-serif;
            font-size: 20px;
            letter-spacing: 1.8px;
          }
      `}</style>

    <section className="logo">
        <img style={{ height: '90vh', width: '100vw', objectFit: 'cover', position:'relative',}} src={bonsai}/>
        <div className="logo">
          <img className="seedOfLife"src={seedoflife}/>
          <p className="tall">Tall</p>
          <p className="daisy">Daisy</p>
        </div>
      </section>

      <section className="site-nav">

        <ul>
          <a className="products"href="#Products">PRODUCTS</a>
          <img className="carrot"src={downArrow}/>

          <a className="products"href="#Services">SERVICES</a>
          <img className="carrot"src={downArrow}/>

          <a className="products"href="#About Us">ABOUT US</a>
          <img className="carrot"src={downArrow}/>
        </ul>

      </section>

      <section>
        <div className="green">
          <p>A GREEN PRACTICE OF MINDFULNESS</p>
        </div>
      </section>

    </header>
  )
}



export default Header;
