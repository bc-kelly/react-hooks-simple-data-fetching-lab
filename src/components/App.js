// create your App component here
import React, { useState, useEffect } from "react";

function App () {
    const [onDogImage, setOnDogImage] = useState('');

    useEffect (() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(dogData => setOnDogImage(dogData.message));
    }, []);

    if (!onDogImage) {
        return <p>...Loading</p>;
    } 

    return (
        <img src={onDogImage} alt="A Random Dog" />
    )
}

export default App;