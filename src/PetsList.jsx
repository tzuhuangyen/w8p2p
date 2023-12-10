// PetsList.js
import React, { useState } from "react";
import Pet from "./Pet";

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [newPet, setNewPet] = useState({
    name: "",
    // Add other pet properties
  });

  const handleDelete = (petId) => {
    setPets(pets.filter((pet) => pet.id !== petId));
  };

  const handleEdit = (editedPet) => {
    setPets((prevPets) =>
      prevPets.map((pet) => (pet.id === editedPet.id ? editedPet : pet))
    );
  };

  const handleAddPet = () => {
    setPets((prevPets) => [...prevPets, { ...newPet, id: Date.now() }]);
    setNewPet({
      name: "",
      // Reset other pet properties
    });
  };

  return (
    <div>
      <h1>Pets List</h1>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          pet={pet}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
      <div>
        <h2>Add New Pet</h2>
        <input
          type="text"
          placeholder="Name"
          value={newPet.name}
          onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
        />
        {/* Add input fields for other pet properties */}
        <button onClick={handleAddPet}>Add Pet</button>
      </div>
    </div>
  );
};

export default PetsList;
