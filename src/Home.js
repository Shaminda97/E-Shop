import React from 'react'
import "./style/Home.css";
import Product from "./Product";
import homeImage from './images/home1.jpg'
import radiator from './images/radiator.jpg'
import oil from './images/oilcan.png'
import jumpStarter from './images/jumpStarter.png'
import rim from './images/rim.jpg'
import filter from './images/filter.jpg'
import Turbo from './images/Turbo.jpg'
import gearbox from './images/gearbox.jpg'
import gearOil from './images/gearOil.jpg'
import timingBelt from './images/timingBelt.jpg'
import foglights from './images/foglights.jpg'


function Home() {
    return (
        <div className="home">
            <div className="home__container">
        <img
          className="home__image"
          src={homeImage}
          alt=""
        />

        <div className="home__row">

        <Product
            id="12321341"
            title="Radiator,CSF Triple-pass Aluminium-E46 M3"
            price={549.99}
            rating={5}
            image={radiator}
          />
          <Product
            id="14856"
            title="Red Line High Performance 10W60 Engine Oil-Gallon"
            price={51.95}
            rating={4}
            image={oil}
          />

        </div>

        <div className="home__row">

         <Product
            id="369987"
            title="Automotive jump-N-Carry JNC660 1700 peak amp 12V Jump starter"
            price={127.99}
            rating={3}
            image={jumpStarter}
          />
          <Product
            id="23445930"
            title="BimmerWorld TA16 18 x 10 Forged wheel set-E46 M3,E9x M3"
            price={2079.99}
            rating={5}
            image={rim}
          />
          <Product
            id="3254354345"
            title="OEM Bosh Oil filter kit M52/M54-E36 E39 E60 Z4"
            price={6.99}
            rating={4}
            image={filter}
          />
            
        </div>

         <div className="home__row">
          <Product
            id="90829332"
            title="Vargas Stage 1 Turbo Upgrade- F10 M5,F06/F13 M6"
            price={4076.00}
            rating={4}
            image={Turbo}
          />

          <Product
            id="753699"
            title="Gearbox Rebuild Kit for Nissan Patrol GQ TB42 & TD42"
            price={650.00}
            rating={4}
            image={gearbox}
          />
         </div>

         <div className="home__row">

         <Product
            id="951236"
            title="3 x Genuine Honda ATF DW-1 ATF Oil Automatic Transmission Fluid 0.946 Liter"
            price={54.99}
            rating={4}
            image={gearOil}
          />
          <Product
            id="7895"
            title="Belt & Pulley Kit for Ford Falcon AU 4.0L XR6"
            price={165.00}
            rating={3}
            image={timingBelt}
          />
          <Product
            id="123865"
            title="Pair 4 inch Work Lights Spot Flood LED Light Bar Reverse 4WD 12V 24V Spread"
            price={25.40}
            rating={4}
            image={foglights}
          />
            
        </div>
         

        
       </div>
            
        </div>
    )
}

export default Home
