const baseUrl = 'https://front-test-api.herokuapp.com';

export const fetchWithOutToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`
    
    if ( method === 'GET' ) {
        return fetch(url);
    } else if ( method === 'POST' ) {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}