function Session({ sessionLenght }) {
	return (
		<div>
			<div className='flex justify-center content-center items-center'>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8 text-red-400'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
				<div className='flex bg-red-400 w-10 h-10 rounded-full items-center justify-center'>
					<p>{sessionLenght}</p>
				</div>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-8 w-8 text-red-400'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default Session;
