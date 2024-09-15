import { useEffect, useState } from "react";


const useCard = () => {
    const [pets,setPets]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/pets')
            .then(res => res.json())
        .then(data=>setPets(data))
    }, [])
    return [pets]
};

export default useCard;