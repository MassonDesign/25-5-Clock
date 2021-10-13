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
	const [timerLabel, setTimerLabel] = useState("Session");
	const [intervId, setIntervId] = useState(null);

	useEffect(() => {
		setDisplay(clock);
		if (timer === 0 && timerLabel === "Session") {
			setTimer(breakLength * 60);
			setTimerLabel("Break");
		} else if (timer === 0 && timerLabel === "Break") {
			setTimer(sessionLength * 60);
			setTimerLabel("Session");
		}
	}, [sessionLength, timer, timerLabel, breakLength]);

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
				setIntervId(setInterval(countDown, 100));
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

	const reset = () => {
		if (timerState === "play") {
			clearInterval(intervId);
			setIntervId(null);
			setTimerSate("paused");
		}
		setSessionLength(25);
		setBreakLength(5);
		setTimer(1500);
	};

	const addSessionLength = () => {
		if (sessionLength < 60) {
			setSessionLength((sessionLength) => sessionLength + 1);
			setTimer(sessionLength * 60);
			setTimer((timer) => timer + 60);
		} else return;
	};
	const removeSessionLength = () => {
		if (sessionLength > 1) {
			setSessionLength((sessionLength) => sessionLength - 1);
			setTimer(sessionLength * 60);
			setTimer((timer) => timer - 60);
		} else return;
	};

	const addBreakLength = () => {
		if (breakLength < 60) {
			setBreakLength((breakLength) => breakLength + 1);
		} else return;
	};

	const removeBreakLength = () => {
		if (breakLength > 1) {
			setBreakLength((breakLength) => breakLength - 1);
		} else return;
	};

	return (
		<div>
			<header className='text-center'>25 + 5 clock</header>

			<main className='flex bg-gray-200 justify-center items-center h-screen w-full m-auto'>
				<div className='flex flex-col bg-gray-900 h-5/6 w-80 rounded-3xl shadow-2xl'>
					<Display display={display} timerLabel={timerLabel} />

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

					<Controls
						playpause={playpause}
						timerState={timerState}
						reset={reset}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
