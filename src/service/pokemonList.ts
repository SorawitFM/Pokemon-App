import axios from "axios"
import { POKEMON_BASE_URL } from "@/utils/constant"


export const pokemonListServie = {
    getPokemonList: async (limit?: number, offset?: number) => {
        const response = await axios.get(`${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`)
        return response
    }
}