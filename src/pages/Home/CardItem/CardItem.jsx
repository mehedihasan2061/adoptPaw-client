import Heading from "../../../shared/Heading/Heading";
import PetCard from "../PetCard/PetCard";


const CardItem = ({ items }) => {
  return (
    <>
      {items && items.length > 0 ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <PetCard key={item._id} item={item} ></PetCard>
          ))}
        </div>
      ) : (
        <Heading
          center={true}
          title="No Pets Available In This Category!"
          subtitle="Please Select Other Categories."
        />
      )}
    </>
  );
};

export default CardItem;