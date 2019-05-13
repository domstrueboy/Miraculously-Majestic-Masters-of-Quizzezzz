import { Component, h } from "preact";
import * as style from "./style.css";

interface Props {
    text?: string;
    type?: string;
}

export default class Button extends Component<Props> {
    public render({ text, type }: Props) {
        return (
            <button
                type={type || 'submit'}
                class={style.button}
            >
                {text || 'Submit'}
            </button>
        );
    }
}
