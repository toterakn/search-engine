//Query Params for Search request
// https://icanhazdadjoke.com/api#search-for-dad-jokes
// page - which page of results to fetch (default: 1)
// limit - number of results to return per page (default: 20) (max: 30)
// term - search term to use (default: list all jokes)

export const BASE_URL = 'https://icanhazdadjoke.com/search'

export const headers = { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export const method = 'GET'

export const JOKE_LIMIT = 3