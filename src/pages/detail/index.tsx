import PokemonCard from '@/components/PokemonCard';
import { IpokemonDetailResponse } from '@/interface/pokemonDetail';
import { pokemonDetailServie, pokemonListServie } from '@/service';
import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams, Link } from 'react-router-dom';


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

        } else {
            setPokemon({
                data: undefined,
                loading: false,
                error: response.error
            })
        }

    }
    console.log("EE", pokemon.data)
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
            <div className='w-[90%] max-w-[600px] m-[auto]'>

                <Link to={'/'}
                    className='text-black font-bold bg-[#4CAFEB] p-[12px] rounded-[40px]'>
                    Back
                </Link>

                {pokemon.data && (
                    <div className=" rounded-lg shadow p-[10px]  m-[auto]">
                        <div className=" bg-center aspect-square w-full bg-cover relative h-[400px]">

                            <img
                                src="/images/pokemon_bg.png"
                                className='absolute h-[auto] max-h-[400px] w-full 
                                aspect-square translate-x-[-50%] translate-y-[-50%]
                                top-[50%] left-[50%]'
                                alt=""
                            />
                            <img
                                className="absolute rounded-t-lg h-[60%] sm:h-[250px] p-[40px] 
                                translate-x-[-50%] translate-y-[-50%]
                                top-[50%] left-[50%]"
                                src={pokemon.data.image}
                                alt="pokemon image" />

                        </div>

                        <div className="grid grid-flow-row pt-5 bg-[#253641] rounded-[20px] p-[20px] my-[20px]">
                            <div className='flex justify-between'>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
                                    {pokemon.data.name}
                                </h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    #{pokemon.data.id}
                                </h5>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[20px] mb-[15px]'>
                                <div>
                                    <div className='flex gap-x-[10px]'>
                                        <div className='text-[#4CAFEB] font-semibold'>Height</div>
                                        <div className='text-white'>{(pokemon.data.height / 10).toFixed(1)} m</div>
                                    </div>
                                    <div className='flex gap-x-[10px]'>
                                        <div className='text-[#4CAFEB] font-semibold'>Weight</div>
                                        <div className='text-white'>{(pokemon.data.weight / 10).toFixed(1)} kg</div>
                                    </div>
                                </div>
                                <div className='flex justify-start sm:justify-end gap-2 mt-[16px] '>
                                    {pokemon.data.types && pokemon.data.types.map((item) => {
                                        return <span key={item.type.name} className={`badge-type-${item.type.name} px-[14px] py-1 rounded-[10px]`} >
                                            {item.type.name}
                                        </span>
                                    })}
                                </div>
                                <div>
                                    <h5 className='text-white font-semibold'>Abilities</h5>
                                    <div className='grid grid-cols-2 sm:grid-cols-1 gap-[10px] mt-[16px]'>
                                        {pokemon.data.abilities && pokemon.data.abilities.map((item) => {
                                            return (
                                                <div className={`bg-[#4CAFEB] px-[14px] py-1 rounded-[20px] `} >
                                                    {item.ability.name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <h5 className='text-white font-semibold'>Stats</h5>
                                    <div className='space-y-1'>
                                        {pokemon.data.stats && pokemon.data.stats.map((item) => {
                                            return (
                                                <div className='flex gap-x-[10px] justify-between'>
                                                    <div className='text-[#4CAFEB] font-semibold capitalize'>{item.stat.name}</div>
                                                    <div className='text-white'>{item.base_stat}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div >

                )}
            </div>
        </div>
    )
}

export default DetailPage



