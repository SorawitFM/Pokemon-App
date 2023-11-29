import { create } from 'zustand'
import { IpokemonDetailResponse } from '@/interface/pokemonDetail'


const initStore = { //ค่าเริ่มต้น
    pokemon: { //เป็น pokemon ทีได้จากการ fillter โดย User
        data: [],
        loading: false,
        error: null
    },
    fetchPokemon: { //เป็น pokemon ทั้งหมด
        data: [],
        loading: false,
        error: null
    }
}

type pokemonType = {
    data: IpokemonDetailResponse[],
    loading: boolean,
    error: null | any
}

type usePokemonListStoreType = {
    pokemon: pokemonType,
    fetchPokemon: pokemonType,
    setPokemonList: (value: pokemonType) => void, //ถ้าเรียบfunction ก็เหมือน setPokemonList(value) แล้วทำ set({ pokemon: value })
    setFetchPokemonList: (value: pokemonType) => void,
    clearPokemon: () => void,
}


export const usePokemonListStore = create<usePokemonListStoreType>((set) => ({
    ...initStore, //ค่าเริ่มต้น
    setPokemonList: (value: pokemonType) => set({ pokemon: value }), //ถ้าเรียบfunction ก็เหมือน setPokemonList(value) แล้วทำ set({ pokemon: value })
    setFetchPokemonList: (value: pokemonType) => set({ fetchPokemon: value }),
    clearPokemon: () => set({ ...initStore })
}))

