const baseURL = 'http://localhost:9000/api/cards/';

export const getCards = () => {
    return fetch(baseURL)
    .then(res => res.json());
};

export const getCard = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json());
};