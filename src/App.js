import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";


const App = () => {
    //estados de mi funcion
  const [query, setQuery] = useState(""); // estados de nuestra aplicacion consulta query
  const [weather, setWeater] = useState({}); // estado del clima se consulta el clima
   // fin de estadois de mi funcion 
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      console.log(data);

      setWeater(data);
      setQuery("");
    }
  };

  // funcion para que nos de la fecha

  const dataFecha = (d) => {
      let meses = ['Enero','Febrero','Marzo','Abriel','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',]
      let dias = ['Lunes','Marter','Miercoles','Jueves','Viernes','Sabado','Domingo']

      let dia = dias[d.getDay()];
      let date = d.getDate();
      let mes = meses[d.getMonth()];
      let anio = d.getFullYear();

      return `${dia} ${date} ${mes} ${anio}`
  }

  // creamos una funcion para la fecha la que nos da el dia mes y anio , luego colocamos la informacion de la funsion en un div 

  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 18)? "cabeza-contenedora":"cabeza-contenedora-3"):'cabeza-contenedora-2'}>
      <input
        type="text"
        className="buscador"
        placeholder="Pais, Ciudad, Localidad"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      <div className="fecha-actual">{dataFecha(new Date())}</div>

      {weather.main && (
        <div className={((weather.main.humidity > 80)? "ciudad":"ciudad-2")}>
            
          <h2 className="ciudad-nombre">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
        

          <div className="ciudad-humedad">
              <h5>HUMEDAD:</h5>
              <span>{weather.main.humidity}%</span>
          </div>

          <div className="ciudad-temperatura">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="informacion">
            <img
              className="ciudad-icono"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
