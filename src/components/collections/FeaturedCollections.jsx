import React from 'react';
import cacti from './../../assets/cacti.jpeg';
import lilbonsai from './../../assets/lilbonsai.jpg';
import figtree from './../../assets/figtree.jpeg';

function FeaturedCollections () {
  return(
    <main className="collectionsConatiner">

      <style jsx>{`
        .collection {
          display: block;
          font-family: "Old Standard TT",serif;
          font-weight: 400;
          margin: 0 0 0.5em;
          line-height: 1.4;
          text-rendering: optimizeLegibility;
          text-align: center;
          justify-content: center;
          top: 30px;
          margin: 50px;
      }
      .hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #ccc;
        margin: 1em 0;
        padding: 0;
      }
      .plant-selection{
        margin-left: 20px;
        margin-right: 20px;
      }


      `}</style>

      <header>
        <div>
            <h3 className="collection">FEATURED COLLECTION</h3>
        </div>
      </header>

      <section>
        <div className="plant-selection">
          <img style={{ height: '75vh', width: '30vw', position:'relative',}} className="selection"src={cacti}/>
          <img style={{ height: '75vh', width: '30vw', position:'relative',}} className="selection"src={lilbonsai}/>
          <img style={{ height: '75vh', width: '30vw', position:'relative',}} className="selection"src={figtree}/>
        </div>
      </section>




    </main>
  )
}

export default FeaturedCollections;
