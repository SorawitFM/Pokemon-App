import React, { useEffect } from 'react'
import { pokemonListServie } from '@/service'


const HomePage = () => {
    const callData = async () => {
        const data = await pokemonListServie.getPokemonList()
        console.log(data, data.data)
    }

    useEffect(() => {
        callData()
    }, [])

    return (
        <div className='bg-white w-[90%] m-[auto] max-w-[1100px]'>
            <div>
                <img src="/images/logo.webp" className='max-h-[80px] mt-[20px]' alt="" />
            </div>
        </div>

    )
}

export default HomePage