import React from 'react';
import {
    HashRouter,
    BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import './css/app.scss'

import Navbar from './Navbar';
import Home from './components/HomePage/Home';
import Rush from './components/RushPage/Rush';
import Members from './components/MembersPage/Members';
import FAQ from './components/FAQ';

function App() {
    return (
        <React.Fragment>
            <HashRouter>
                <div className="content-wrapper">
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

                        {/* BLM Page */}
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    
                    {/* <Footer /> */}
                </div>
            </HashRouter>
        </React.Fragment>
    );
}

export default App;