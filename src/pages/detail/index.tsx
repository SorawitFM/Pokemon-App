import React from 'react'

const DetailPage = () => {
    return (
        <div className='w-[90%] m-[auto] max-w-[1100px]'>
            <div className='flex justify-center'>
                <img
                    src="/images/logo.webp"
                    className='max-h-[80px] mt-[20px]'
                    alt=""
                />
            </div>

            <div className='grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[40px]'>
                {/* {pokemon.data?.map((item) => {
                    return <PokemonCard
                        image={item.image || ''}
                        name={item.name}
                        id={item.id}
                        types={item.types}
                    />
                })} */}
            </div>
        </div>

    )
}

export default DetailPage