import PetCard from "../PetCard/PetCard";


const CardItem = ({ items }) => {
    console.log(items);
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {
                items.map(item=> <PetCard key={item._id} item={item}></PetCard>)
           } 
        </div>
    );
};

export default CardItem;