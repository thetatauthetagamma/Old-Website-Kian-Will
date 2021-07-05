import React from 'react';
import {
    BrowserRouter as Router,
	Link,
	Switch,
	Route
} from 'react-router-dom';
import Navbar from './Navbar'
import './css/app.css'

function App() {
    return (
        <Router>
            <Switch>

                {/* FAQ Page */}
                <Route path="/faq">
                    <Navbar />
                    FAQ Page
                </Route>

                {/* Members Page */}
                <Route path="/members">
                    <Navbar />
                    Members Page
                </Route>

                {/* Home Page */}
                <Route path="/">
                    <Navbar />
                    Home Page
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
