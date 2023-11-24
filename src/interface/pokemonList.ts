
export interface IpokemonListResponse {
    count: number
    next: string
    previous: null
    results: IpokemonListItem[]
}
export interface IpokemonListItem {
    name: string
    url: string
}

