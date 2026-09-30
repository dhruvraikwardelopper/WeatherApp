import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css"
import Button from '@mui/material/Button';
import {  getWeatherInfo } from './Wheather';
import { useState } from 'react';

export default function SearchBox({updateData}) {
   

    let [city, setCity] = useState("");
    let handleChange = (event) => {
        setCity(event.target.value)
    }
    let handleSubmit = async(event) => {
        event.preventDefault();
        console.log(city)
        setCity("");
        let result = await getWeatherInfo(city)
       updateData(result);
    }
    return (
        <>
            <div className='SeachBox'>
                <form onSubmit={handleSubmit}>
                <h2>Search for the Weather</h2>
                <TextField
                    id="city"
                    label="City Name"
                    variant="filled"
                    onChange={handleChange}
                    value={city}
                    required
                />
                <br></br>
                <br></br>
                <Button variant="contained" type='submit' startIcon={<SearchIcon />}>
                    Search
                </Button>
            </form>
            </div>
        </>
    )
}