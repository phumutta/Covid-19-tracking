import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from'@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries}   from '../../api';
const CountryPicker =()=>{
    const [fetchedCountries,setFetchCountried]=useState([]);
    useEffect(()=>{
        const fetchAPI =async ()=>{
            setFetchCountried(await fetchCountries())
        }
        fetchAPI();
    },[setFetchCountried])

    console.log(fetchedCountries)
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
        )
}  

export default CountryPicker;