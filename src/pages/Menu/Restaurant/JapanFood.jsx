import React , { useState, useEffect } from 'react';
import axios from 'axios';
import Page from '../../../components/Page';
import Title from '../../../components/Title';
import Navi from '../../../components/Navi';
import Search from '../../Search';
import * as MyLayout from '../../../lib/Layout';
import { restaurantApi , api_address} from '../../../api/restaurant';


const JapaneseFood = () => {

     const [open , setOpen] = useState(false);
     const [address, setAddress] = useState(null);
     const [content, setContent ] = useState(null);
     const { startLoading, finishLoading } = MyLayout.useLoading();

     const new_api = (value) => {

        const keyword = value;
        restaurantApi(keyword);
        if(!address);
        setAddress(keyword);
        if(value == "") return setAddress(null), setContent(null), setOpen(false);

     }

     const handleClick = async() => {

         if(!address) return;
         startLoading('데이터 불러오는 중...');

         try{
            const res = await axios.get(api_address);
            const data = res.data.data;
         setOpen(true);
         setContent(data);


        }catch(e){
            console.log('japanseFood오류');
            finishLoading();
         }
         
         finishLoading();
     }

     useEffect(() => {
       
        handleClick();

     },[])

     return(
      <Page
       header={<Title backURL={'/restaurant'}>일식</Title>}
       footer={<Navi />}
       >
         <Search
          placeholder={'동네명을 입력해주세요'}
          onChange={(e) => new_api(e.target.value)}
          onClick={handleClick}
         >
             {!open && '검색결과가 없습니다'}
             {open &&
              <ul>
               {content && (content.filter((result) => (result['소재지(도로명)'] || result['소재지지번']) || (result['소재지(지번)']).includes(address)).map((result,i) => (
                  ((result.업태명 == "일식" || result.업태명 == "일본식")  || (result.업태 == "일식" || result.업태 == "일본식")) && (<li key={'restaurant' + i}>
                        <p>가게명 : <strong>{result.업소명}</strong></p>
                        <p>주소 : <strong>{result['소재지(도로명)'] || result['소재지지번'] || result['소재지(지번)']}</strong></p>
                        <p>구분 : <strong>{result.업태명 || result.업태}</strong></p>
                        </li>))
                )
                )
                }
                </ul> }
         

             </Search>
            

      </Page>
     )
}

export default JapaneseFood;