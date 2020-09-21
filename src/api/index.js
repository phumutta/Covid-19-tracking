import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData =async ()=>{
    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}} =await axios.get(url);
        
        return {confirmed,recovered,deaths,lastUpdate};
        // const modifiedData={
        //     confirmed:data.confirmed,
        //     recovered:data.recovered,
        //     deaths:data.deaths,
        //     lastUpdate:data.lastUpdate
        // }
        // return modifiedData;
    }
    catch(error){
    
    }
}

export const fetchDailyData =async ()=>{
    try{
        const {data} =await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData =data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate

        }))
        console.log(modifiedData)
        return modifiedData;
    }
    catch(error){

    }
}

export const fetchCountries =async ()=>{
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`);
        // console.log(respone)
        return countries.map((country)=>country.name);
    } catch (error) {
        console.log(error)
    }
}