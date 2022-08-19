import React from 'react'
import {Link} from 'react-router-dom'

const DrinkList = ({drinks, title}) => {
  return (
		<>
			<section className='container mx-auto'>
				<div className='flex items-center justify-center'>
					<h2 className='my-11 md:text-3xl text-yellow-700 font-bold'>
						{title}
					</h2>
                </div>
                <div className='grid gap-4 grid-cols-4 grid-rows-4 drink-container'>
					{drinks.map((drink) => (
						<div className='card shadow-2xl rounded-lg' key={drink.idDrink}>
							<img
								src={drink.strDrinkThumb}
								alt='cocktail'
								className='rounded-t-lg'
							/>
							<div className='container p-4 tracking-widest leading-10'>
								<h4 className='font-bold md:text-3xl text-yellow-700'>
									{drink.strDrink}
								</h4>
								<p className='font-bold text-yellow-700'>{drink.strGlass}</p>
								<p className='text-gray-400'>{drink.strAlcoholic}</p>
								<Link to={`/drinks/${drink.idDrink}`}>
									<button className='bg-sky-700 text-white p-1 rounded-lg shadow-lg w-full'>
										Details
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default DrinkList