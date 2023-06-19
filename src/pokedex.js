import Pokecard from "./pokecard";
import pokemon from "./pokemon";
import "./pokedex.css";

const Pokedex = () => (
  <>
    <h1 className="Pokedex-title">Pokedex</h1>
    <div className="Pokedex-cards">
      {pokemon.map((p) => (
        <Pokecard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          base_experience={p.base_experience}
        />
      ))}
    </div>
  </>
);

export default Pokedex;
