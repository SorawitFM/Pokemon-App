import React from 'react'
import { Type } from '@/interface/pokemonDetail'
import { Link } from 'react-router-dom'

interface PokemonCardProp {
    image: string
    name: string
    id: number
    types: Type[]
}

const PokemonCard = ({ image, name, id, types }: PokemonCardProp) => {
    return (


        <div className="bg-white rounded-lg shadow dark:bg-gray-800 
        dark:border-gray-700 p-[10px] max-w-[275px] m-[auto] w-full">
            <div className="bg-[url('/images/poke-card-bg.png')] bg-center aspect-square w-full bg-cover">
                <Link to={`/detail/${name}`} className="bg-[url('/images/poke-card-bg.png')]">
                    <img className="rounded-t-lg h-[218px] p-[40px] w-full" src={image} alt="" />
                </Link>
            </div>

            <div className="p-5">
                <div className='flex justify-between'>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
                        {name}
                    </h5>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        #{id}
                    </h5>
                </div>
                <div className='flex justify-end gap-2 mt-[16px] '>
                    {types.map((item) => {
                        return <span key={item.type.name} className={`badge-type-${item.type.name} px-[14px] py-1 rounded-[10px]`} >
                            {item.type.name}
                        </span>
                    })}

                </div>

            </div>
        </div >


    )
}

export default PokemonCard