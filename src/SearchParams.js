import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState('Dog');
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  // const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown,setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    // pet.breeds('dog').then(console.log, console.error);
    // updateBreeds([]);
    // updateBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal,setBreed,setBreeds]);


  return (
    <div className="search-params">
      <h1>Location:{location}</h1>
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown/>
        <BreedDropdown/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
