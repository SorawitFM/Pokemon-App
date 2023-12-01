import { Item, Sprites, Other, DreamWorld } from './../../interface/pokemonDetail';
import React, { useEffect } from 'react'
import { pokemonListServie, pokemonDetailServie } from '@/service'
import { useForm } from "react-hook-form"
import { usePokemonListStore } from '@/store/pokemonList'

const useSearchForm = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm() //เป็น pattern ของ library "react-hook-form"

    const { setFetchPokemonList, fetchPokemon, setPokemonList } = usePokemonListStore()//เป็น pattern ของ library "react-hook-form"

    const keyword = watch('keyword') //เป็น pattern ของ library "react-hook-form"

    const callData = async () => {
        const responseList = await pokemonListServie.getPokemonList()
        if (responseList.status === 200) {
            const responseResult = responseList.data?.results || []
            const pokeList = []
            setFetchPokemonList({ data: [], loading: true, error: null })

            for (const pokemon of responseResult) {
                const response = await pokemonDetailServie.getPokemonDetail(pokemon.name)
                const pokeData = response.data
                if (pokeData)
                    pokeList.push({
                        ...pokeData, image: pokeData.sprites.other.dream_world.front_default ||
                            pokeData.sprites.other['official-artwork'].front_default
                    })
            }
            setFetchPokemonList({ data: pokeList, loading: false, error: null })
        } else {
            setFetchPokemonList({
                data: [],
                loading: false,
                error: responseList.error
            })
        }

    }

    useEffect(() => {
        callData()
    }, [])

    useEffect(() => {
        const data = fetchPokemon.data.filter((Item) => {
            return Item.name.toLowerCase().includes(keyword?.toLowerCase())
        })
        setPokemonList({
            data: data,
            loading: false,
            error: null
        })
    }, [keyword])


    return {
        fieldKeyword: register('keyword') //เป็น pattern ของ library "react-hook-form"
    }
}


export { useSearchForm }