import styles from "./HeroCard/HeroCard.module.css"
interface IHeroCard {
    name: string
    age: number
    img: string
    isDark: boolean,
    lightsaberColors: string[],
    image: string
}
function HeroCard() {
return (

    <div>
<div key={index}>
          <h4>{hero.name}</h4>
          <p>Age: {hero.age}</p>
          <img width={200} src={hero.image} alt="" />
    </div>
);

}

export default HeroCard;