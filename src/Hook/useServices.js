import axios from "axios"
import { useEffect, useState } from "react"

const useServices=()=>{
   const [services, setServices] = useState([]);
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)

//    console.log(setServices)
    useEffect(()=>{
         axios('../appdata.json')
         .then(data=>setServices(data.data))
        .catch(error => setError(error))
        //  .finally(()=>setLoading(false))


    },[])
    return {services}

}
export default useServices