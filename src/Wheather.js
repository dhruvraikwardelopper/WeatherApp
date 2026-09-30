async function getWeatherInfo(city) {
    const url = `${import.meta.env.VITE_API_URL_CITY}?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`;
    let response = await fetch(url);
    let text = await response.json();
    let data = await fetch(
        `${import.meta.env.VITE_WEATHER_URL}?lat=${text[0].lat}&lon=${text[0].lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
    );
    let data2 = await data.json();
    let result = {
        city:city,
        feels_like:data2.main.feels_like, 
        humidity:data2.main.humidity,
        pressure:data2.main.pressure,
        temp:data2.main.temp,
        temp_max:data2.main.temp_max,
        temp_min:data2.main.temp_min,
    }
    console.log(result)
    return result;
}




export { getWeatherInfo };