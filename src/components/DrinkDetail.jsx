import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Navbar from './Navbar';


const DrinkDetail = () => {
    const [drinks, setDrinks] = React.useState([]);
    
	
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php/?i=${id}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data.drinks)
                setDrinks(data.drinks);
            })
        
    })
    return (
			<div>
				<Navbar />
                    
                    {drinks.map((drink) => (
                        <div
							key={drink.idDrink}
							className='container mx-auto flex items-center md:mt-52 drink-container'>
							
							<img
								src={drink.strDrinkThumb}
								alt='cocktail'
								style={{ width: '400px', height: '400px' }}
								className='rounded-lg'
							/>
							<div className='flex flex-col leading-10 mx-6'>
								<h3 className='font-bold text-yellow-600'>
									Name :{drink.strDrink}
								</h3>
								<p className='font-bold text-yellow-600'>
									Category : {drink.strCategory}
								</p>
								<p className='font-bold text-yellow-600'>
									Info : {drink.strAlcoholic}
								</p>
								<p className='font-bold text-yellow-600'>
									Glass : {drink.strGlass}
								</p>
								<p className='font-bold text-yellow-600'>
									Instructions : {drink.strInstructions}
								</p>
								<p className='font-bold text-yellow-600'>
									Ingredients : {drink.strIngredient1},{drink.strIngredient2},
									{drink.strIngredient3},{drink.strIngredient4},
									{drink.strIngredient5}
								</p>
								<p className='font-bold text-yellow-600'>
									Measurement: {drink.strMeasure1}, {drink.strMeasure2},
									{drink.strMeasure3}
								</p>
							</div>
						</div>
					))}
				</div>
			
		);
}

export default DrinkDetail