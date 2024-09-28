import { useState } from "react";
import Style from "../styles/Hero.module.css";

const herodb = [
  {
    id: 1,
    name: "Web Developer",
    icon: "WD",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet optio inventore quis facere nihil ex delectus esse sunt quisquam architecto, mollitia, vero enim voluptatibus dolore maiores corporis modi? Ipsa, expedita.",
  },
  {
    id: 2,
    name: "3D Designer",
    icon: "3D",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet optio inventore quis facere nihil ex delectus esse sunt quisquam architecto, mollitia, vero enim voluptatibus dolore maiores corporis modi? Ipsa, expedita.",
  },
  {
    id: 3,
    name: "Software Engineer",
    icon: "SE",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet optio inventore quis facere nihil ex delectus esse sunt quisquam architecto, mollitia, vero enim voluptatibus dolore maiores corporis modi? Ipsa, expedita.",
  },
  {
    id: 4,
    name: "Web designer",
    icon: "WB",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet optio inventore quis facere nihil ex delectus esse sunt quisquam architecto, mollitia, vero enim voluptatibus dolore maiores corporis modi? Ipsa, expedita.",
  },
];

export function Hero() {
  const [toggle, setToggle] = useState([true, true, true, true]);

  // function handleClick(event) {
  //   const index = event.target.value;
  //   console.log(index);
  //   setToggle((prev) => [...prev, (index = !prev)]);
  // }
  // function handleInput(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   const type = event.target.type;
  //   const checked = event.target.checked;

  //   setData((d) => {
  //     return {
  //       ...d,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }

  return (
    <div className={Style.wrapper}>
      {herodb.map((card, index) => (
        <div className={Style.Container} key={index}>
          <input type="radio" name="slide" id={card.id} className={Style.input} defaultChecked={index === 0} />
          <label htmlFor={card.id} className={Style.card}>
            <div className={Style.row}>
              {toggle[index] && <div className={Style.icon} /*onClick={handleClick} value={index}*/>{card.name}</div>}
              <div className={Style.description}>
                <h4>{card.name}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
}
