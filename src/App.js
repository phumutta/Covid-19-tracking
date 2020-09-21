 import React from 'react'
// import Cards from'./components/Cards/Cards';
// import Chart from'./components/Chart/Chart';
// import CountryPicker from'./components/CountryPicker/CountryPicker';
import {Cards,Chart,CountryPicker} from './components';
import style from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png'
class App extends React.Component{
    state={
        data:{},
        country:'',

    }
    handleCountryChange =async (country)=>{
        const fetchdata=await fetchData(country);
        this.setState({data:fetchdata,country:country});
        //fetch data 
         
        // set the state
    }
    async componentDidMount (){
        const fetchdata=await fetchData();
        this.setState({data:fetchdata});
        // console.log (data);
    }

     render(){
        const {data,country}=this.state;
        return(
            <div className ={style.container}>
                <img className={style.images} src={coronaImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
     }
 }
 export default App;