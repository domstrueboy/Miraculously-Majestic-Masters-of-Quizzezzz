import { Component, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

interface Props {}
export default class SignUp extends Component<Props> {
    public render() {
        return (
            <div class={style.signup}>
                <h1>Registration Form</h1>
                <input type="text"/>
                <Link activeClassName={style.active} href="/">
                    <button>Submit</button>
                </Link>
            </div>
        );
    }
}
