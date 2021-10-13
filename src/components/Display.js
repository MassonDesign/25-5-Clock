function Display({ display, timerLabel }) {
	return (
		<div className='flex flex-col items-center justify-center text-white text-center border border-red-400 rounded-full m-auto h-60 w-60'>
			<p className='mb-4 text-lg' id='timer-label'>
				{timerLabel}
			</p>
			<p className='text-3xl' id='time-left'>
				{display}
			</p>
		</div>
	);
}

export default Display;
