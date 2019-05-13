import { Component, h } from "preact";
import * as style from "./style.css";

import { Link } from "preact-router/match";

import Button from "../../components/button";
import InputField from "../../components/inputField";

interface Props {}
export default class SignUp extends Component<Props> {
    public render() {
        return (
            <div class={style.signup}>
                <form action="post">
                    <h1>Registration Form</h1>
                    <InputField type="text" label="Your name" />
                    <InputField type="email" label="Your email" />
                    <InputField type="password" label="Password" />
                    <Button text="Sign Up"/>
                </form>
                <Link activeClassName={style.active} href="/signin">
                    Already registered?
                </Link>
            </div>
        );
    }
}
