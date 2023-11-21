import axios from "axios"
import { POKEMON_BASE_URL } from "@/utils/constant"
import { IpokemonListResponse } from '@/interface/pokemonList'

interface IGetPokemonListResponse {
    status: number | undefined
    data: IpokemonListResponse[]
}

export const pokemonListServie = {
    getPokemonList: async (limit?: number, offset?: number): Promise<IGetPokemonListResponse> => {
        const response = await axios.get(`${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`)
        return response
    }
}