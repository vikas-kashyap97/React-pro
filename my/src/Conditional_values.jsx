import React from "react";

const Conditional_values = () => {
  return (
    <>
      <Serise />
      <Serise />
      <Serise />
    </>
  );
};

export default Conditional_values;

const Serise = () => {
  const Image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXp4GzdbKN_j3mNJ-wiwx5sfluFviB3H5UqA&s";
  const Name = "13 Reasons Why";
  const Rating = "7.5/10";
  const Description =
    "Thirteen Reasons Why by Jay Asher focuses on a group of high school students, whose actions lead to the suicide of Hannah Baker, a girl new to town and the focal point of the story. Before she kills herself, Hannah mails tapes to those who played a part in her decision.";

  const returnGenre = () => {
    const genre = "Drama, Mystery, Suspense, Tragedy, Teen, Thriller";
    return genre;
  };
  const age = 56;

    return (
      <>
        <div>
          <img
            alt="13 Reasons Why"
            style={{ width: "300px", height: "auto" }}
            src={Image}
          />
          <h1>Name: {Name}</h1>
          <h2>Rating: {Rating}</h2>
          <p>Description: {Description}</p>
          <p>Genre: {returnGenre()}</p>
          <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>
        </div>
      </>
    );
  }
