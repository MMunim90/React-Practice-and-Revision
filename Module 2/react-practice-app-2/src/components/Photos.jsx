import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

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

  //   console.log(photos, isLoading);

  //   if(isLoading){
  //     return <div class="loader"></div>
  //   }

  return (
    <div className="photos">
      <h2>Photos: </h2>

      {/* <button onClick={() => setCounter(counter+1)}>click here</button>
      <h2>{counter}</h2> */}

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="photo-parent">
          {photos.map((photo, index) => {
            return (
              <PhotoCard photo={photo} key={index}/>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Photos;
