import './App.css';
import Navs from "./Navs";
import HomePage from "./homePage";
import Customers from "./customers";
import Products from "./Products";
import Sales from "./Sales";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

function App() {
  return (
      <Router>
          <div className="App">
              <Navs/>
              <Row>
                  {/*<Col sm={2}> APP </Col>*/}
                  <Col sm={8}>
                      <Switch>
                          <Route exact path='/'>
                              <HomePage/>
                          </Route>
                          <Route path='/customers'>
                              <Customers/>
                          </Route>
                          <Route path='/products'>
                              <Products/>
                          </Route>
                          <Route path='/sales'>
                              <Sales/>
                          </Route>
                      </Switch>
                  </Col>
              </Row>

          </div>
      </Router>
  );
}

export default App;
