import { create } from 'zustand'
import { IpokemonDetailResponse } from '@/interface/pokemonDetail'


const initStore = {
    pokemon: {
        data: [],
        loading: false,
        error: null
    },
    fetchPokemon: {
        data: [],
        loading: false,
        error: null
    }
}

type pokemonType = {
    data: IpokemonDetailResponse[],
    loading: boolean,
    error: null | object
}

type usePokemonListStoreType = {
    pokemon: pokemonType,
    fetchPokemon: pokemonType
}


const usePokemonListStore = create<usePokemonListStoreType>((set) => ({
    ...initStore
}))

