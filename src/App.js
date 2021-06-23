import React, {useEffect,useState} from 'react';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './Components';
import {fetchData} from './API';
import coronaImage from './img/image.png';


const App=()=>{

    const [value, setvalue] = useState({});
    const [country, setCountry] = useState("");

    useEffect( () => {
        const fetchAPI = async()=>{
            const fetchedData = await fetchData();
            setvalue(fetchedData);
        } 
        fetchAPI();
    }, [])

    const handleCountryChange = async (country)=>{
        const fetchedData = await fetchData(country);
        setvalue(fetchedData);
        setCountry(country);
        // fetch the data
    }

    return (
        <>
            <div className={styles.container}> 
            <img className={styles.image} src={coronaImage} alt="covid19"/>
                <Cards data = {value}/>
                <CountryPicker handleCountryChange={handleCountryChange}/>
                <Chart data={value} country={country} />
            </div>
        </>
    )
}

export default App;
