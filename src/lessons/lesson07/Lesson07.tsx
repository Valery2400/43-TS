import Counter from "../../components/counter/Counter";
import MyButton from "../../components/myButton/MyButton";

function Lesson07() {
  let hero: string = "batman";

  interface ISuperhero {
    id: number;
    name: string;
    nickname: string;
    age?: number | string;
    abilities?: string[];
  }
  interface ISpacehero extends ISuperhero {
    зplanet?: string;
  }

  let hero1: ISuperhero = {
    id: 1,
    name: "Kent",
    nickname: "Supreman",
    abilities: ["super vision", "can fly"],
  };

  let hero2: ISuperhero = {
    id: 2,
    name: "Bruce Wane",
    nickname: "Batman",
  };
  const heroes: ISuperhero[] = [hero1, hero2];

  // интрефейсф обьединяются
  // если напишете интерфейс с уже существующим именем
  // то произойдет объединение
  // будьте с этим осторожнее

  interface ISpaceHeroes {
    isAlive?: boolean;
  }

  type Animal = {
    name: string;
    weidht: number;
  };

  type ExoticAnimal = Animal & {
    isExotic: true;
    country: string;
  };
  let panda: ExoticAnimal = {
    isExotic: true,
    name: "Po",
    weidht: 100,
    country: "China",
  };
  const handleHello = () => {
    console.log('hello');
    
  }

  return (
    <div className="lesson-container">
      <h4>Lesson07</h4>
      <p>Урок "TypeScript часть 2" в комментариях к коду урока</p>
      <div>
        {heroes.map((el) => (
          <div key={el.id}>
            <h4>🤷‍♂️:{el.nickname}</h4>
            <p> Name:😊 {el.name}</p>
          </div>
        ))}
        <div>
          <MyButton />
          <MyButton name="click" onClick={() => console.log("click!")} />
          <MyButton name="hello" onClick={handleHello}/>
        </div>
      </div>
      <Counter/>
    </div>
  );
}
export default Lesson07;
