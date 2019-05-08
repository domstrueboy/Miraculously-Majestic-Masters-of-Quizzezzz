import { Component, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

interface Props {}
export default class Home extends Component<Props> {
    public render() {
        return (
            <div class={style.home}>
                <h1>Miraculously Majestic Masters of Quizzezzz</h1>
                <Link activeClassName={style.active} href="/signup">
                    <button>Let's play</button>
                </Link>
            </div>
        );
    }
}
