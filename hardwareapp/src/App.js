import './App.css';
import NavBar from "./NavBar";
import HomePage from "./homePage";
import Customers from "./customers";
import Products from "./Products";
import Sales from "./Sales";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import UpdateItem from "./UpdateItem";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/customers">
                        <Customers/>
                    </Route>
                    <Route path="/products">
                        <Products/>
                    </Route>
                    <Route path='/sales'>
                        <Sales />
                    </Route>
                    <Route path='/items/:id'>
                        <UpdateItem />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;