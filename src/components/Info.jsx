import React from 'react';
import { Link } from 'react-router-dom';
import restaurant01 from '../assets/img/koreanFood.png';
import restaurant02 from '../assets/img/japaneseFood.png';
import restaurant03 from '../assets/img/chinseFood.png';
import restaurant04 from '../assets/img/americanFood.png';
import recycling01 from '../assets/img/cloths.png';
import recycling02 from '../assets/img/battery.png';

const Info = ({title , data}) =>{
  
    if(data == "restaurant"){
       return data.img = [ restaurant01,  restaurant02,  restaurant03,  restaurant04, ];
    }else if(data == "recycling"){
       return data.img = [ recycling01,  recycling02 ];
    }else{ };
    
     return(
        <>
          <div className="info">
              <p>{title}</p>
                <ul>
                {data.map((v, i) => (
                   <li key={'menu' + i}><Link to={v.href}><img src={`/assets/img/${v.img}`} alt={v.title} />{v.title}</Link></li>
                ))}
                </ul>
          </div>
        </>
     )
}

export default Info;