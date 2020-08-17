import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
//pages
import Home from './Home';
import Project from './Project';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import notFound from './notFound';
function App() {
    const location = useLocation();
    return(
        <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.key}>
                        <Route path="/project/1" component={Project} exact/>
                        <Route path="/project/2" component={Project2} exact/>
                        <Route path="/project/3" component={Project3} exact/>
                        <Route path="/project/4" component={Project4} exact/>
                        <Route path="/project/5" component={Project5} exact/>
                        <Route path="/project/6" component={Project6} exact/>
                        <Route path="/" component={Home} exact/>
                        <Route path="/bonjour2" component={Home} exact/>
                        <Route component={notFound}/>
                    </Switch>
        </AnimatePresence>
    );
}
export default App;