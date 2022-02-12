import axios from 'axios'; // utilizamos axios para hacer las peticiones 

const URL = 'https://api.openweathermap.org/data/2.5/weather'; // pagina para optener la informacion 
const API_KEY = 'f796d60cbd5a46481e3031ccf8c2c129'; // llave para poder usar la api de la pagina ahi que estar registrado
// api_key es mi llave para usar las funciones de la api

// utilizamos los metodos async , await ya que son funciones de consulta a base de datos

// esta funcion es creada para interactuar con los datos de mi servidor que es este caso seria weathermap
export const fetchWeather = async (query) => {

    // guardo en una constante llamada data toda la informacion solciitada a la pagina en este caso 'https://api.openweathermap.org/data/2.5/weather' 

    const { data } = await axios.get(URL, { 
        // axios.get es la peticion que le voy a hacer a la pagina que se encuentra gaurdada en la Variuable URL
        // despues paso unos aprematros a solcitar query, metric appiid nos permite ahcer las solicitudes ya que es una api que nos pide un usuario registrado
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data; //despues de realizar la consulta de retornamos la data que fue la que almacenamos nuestra consulta
}