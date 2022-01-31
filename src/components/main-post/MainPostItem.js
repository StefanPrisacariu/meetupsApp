import Card from "../Card/Card";
import "./MainPostItem.css";

function MainPostItem(props) {

  return (
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title}/>
        </div>
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="text">
          <p>{props.text}</p>
        </div>
      </Card>
  );
}

export default MainPostItem;
