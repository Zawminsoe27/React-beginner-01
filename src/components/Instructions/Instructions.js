import React, {Component} from 'react';
import emoji from './emoji.svg'
export default class Instructions extends Component {
	 render() {
	 	return (
			<div className="instructions">
			<img alt="Laughing face" src = {emoji}/>
			<p>Click on emoji to view the short name of emoji </p>
			</div>
)
	 }
}
