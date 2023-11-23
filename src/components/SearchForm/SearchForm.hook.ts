import React, { useEffect } from 'react'
import { pokemonListServie, pokemonDetailServie } from '@/service'

const useSearchForm = () => {
    const callData = async () => {
        const responseList = await pokemonListServie.getPokemonList()
        if (responseList.status === 200) {
            const responseResult = responseList.data.results || []
            console.log('data', responseResult)
        }

    }

    useEffect(() => {
        callData()
    }, [])
}


export { useSearchForm }