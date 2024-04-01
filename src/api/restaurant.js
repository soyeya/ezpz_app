
export let api_address;
export const restaurantApi = (value) => {

    const regex = / /gi;
    const values = value.replace(regex, '');

    const region = {

        sechogu : `https://api.odcloud.kr/api/3053840/v1/uddi:9cb85e53-3592-4a8d-9b07-eec77edbc8c2?page=1&perPage=100&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg/a5kTah/H5jvlu2lisGQ==`,
        jonrogu : `https://api.odcloud.kr/api/3054122/v1/uddi:d6b81a7b-a61a-4ab6-8a4b-aaaa1044670c?page=1&perPage=100&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg/a5kTah/H5jvlu2lisGQ==`,
        gangnam : `https://api.odcloud.kr/api/15075960/v1/uddi:7dc8ac2a-a726-41df-ae62-b50d34d8b02b?page=1&perPage=100&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
        gwangjingu : `https://api.odcloud.kr/api/15052407/v1/uddi:9657319e-ddf3-4e03-8181-85ecad2102ea?page=1&perPage=100&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
        jungnanggu : `https://api.odcloud.kr/api/15035759/v1/uddi:8f409b57-675f-4292-8e3d-bcf3679e09d9?page=1&perPage=100&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
        dongjakgu : `https://api.odcloud.kr/api/15035754/v1/uddi:6495ae0a-b4c6-4a64-8e1d-db3abe133d93?page=1&perPage=100&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
        yangcheongu : `https://api.odcloud.kr/api/15035771/v1/uddi:e64ef09f-5a5a-484a-ac24-83b7443e4e44?page=1&perPage=100&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,
        dongdaemungu : `https://api.odcloud.kr/api/15060721/v1/uddi:ad030334-d650-4bf2-908d-b4f33ee8ff24?page=1&perPage=100&serviceKey=hCr1xoQTCWhxD5hktHYI1emeSSYCaKZ3qxnIiYFjeRuvMwOPeCmCQIq05U675nqtmg%2Fa5kTah%2FH5jvlu2lisGQ%3D%3D`,

    }


     if(values == "서초" || values == "서초구") return api_address = region.sechogu;
     if(values == "종로" || values == "종로구") return api_address = region.jonrogu;
     if(values == "강남" || values == "강남구") return api_address = region.gangnam;
     if(values == "광진" || values == "광진구") return api_address = region.gwangjingu;
     if(values == "중랑" || values == "중랑구") return api_address = region.jungnanggu;
     if(values == "동작" || values == "동작구") return api_address = region.dongjakgu;
     if(values == "양천" || values == "양천구") return api_address = region.yangcheongu;
     if(values == "동대문" || values == "동대문구") return api_address = region.dongdaemungu;
     else return api_address = '';
     
     
}