import React from 'react'
import cocktail from '../assets/cocktails drink.jpeg'
import Navbar from './Navbar';

const About = () => {
    return (
			<>
				<Navbar />
				<section className='container mx-auto'>
					<h2 className='text-center font-bold font-mono tracking-widest md:text-6xl my-16 text-yellow-600'>
						ABOUT
					</h2>
					<div className='grid grid-cols-2 about'>
						<div>
							<img src={cocktail} alt='cocktail' className='rounded-lg' />
						</div>
						<article className=' tracking-wide md:m-28  about-container'>
							<p>
								A cocktail is an alcoholic mixed drink. Most commonly, cocktails
								are either a combination of spirits, or one or more spirits
								mixed with other ingredients such as tonic water, fruit juice,
								flavored syrup, or cream. Cocktails vary widely across regions
								of the world, and many websites publish both original recipes
								and their own interpretations of older and more famous cocktails
							</p>
							<div className='flex items-center justify-center mt-10'>
								<a href='https://en.wikipedia.org/wiki/Cocktail' target='_blank'>
									<button className=' bg-black text-white p-3 rounded-lg cursor-pointer'>
										Click to get more info
									</button>
								</a>
							</div>
						</article>
					</div>
				</section>
			</>
		);
}

export default About
