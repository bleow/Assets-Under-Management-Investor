import Portfolio from "../components/dashboard/Portfolio";
import Card from "react-bootstrap/Card";
import "./Dashboard.scss";

const Blank = () => {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center">
        <Portfolio className="d-flex"></Portfolio>
        <Card style={{ height: "15rem" }}>
          <Card.Body>
            <Card.Title>Diversification Risk</Card.Title>
            <Card.Text className="cardValue"> 20%</Card.Text>
            <Card.Title>Trending Industry</Card.Title>
            <Card.Text> Healthcare</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Blank;
