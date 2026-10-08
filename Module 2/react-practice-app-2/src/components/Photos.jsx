import React, { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

//   const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setIsLoading(false);
      });
  }, []);

  console.log(photos, isLoading);

//   if(isLoading){
//     return <div class="loader"></div>
//   }

  return (
    <div className="photos">
      <h2>Photos: </h2>

      {/* <button onClick={() => setCounter(counter+1)}>click here</button>
      <h2>{counter}</h2> */}

      {isLoading ? <div class="loader"></div> : <div className="photo-parent">
        {photos.map((photo, index) => {
          return (
            <div className="photo-child" key={index}>
              <img src={photo.url} alt={photo.title} />
              <h3>{photo.title}</h3>
            </div>
          );
        })}
      </div>}
    </div>
  );
};

export default Photos;
