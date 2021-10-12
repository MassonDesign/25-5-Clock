import Break from "./components/Break";
import Controls from "./components/Controls";
import Display from "./components/Display";
import Session from "./components/Session";
import { useState } from "react";

import "./index.css";

function App() {
	const [sessionLenght, setSessionLenght] = useState(5);
	const [breakLenght, setbreakLenght] = useState(25);
	const [display, setDisplay] = useState("25:00:00");

	return (
		<div>
			<header className='text-center'>25 + 5 clock</header>

			<main className='flex bg-gray-200 justify-center items-center h-screen w-full m-auto'>
				<div className='flex flex-col bg-gray-900 h-5/6 w-80 rounded-3xl shadow-2xl'>
					<Display display={display} />

					<div className='flex justify-center items-center -mt-10 space-x-6'>
						<Break breakLenght={breakLenght} />
						<Session sessionLenght={sessionLenght} />
					</div>

					<Controls />
				</div>
			</main>
		</div>
	);
}

export default App;
