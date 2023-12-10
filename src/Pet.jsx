// Pet.js
import React, { useState } from "react";

const Pet = ({ pet, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...pet });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(formData);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setFormData({ ...pet });
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {/* Add input fields for other pet properties */}
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{pet.name}</p>
          {/* Display other pet properties */}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(pet.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Pet;
