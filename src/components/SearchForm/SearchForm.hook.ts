import React, { useEffect } from 'react'
import { pokemonListServie, pokemonDetailServie } from '@/service'

const useSearchForm = () => {
    const callData = async () => {
        const responseList = await pokemonListServie.getPokemonList()
        if (responseList.status === 200) {
            const responseResult = responseList.data.results || []
            const pokeList = []
            for (const pokemon of responseResult) {
                const response = await pokemonDetailServie.getPokemonDetail(pokemon.name)
                const pokeData = response.data
                pokeList.push({ ...pokeData })
            }
            console.log('pokeList', pokeList)
        }

    }

    useEffect(() => {
        callData()
    }, [])

    return {}
}


export { useSearchForm }