const axios = require('axios');

const subWayLine = async(value) => {
    const values = Object.keys(value);
    const serviceKey = `72544f5151636a6435355671537a78`;
    let subwayLine_api = {

                line01 : `1%ED%98%B8%EC%84%A0`,
                line02 : `2%ED%98%B8%EC%84%A0`,
                line03 : `3%ED%98%B8%EC%84%A0`,
                line04 : `4%ED%98%B8%EC%84%A0`,
                line05 : `5%ED%98%B8%EC%84%A0`,
                line06 : `6%ED%98%B8%EC%84%A0`,
                line07 : `7%ED%98%B8%EC%84%A0`,
                line08 : `8%ED%98%B8%EC%84%A0`,
                line09 : `9%ED%98%B8%EC%84%A0`
           }

     if(values == "1호선"){
        const res = await axios.get(`http://swopenapi.seoul.go.kr/api/subway/${serviceKey}/json/realtimePosition/0/5/${subwayLine_api.line01}`);
        const data = res.data;
        return data;
     }else if(values == "2호선"){
        const res = await axios.get(`http://swopenapi.seoul.go.kr/api/subway/${serviceKey}/json/realtimePosition/0/5/${subwayLine_api.line02}`);
        const data = res.data;
        return data;
     }else if(values == "3호선"){
        const res = await axios.get(`http://swopenapi.seoul.go.kr/api/subway/${serviceKey}/json/realtimePosition/0/5/${subwayLine_api.line03}`);
        const data = res.data;
        return data;
     }else if(values == "4호선"){
        const res = await axios.get(`http://swopenapi.seoul.go.kr/api/subway/${serviceKey}/json/realtimePosition/0/5/${subwayLine_api.ine04}`);
        const data = res.data;
        return data;
     }else if(values == "5호선"){
        const res = await axios.get(`http://swopenapi.seoul.go.kr/api/subway/${serviceKey}/json/realtimePosition/0/5/${subwayLine_api.line05}`);
        const data = res.data;
        return data;
     }else if(values == "6호선"){
        const res = await axios.get(`http://swopenapi.seoul.go.kr/api/subway/${serviceKey}/json/realtimePosition/0/5/${subwayLine_api.line06}`);
        const data = res.data;
        return data;
     }else if(values == "7호선"){
        const res = await axios.get(`http://swopenapi.seoul.go.kr/api/subway/${serviceKey}/json/realtimePosition/0/5/${subwayLine_api.line07}`);
        const data = res.data;
        return data;
     }else if(values == "8호선"){
        const res = await axios.get(`http://swopenapi.seoul.go.kr/api/subway/${serviceKey}/json/realtimePosition/0/5/${subwayLine_api.line08}`);
        const data = res.data;
        return data;
     }else if(values == "9호선"){
        const res = await axios.get(`http://swopenapi.seoul.go.kr/api/subway/${serviceKey}/json/realtimePosition/0/5/${subwayLine_api.line09}`);
        const data = res.data;
        return data;
     }else{
        return;
     }
  
} 



// export let BUSAPI = ``;

// export const bus_controller = async(values) => {
  
//      const value = values;
//      const servicekey = `4b79795070636a6437326e4c544946`;
//      BUSAPI = `http://openapi.seoul.go.kr:8088/${servicekey}/xml/citydata/1/5/${value}`
//      console.log(BUSAPI);
//     // const object = xml2json.fromStr(data);	
//     // console.log(object);
//     // const strjson = xml2json.fromStr(res.data, 'string');	// string 형식
//     // console.log(strjson);

// }

const database = {
    subWayLine   
}

module.exports = { database }
