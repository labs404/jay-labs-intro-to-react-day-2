import React, { useState } from "react";
import Card from './card';


const Home = () => {
	//useState (or other hooks) go inside the function component.
	const [count, setCount] = useState(0);


	return (
		<>
			{/* <Card fullName="Rick Rodriguez" age={143} /> */}
			<div className="counter-section">
				<h1>You clicked {count} times.</h1>
				<button onClick={() => setCount(count + 1)}>add one tally to the click counter</button><br />
				<button onClick={() => setCount(count - 1)}>remove one tally to the click counter</button><br />
				<button onClick={() => setCount(0)}>reset the click counter</button><br />
				<button onClick={() => setCount(count * count)}>exponential increase</button><br />
			</div>
		</>
	);
};


export default Home;
