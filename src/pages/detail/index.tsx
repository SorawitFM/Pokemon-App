import PokemonCard from '@/components/PokemonCard';
import { IpokemonDetailResponse } from '@/interface/pokemonDetail';
import { pokemonDetailServie, pokemonListServie } from '@/service';
import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';


type pokemonType = {
    data: IpokemonDetailResponse | undefined
    loading: boolean
    error: null | any
}


const DetailPage = () => {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState<pokemonType>({ data: [], loading: true, error: null })
    const callData = async (name: string) => {
        const response = await pokemonDetailServie.getPokemonDetail(name)
        if (response.status === 200) {
            if (response.data)

                setPokemon({
                    data: {
                        ...response.data, image: response.data.sprites.other.dream_world.front_default ||
                            response.data.sprites.other['official-artwork'].front_default
                    }, loading: false, error: null
                })
            console.log("EE", pokemon.data)
        } else {
            setPokemon({
                data: undefined,
                loading: false,
                error: response.error
            })
        }
    }
    useEffect(() => {
        if (name) callData(name)
    }, [name])

    return (
        <div className='w-[90%] m-[auto] max-w-[1100px]'>
            <div className='flex justify-center'>
                <img
                    src="/images/logo.webp"
                    className='max-h-[80px] mt-[20px]'
                    alt=""
                />
            </div>

            {pokemon.data && (
                <div className='w-[90%] max-w-[600px] m-[auto]'>
                    <div className="bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[10px] max-w-[275px] m-[auto]">
                        <div className="bg-[url('/images/poke-card-bg.png')] bg-center aspect-square w-full bg-cover">
                            <div className="bg-[url('/images/poke-card-bg.png')]">
                                <img className="rounded-t-lg h-[218px] p-[40px] w-full" src={pokemon.data.image} alt="pokemon image" />
                            </div>
                        </div>

                        <div className="p-5">
                            <div className='flex justify-between'>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
                                    {pokemon.data.name}
                                </h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    #{pokemon.data.id}
                                </h5>
                            </div>
                            <div className='flex justify-end gap-2 mt-[16px] '>
                                {pokemon.data.types && pokemon.data.types.map((item) => {
                                    return <span key={item.type.name} className={`badge-type-${item.type.name} px-[14px] py-1 rounded-[10px]`} >
                                        {item.type.name}
                                    </span>
                                })}

                            </div>

                        </div>
                    </div >
                </div>
            )}
        </div>
    )
}

export default DetailPage



