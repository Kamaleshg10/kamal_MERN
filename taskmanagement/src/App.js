import "./App.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Container from "./../node_modules/react-bootstrap/esm/Container";
import { Row,Col } from "react-bootstrap";
import TasksList from "./components/TasksList";

function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col  lg="5" className="me-5">
          <AddTask />                    
        </Col>
        <Col  lg="6" className="pt-5">
          <TasksList />                  
        </Col>        
      </Row>
    </Container>
  );
}

export default App;
