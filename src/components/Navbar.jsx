import React from 'react'

const Navbar = () => {
    return (
			<header className='shadow-2xl p-4 bg-sky-200'>
				<div className='container mx-auto flex items-center justify-around '>
					<h1 className='text-2xl font-bold'>CR.Drinks</h1>
					<nav>
						<ul className='flex'>
							<li className='mx-5 hover:bg-orange-700 rounded-full p-2 font-bold' >
								<a href='/'>HOME</a>
							</li>
							<li className=' hover:bg-orange-700 rounded-full p-2 font-bold'>
								<a href='About'>ABOUT</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
}

export default Navbar
