export interface IpokemonListResponse {
    data: object
    count: number
    next: string
    previous: null
    results: []
}


export interface IpokemonListItem {
    name: string
    url: string
}