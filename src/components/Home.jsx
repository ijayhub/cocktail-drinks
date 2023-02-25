import React, { useEffect, useState } from 'react'
import DrinkList from './DrinkList'
import Input from './Input'
import Navbar from './Navbar'
// import Navbar from './Navbar'

const Home = () => {
    const [drinks, setDrinks] = useState([])
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [error,setError]=useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setDrinks(data.drinks);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setError(err.message)
                    setIsLoading(false);
            })
            
        },1000);
        
    },[search])
    
    
    return (
			<>
				<Navbar />
				<div className="max-w-7xl mx-auto">
                    <Input search={search} setSearch={setSearch} />
                    {!isLoading && (
						<DrinkList
							drinks={drinks}
							title='Cocktail Drinks'
                            search={search}
                        
						/>
					)}
					{error && (
						<div className='text-center md:text-2xl font-mono font-bold mt-3'>
							{error}
						</div>
					)}
				</div>
			</>
		);
}

export default Home