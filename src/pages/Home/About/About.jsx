import { Link } from "react-router-dom";


const About = () => {
    return (
      <div>
        <h1 className="text-center text-4xl font-bold my-8">About us</h1>
        <p>
          "Welcome to AdoptPaw, a platform created to help pets find
          loving homes. Our mission is simple: to connect pets in need with
          caring people who are ready to give them a second chance. We make it
          easy for you to browse through pets available for adoption, learn
          about their unique personalities, and take the steps to bring them
          home. Whether you're looking to adopt a new family member or donate to
          support pets in need, AdoptPaw is here to make the process
          simple, transparent, and rewarding. Join us in making a difference in
          the lives of pets and giving them the love they deserve." <Link className="text-blue-500 underline">Read More...</Link>
        </p>
      </div>
    );
};

export default About;