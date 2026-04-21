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
          <input type="submit" value="Ajouter" />
        </form>
      </div>
    </>
  );
};

export default NewTechno;
