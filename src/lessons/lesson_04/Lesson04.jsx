import "./lesson04.css";

import { forceUsers } from "./data";
export default function Lesson04() {
  // console.log(forceUsers);
  return (
    <div className="lesson-container">
      <h3>Lesson 04</h3>

      {/* итерируемся по массиву объектов и выводим данные по ключам */}
      {forceUsers.map((hero, index) => (
        // для обертки над итерируемой версткой указываем props key с уникальным значением. это технические данные, который просит react
        
            Lightsaber colors:{" "}
            {hero.lightsaberColors.map(color => (
              <span>{color} </span>
              // 🔐 <div style={{ backgroundColor: color, height: "10px", width: "10px" }}></div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
