 import seriesData from "../api/seriesData.json";


 const Serise = () => {
    return (
      <ul>
        {seriesData.map((curEle) => (
          <li key={curEle.id}>
            <div>
              <img
                alt={curEle.name}
                style={{ width: "300px", height: "auto" }}
                src={curEle.img_url}
              />
              <h1>Name: {curEle.name}</h1>
              <h2>Rating: {curEle.rating}</h2>
              <p>Description: {curEle.description}</p>
              <p>Genre: {curEle.genre.join(", ")}</p>
              <p>Cast: {curEle.cast.join(", ")}</p>
              <a href={curEle.watch_url} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    );
  }
    
    export default Serise