import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page';
import Title from '../components/Title';
import Icon01 from '../assets/img/weather.png';
import Icon02 from '../assets/img/subway.png';
import Icon03 from '../assets/img/trashcan.png';
import Icon04 from '../assets/img/restaurant.png';


const Home = () => {

     return(
        <Page 
          header={<Title>이모저모 EZPZ</Title>}
          backColor
          >
          <div className="main">
              <span>이모저모 ezpz <em>생활속의 꿀팁_ 서울</em></span>
              <ul>
                 <li><Link to="/weather"><img src={Icon01} alt="weather1" />날씨<p>weather</p></Link></li>
                 <li><Link to="/subway"><img src={Icon02} alt="transport" />지하철<p>transport</p></Link></li>
                 <li><Link to="/recycling"><img src={Icon03}  alt="trashcan" />분리수거<p>recycling</p></Link></li>
                 <li><Link to="/restaurant"><img src={Icon04}  alt="restaurant" />음식점<p>restaurant</p></Link></li>
              </ul>
          </div>
          </Page>
     )
}

export default Home;