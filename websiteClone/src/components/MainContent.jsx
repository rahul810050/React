function MainContent() {
	return (
		<div className='w-full h-screen'>
			<div className="h-44 w-full bg-black"></div>
			<div className="bg-white md:gap-3 m-2 grid md:grid-cols-11 grid-cols-11">
				<div className="h-56 shadow-xl hidden sm:block bg-pink-500 md:col-span-2  -translate-y-16">
				</div>
				<div className="h-96 shadow-xl bg-blue-700 md:col-span-6 col-span-11">
				</div>
				<div className="h-60 shadow-xl bg-yellow-700 md:col-span-3 col-span-11">	
				</div>
			</div>
		</div>
	);
}

export default MainContent;
