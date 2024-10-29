// src/App.tsx

import React, { useState, useEffect } from 'react';
import EmployeeCard from './components/EmployeeCard';

function App() {
  // État pour stocker les données de l'employé
  const [employee, setEmployee] = useState<any | null>(null);

  // Fonction pour récupérer un nouvel employé
  const getEmployee = () => {
    // Envoi de la requête à l'API
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        // Inspections des données reçues
        console.log(data);  // Affiche les données reçues dans la console
        setEmployee(data.results[0]); // Mettez à jour l'état avec le premier employé
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'employé :", error);
      });
  };

  // Utilisation de useEffect pour récupérer un employé initial lors du premier montage
  useEffect(() => {
    getEmployee(); // Récupération d'un employé au premier montage
  }, []);

  return (
    <div className="App">
      {employee ? (
        <>
          <EmployeeCard employee={employee} />
          <button type="button" onClick={getEmployee}>Get employee</button>
        </>
      ) : (
        <p>Chargement de l'employé...</p>
      )}
    </div>
  );
}

export default App;
