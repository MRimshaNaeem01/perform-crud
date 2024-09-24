import React, { useState } from 'react';
import ListItems from '../src/components/ListItems';
import FormComponent from '../src/components/FormComponent';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const handleEdit = (item) => {
    setCurrentData(item);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setCurrentData(null);
  };

  return (
    <div className="container border p-5 m-2">
      <h1>CRUD Application</h1>
      <button className="btn btn-primary" onClick={() => setIsFormOpen(true)}>
        Add New Item
      </button>
      <ListItems onEdit={handleEdit} />
      {isFormOpen && (
        <FormComponent
          currentData={currentData}
          refreshData={() => window.location.reload()}
          onClose={handleFormClose}
        />
      )}
    </div>
  );
}

export default App;
