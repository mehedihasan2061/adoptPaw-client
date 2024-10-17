import { useParams } from "react-router-dom";
import AdoptItem from "../AdoptItem/AdoptItem";



const SinglePet = () => {
  const { id } = useParams()
  // console.log(id);
    return (
      <div className="container mx-auto">
        
        <div className="mt-20">
          <AdoptItem id={id}></AdoptItem>
        </div>
      </div>
    );
};

export default SinglePet;