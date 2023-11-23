import { create } from 'zustand'
import { IpokemonDetailResponse } from '@/interface/pokemonDetail'


const initStore = { //ค่าเริ่มต้น
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


export const usePokemonListStore = create<usePokemonListStoreType>((set) => ({
    ...initStore, //ค่าเริ่มต้น
    setPokemonList: (value: pokemonType) => set({ pokemon: value }), //ถ้าเรียบfunction ก็เหมือน setPokemonList(value) แล้วทำ set({ pokemon: value })
    setFetchPokemonList: (value: pokemonType) => set({ pokemon: value }),
    clearPokemon: () => set({ ...initStore })
}))

