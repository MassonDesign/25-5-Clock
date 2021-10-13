import Break from "./components/Break";
import Controls from "./components/Controls";
import Display from "./components/Display";
import Session from "./components/Session";
import { useState } from "react";
import { useEffect } from "react";

import "./index.css";

function App() {
	const [sessionLength, setSessionLength] = useState(25);
	const [breakLength, setBreakLength] = useState(5);
	const [display, setDisplay] = useState("25:00");
	const [timer, setTimer] = useState(1500);
	const [timerState, setTimerSate] = useState("paused");
	const [timerId, setTimerId] = useState("Session");
	const [intervId, setIntervId] = useState(null);

	useEffect(() => {
		setDisplay(clock);
	}, [sessionLength, timer]);

	const clock = () => {
		let minutes = Math.floor(timer / 60);
		let seconds = timer - minutes * 60;

		minutes = minutes < 10 ? `0${minutes}` : minutes;
		seconds = seconds < 10 ? `0${seconds}` : seconds;

		return `${minutes}:${seconds}`;
	};

	const playpause = () => {
		if (timerState === "paused") {
			if (!intervId) {
				setIntervId(setInterval(countDown, 1000));
			}
			setTimerSate("play");
		} else if (timerState === "play") {
			clearInterval(intervId);
			setIntervId(null);
			setTimerSate("paused");
		}
	};

	const countDown = () => {
		setTimer((timer) => timer - 1);
	};

	const addSessionLength = () => {
		setSessionLength((sessionLength) => sessionLength + 1);
		setTimer(sessionLength * 60);
		setTimer((timer) => timer + 60);
	};
	const removeSessionLength = () => {
		setSessionLength((sessionLength) => sessionLength - 1);
		setTimer(sessionLength * 60);
		setTimer((timer) => timer - 60);
	};

	const addBreakLength = () => {
		setBreakLength((breakLength) => breakLength + 1);
	};

	const removeBreakLength = () => {
		setBreakLength((breakLength) => breakLength - 1);
	};

	return (
		<div>
			<header className='text-center'>25 + 5 clock</header>

			<main className='flex bg-gray-200 justify-center items-center h-screen w-full m-auto'>
				<div className='flex flex-col bg-gray-900 h-5/6 w-80 rounded-3xl shadow-2xl'>
					<Display display={display} timerId={timerId} />

					<div className='flex justify-center items-center -mt-8 space-x-6'>
						<Break
							breakLength={breakLength}
							addBreakLength={addBreakLength}
							removeBreakLength={removeBreakLength}
						/>
						<Session
							sessionLength={sessionLength}
							addSessionLength={addSessionLength}
							removeSessionLength={removeSessionLength}
						/>
					</div>

					<Controls playpause={playpause} timerState={timerState} />
				</div>
			</main>
		</div>
	);
}

export default App;
