import { Component, h } from "preact";
import * as style from "./style.css";

interface Props {
    type?: string;
    label?: string;
}

export default class InputField extends Component<Props> {
    public render({ type, label }: Props) {
        return (
            <label class={style.inputField}>{label || ''}
                <input type={type || 'text'} />
            </label>
        );
    }
}
