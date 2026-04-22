import Nav from "../components/Nav";

const NewTechno = () => {
  return (
    <>
      <div className="techno-add">
        <h1>Ajouter une Nouvelle Techno </h1>
        <form action="">
          <label htmlFor="techno-name">Nom :</label>
          <br />
          <input type="text" name="techno-name" />
          <br />
          <label htmlFor="techno-category">Catégorie :</label>
          <br />
          <select name="techno-category" id="techno-category">
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
          cols="30" rows="10" <input type="submit" value="Ajouter" />
        </form>
      </div>
    </>
  );
};

export default NewTechno;
