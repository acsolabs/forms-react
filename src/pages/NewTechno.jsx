import { useState } from "react";
import Nav from "../components/Nav";

const NewTechno = ({ handleNewTechno }) => {
  const [techno, setTechno] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewTechno(techno);
  };
  return (
    <>
      <div className="techno-add">
        <h1>Ajouter une Nouvelle Techno </h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="technoName">Nom :</label>
          <br />
          <input type="text" name="technoName" onChange={handleNewTechno} />
          <br />
          <label htmlFor="technoCategory">Catégorie :</label>
          <br />
          <select name="technoCategory" id="techno-category">
            <option value="">Selectionner une catégorie</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack">Fullstack</option>
            <option value="other">Autre</option>
          </select>
          <br />
          <label htmlFor="description">Description :</label>
          <br />
          <textarea
            name="description"
            id="description "
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <input type="submit" value="Ajouter" className="btn" />
        </form>
      </div>
    </>
  );
};

export default NewTechno;
