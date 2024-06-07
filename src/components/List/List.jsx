import { ListItem } from "../ListItem/ListItem";
import s from "./style.module.css";

export function List({ items }) {
  return (
    <div style={{ overflowY: "scroll", 
    height: "40%", 
    border:"1px solid orange",
    borderRadius:"10px",
    backgroundColor:"rgba(24, 24, 35, 0.6)",
     }}>
      <table className="table table-hover table-borderless text-white">
        <tbody>
          {items.map((item, i) => {
            return <ListItem key={item.name + i} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}