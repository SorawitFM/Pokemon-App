import { Item, Sprites, Other, DreamWorld, Type, IpokemonDetailResponse } from './../../interface/pokemonDetail';
import React, { useEffect } from 'react'
import { pokemonListServie, pokemonDetailServie } from '@/service'
import { useForm } from "react-hook-form"
import { usePokemonListStore } from '@/store/pokemonList'
import { generationList } from '@/utils/optionList';

const useSearchForm = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm() //เป็น pattern ของ library "react-hook-form"

    const { setFetchPokemonList, fetchPokemon, setPokemonList } = usePokemonListStore()//เป็น pattern ของ library "react-hook-form"

    const keyword = watch('keyword') //เป็น pattern ของ library "react-hook-form"
    const generation = watch('generation') //เป็น pattern ของ library "react-hook-form"
    const type = watch('type') //เป็น pattern ของ library "react-hook-form"
    const sort = watch('sort') //เป็น pattern ของ library "react-hook-form"

    const callData = async (filter: {
        name: string
        limit: number
        offset: number
    }) => {
        const responseList = await pokemonListServie.getPokemonList(filter.limit, filter.offset)
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
            //เพื่อให้ได้การ sort ที่ถูกต้อง สลับไปมาได้ระหว่าง generation, type, sort by
            const data = filterPokemon(pokeList, keyword, type, sort)
            setPokemonList({ data: data, loading: false, error: null }) //ถ้าใช้ data : pokeList จะสลับไม่ได้
        } else {
            setFetchPokemonList({
                data: [],
                loading: false,
                error: responseList.error
            })
        }

    }

    const filterPokemon = (
        pokeList: IpokemonDetailResponse[],
        keyword: string,
        type: string,
        sort: 'id' | 'name'
    ) => {
        const keywordFilter = pokeList.filter((Item) => {
            return Item.name.toLowerCase().includes(keyword?.toLowerCase())
        })
        const typeFilter = type !== 'all types' ?
            keywordFilter.filter((item) => {
                return item.types.find((f) => {
                    return f.type.name.toLowerCase().includes(type.toLowerCase())
                })
            }) : keywordFilter

        return sortBy(typeFilter, sort)
    }

    const sortBy = (data: IpokemonDetailResponse[], type: 'id' | 'name') => {
        switch (type) {
            case 'id':
                return data.sort((a, b) => a.id - b.id)

            case 'name':
                return data.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)

            default:
                return data.sort((a, b) => a.id - b.id)
        }
    }

    useEffect(() => {
        if (generation !== undefined) {
            callData(generationList[generation])
        }

    }, [generation])

    useEffect(() => {
        const data = filterPokemon(fetchPokemon.data, keyword, type, sort)
        setPokemonList({
            data: data,
            loading: false,
            error: null
        })
    }, [keyword, type, sort])



    return {
        fieldKeyword: register('keyword'), //เป็น pattern ของ library "react-hook-form"
        fieldGeneration: register('generation'), //เป็น pattern ของ library "react-hook-form"
        fieldType: register('type'), //เป็น pattern ของ library "react-hook-form"
        fieldSort: register('sort') //เป็น pattern ของ library "react-hook-form"
    }
}


export { useSearchForm }