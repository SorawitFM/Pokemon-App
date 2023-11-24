export interface IpokemonListItem {
    name: string
    url: string
}

export interface IpokemonListResponse {
    count: number
    next: string
    previous: null
    results: IpokemonListItem[]
}


