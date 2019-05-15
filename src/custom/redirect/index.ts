import { Component } from 'preact';
import { route } from 'preact-router';

interface Props {
  to: string;
}
 
export default class Redirect extends Component<Props> {
  public componentWillMount() {
    route(this.props.to, true);
  }
 
  public render() {
    return null;
  }
}