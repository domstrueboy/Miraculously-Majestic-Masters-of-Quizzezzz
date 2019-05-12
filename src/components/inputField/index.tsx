import { Component, h } from "preact";
import * as style from "./style.css";

interface Props {
    type?: string;
    placeholder?: string;
}

export default class InputField extends Component<Props> {
    public render({ type, placeholder }: Props) {
        return (
            <label class={style.inputField}>{placeholder || ''}
                <input type={type || 'text'} />
            </label>
        );
    }
}
