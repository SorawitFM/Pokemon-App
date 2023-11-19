import React, { useEffect } from 'react'
import { pokemonListServie } from '@/service'


const HomePage = () => {
    const callData = async () => {
        const data = await pokemonListServie.getPokemonList()
        console.log(data)
    }

    useEffect(() => {
        callData()
    }, [])

    return (
        <div>HomePage</div>
    )
}

export default HomePage