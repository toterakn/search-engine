export interface Joke {
    id: string
    joke: string
}

export interface Result {
    current_page: number
    limit: number
    next_page: number
    previous_page: number
    results: Joke[]
    search_term: string
    status: number
    total_jokes: number
    total_pages: number
}

export type PageType = 'next' | 'prev'