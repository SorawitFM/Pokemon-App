import React, { useEffect } from 'react'
import { pokemonListServie, pokemonDetailServie } from '@/service'
import { useForm } from "react-hook-form"
import { usePokemonListStore } from '@/store/pokemonList'

const useSearchForm = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm() //เป็น pattern ของ library "react-hook-form"

    const { setFetchPokemonList } = usePokemonListStore()//เป็น pattern ของ library "react-hook-form"

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
                pokeList.push({ ...pokeData })
            }
            setFetchPokemonList({ data: pokeList, loading: false, error: null })
        } else {
            setFetchPokemonList({
                data: [], loading: false, error: responseList.error
            })
        }

    }

    useEffect(() => {
        callData()
    }, [])

    return {
        fieldKeyword: register('keyword') //เป็น pattern ของ library "react-hook-form"
    }
}


export { useSearchForm }