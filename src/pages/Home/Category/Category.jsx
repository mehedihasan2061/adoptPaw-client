import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useCard from "../../../hooks/useCard";
import { FaCat, FaDog, FaHorse } from "react-icons/fa";
import { GiRabbit, GiSittingDog } from "react-icons/gi";
import { IoFish } from "react-icons/io5";
import { useState } from "react";
import CardItem from "../CardItem/CardItem";

const Category = () => {
    const [tabIndex, setTabIndex] = useState(0);
  const [pets] = useCard();
  console.log(pets);
  const cats = pets.filter((pet) => pet.category === "cat");
  const dogs = pets.filter((pet) => pet.category === "dog");
  const rabbits = pets.filter((pet) => pet.category === "rabbit");
  const fish = pets.filter((pet) => pet.category === "fish");
  const horse = pets.filter((pet) => pet.category === "Horse");
  console.log("cats", cats, "dogs", dogs, "rabbits", rabbits);
  return (
    <div>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="flex justify-center my-16 font-bold">
          <TabList>
            <Tab>
              <FaCat className="text-2xl"></FaCat> Cat
            </Tab>
            <Tab>
              <FaDog className="text-2xl"></FaDog> Dog{" "}
            </Tab>
            <Tab>
              <GiRabbit className="text-2xl"></GiRabbit> Rabbit
            </Tab>

            <Tab>
              <IoFish className="text-2xl"></IoFish> Fish
            </Tab>
            <Tab>
              <FaHorse className="text-2xl"></FaHorse> Horse
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <CardItem items={cats}></CardItem>
        </TabPanel>
        <TabPanel>
          <CardItem items={dogs}></CardItem>
        </TabPanel>
        <TabPanel>
          <CardItem items={rabbits}></CardItem>
        </TabPanel>
        <TabPanel>
          <CardItem items={fish}></CardItem>
        </TabPanel>
        <TabPanel>
          <CardItem items={horse}></CardItem>
        </TabPanel>
        {/* <TabPanel>
          <OrderCard items={drinks}></OrderCard>
        </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default Category;
