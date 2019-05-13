import { Component, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

import InputField from "../../components/inputField";

interface Props {}
export default class SignUp extends Component<Props> {
    public render() {
        return (
            <div class={style.signup}>
                <h1>Registration Form</h1>
                <InputField type="text" label="Your name" />
                <InputField type="email" label="Your email" />
                <InputField type="password" label="Password" />
                <Link activeClassName={style.active} href="/">
                    <button>Submit</button>
                </Link>
            </div>
        );
    }
}
