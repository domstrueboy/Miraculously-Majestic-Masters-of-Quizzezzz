import { Component, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Quiz from "../routes/quiz";
import SignIn from "../routes/signin";
import SignUp from "../routes/signup";
// import Header from "./header";

if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

export default class App extends Component {
    public currentUrl?: string;
    public handleRoute = (e: RouterOnChangeArgs) => {
        this.currentUrl = e.url;
    };

    public render() {
        return (
            <div id="app">
                {/* <Header /> */}
                <Router onChange={this.handleRoute}>
                    <Route path="/" component={Home} />
                    {/* <Route path="/quiz/" component={Quiz} quiz="me" /> */}
                    <Route path="/quiz/:quiz/:question" component={Quiz} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    {/* <Route path="/admin" component={Profile} user="admin" /> */}
                </Router>
            </div>
        );
    }
}
