const ADR_REST_SRV = 'http://localhost:5629';
//const ADR_REST_SRV='http://86.195.10.30:5629/';
export const getMessages = (callback) => {
    fetch(ADR_REST_SRV + '/public_messages')
        .then((fluxReponse) => { return fluxReponse.json() })
        .then((fluxjson) => {
            callback(fluxjson);
            return fluxjson;
        })
}
export const getMessagesFrom = (id, callback) => {
    id += 1;
    fetch(`${ADR_REST_SRV}/public_messages?id_gte=${id}`)
        .then((fluxReponse) => { return fluxReponse.json() })
        .then((fluxjson) => {
            callback(fluxjson);
            return fluxjson;
        })
}
export const postMessages = (objet, callback) => {
    fetch(ADR_REST_SRV + '/public_messages',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.parse(objet)
        }
    )
        .then((fluxReponse) => { return fluxReponse.json() })
        .then((fluxjson) => {
            callback(fluxjson);
            return fluxjson;
        })
}