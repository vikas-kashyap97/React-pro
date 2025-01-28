import React from "react";

const Five_components = () => {
  return (
    <>
    <Serise />
    <Serise />
    <Serise />
    </>
  );
};

const Serise = () => {
  return (
    <div>
      <img 
        src="https://www.fsunews.com/gcdn/presto/2023/01/15/PFSU/2821e7df-1732-4157-9904-72938c88bba0-alice_in_borderland.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp" 
        alt="Alice In Borderland" 
        style={{ width: "300px", height: "auto" }} 
      />
      <h2>Name: Alice In Borderland</h2>
      <h3>Rating: 9.7/10</h3>
      <p>
        Summary: Obsessed gamer Arisu suddenly finds himself in a strange, emptied-out
        version of Tokyo in which he and his friends must compete in dangerous
        games in order to survive.
      </p>
    </div>
  )
}


export default Five_components;


// You can remove that extra div (parent div) by importing React.Fragment or Fragment or <></> 