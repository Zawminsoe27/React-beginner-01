import React from 'react';
import ReactDom from 'react-dom';
import Instructions from "../Instructions/Instructions.js";
import './App.css';

let emojis = [
	{
		emoji:"😀",
		name:"grining face"
	},
	{
		emoji:"🎉",
		name:"party popper"
	},
	{
	emoji:"💃",
	name:"woman dancing"
	}
];
const displayEmojiName = event=>alert("You click " + event.target.id + " emoji"); 
const displatAction = false;
function App() {
	const greeting = "greeting";
		return( 
<div className = "container">
		<h1 id={greeting}> Hello World! </h1>
		{displatAction && <p> I am using JSX </p>}
		<Instructions />
		<ul>
			{
				emojis.map( emoji => (
					<li key = {emoji.name} >
						<button onClick = {displayEmojiName}>
							<span aria-label ={emoji.name} id = {emoji.name}>
							{emoji.emoji}
							</span>
						</button>
					</li>
				))
			}
		</ul>
</div>
)
}

export default App;
