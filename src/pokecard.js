import "./pokecard.css";

const Pokecard = ({ id, name, type, base_experience }) => {
  const img = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{name}</div>
      <img src={img} className="Pokecard-img" alt="pokemon image" />
      <div className="Pokecard-details">
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    </div>
  );
};

export default Pokecard;
