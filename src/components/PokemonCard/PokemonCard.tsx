import React from 'react'
import { IpokemonDetailResponse } from '@/interface/pokemonDetail'

interface PokemonCardProp {
    data: IpokemonDetailResponse
}

const PokemonCard = ({ data }: PokemonCardProp) => {
    return (


        <div className="bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[10px] max-w-[275px] m-[auto]">
            <div className="bg-[url('/images/poke-card-bg.png')] bg-center aspect-square w-full bg-cover">
                <a href="#" className="bg-[url('/images/poke-card-bg.png')]">
                    <img className="rounded-t-lg h-[218px] p-[40px] w-full" src={data.image} alt="" />
                </a>
            </div>

            <div className="p-5">
                <div className='flex justify-between'>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
                        {data.name}
                    </h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        #{data.id}
                    </h5>
                </div>
                <div className='flex justify-end gap-2 mt-[16px] '>
                    {data.types.map((item) => {
                        return <span className={`badge-type-${item.type.name} px-[14px] py-1 rounded-[10px]`} >
                            {item.type.name}
                        </span>
                    })}

                </div>

            </div>
        </div >


    )
}

export default PokemonCard