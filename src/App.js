import React from 'react';
import {
    BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import './css/app.css'

import Navbar from './Navbar'
import Footer from './components/Footer'
import Home from './components/HomePage/Home'
import Rush from './components/RushPage/Rush'
import Members from './components/MembersPage/Members'
import FAQ from './components/FAQ'

function App() {
    return (
        <React.Fragment>
            <Router>
                <Navbar />

                <Switch>

                    {/* FAQ Page */}
                    <Route path="/faq">
                        <FAQ />
                    </Route>

                    {/* Rush Page */}
                    <Route path="/rush">
                        <Rush />
                    </Route>

                    {/* Members Page */}
                    <Route path="/members">
                        <Members />
                    </Route>

                    {/* Home Page */}
                    <Route path="/">
                        <Home />
                    </Route>

                </Switch>

                <Footer />
            </Router>
        </React.Fragment>
    );
}

export default App;
