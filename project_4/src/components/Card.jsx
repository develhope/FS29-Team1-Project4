import card_container from "../styles/Card.module.css";
import { DescribeProIT } from "./DescribeProIT";
import { Image } from "./Image";
import { Titleh6 } from "./Titleh6";

export function Card() {
  return (
    <div className={card_container.card}>
      <Titleh6 />
      <Image />
      <DescribeProIT />
    </div>
  );
}
