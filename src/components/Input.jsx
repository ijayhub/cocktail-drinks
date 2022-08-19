import React from 'react'
import search1 from '../assets/search (2).svg'

const Input = ({search,setSearch}) => {
    return (
			<section className='shadow-lg container mx-auto md:mt-40 input-container p-5'>
				
					<h2 className='text-yellow-700 font-bold tracking-widest mb-6 md:text-2xl'>Search for your favourite cocktail</h2>
					<form>
						<input
							type='text'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
                            className='bg-blue-100 p-2 input rounded-lg'
                        />
                        <div className="search-container">
                            <img src={search1} alt="search" className="search-container1" />
                        </div>
					</form>
				
			</section>
		);
}

export default Input
