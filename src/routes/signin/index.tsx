import { Component, h } from "preact";
import * as style from "./style.css";

import { Link } from "preact-router/match";

import Button from "../../components/button";
import InputField from "../../components/inputField";

interface Props {}
export default class SignIn extends Component<Props> {
    public render() {
        return (
            <div class={style.signin}>
                <form action="post">
                    <h1>Authorization Form</h1>
                    <InputField type="email" label="Your email" />
                    <InputField type="password" label="Password" />
                    <Button text="Sign In"/>
                </form>
                <Link activeClassName={style.active} href="/signup">
                    Registration
                </Link>
            </div>
        );
    }
}
