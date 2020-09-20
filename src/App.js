 import React from 'react'
// import Cards from'./components/Cards/Cards';
// import Chart from'./components/Chart/Chart';
// import CountryPicker from'./components/CountryPicker/CountryPicker';
import {Cards,Chart,CountryPicker} from './components';
import style from './App.module.css';
import {fetchData} from './api';
class App extends React.Component{
    state={
        data:{},

    }
    async componentDidMount (){
        const fetchdata=await fetchData();
        this.setState({data:fetchdata});
        // console.log (data);
    }

     render(){
        const {data}=this.state;
        return(
            <div className ={style.container}>
                <Cards data={data}/>
                <CountryPicker/>
                <Chart/>
            </div>
        )
     }
 }
 export default App;