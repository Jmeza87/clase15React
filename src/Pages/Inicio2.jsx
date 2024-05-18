import { useEffect, useState } from "react";
import Peliculas from "./Peliculas";

//APIS
const API='https://api.themoviedb.org/3/trending/movie/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE'

const Inicio2 = () => {

    const [datos, setDatos] = useState([]);
    const getDatos = async () => {
        try {
          const response = await fetch(API);
          const data = await response.json();
          console.log(data);
          setDatos(data.results);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        getDatos();
      }, []);

       const ruta = "https://image.tmdb.org/t/p/w500";

  return (
    <>
<div className="container">
    <div className="row">
    
        {datos && datos.map((item) => (
           
           <div className="col-md-6 col-lg-3 col-xl-2 mb-4">

            <div className="card h-100">

                <div className="card-header p-0">
                      <img src={ruta+item.poster_path} className="img-fluid" alt="" />

                </div>
                <div className="card-body text-center">

                    <p> {item.title}</p>
                    <p className="badge text-bg-warning">{item.vote_average}</p>

                </div>

                <div className="card-footer text-center">

                       <a href="" className="btn btn-danger btn-sm" >Detalle</a>

                </div>

                
              

            </div>

           </div>
            


        ))} 
        
         </div> 
            </div>
    
    </>
  )
}

export default Inicio2