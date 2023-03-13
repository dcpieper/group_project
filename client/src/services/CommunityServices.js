const baseURL = 'http://localhost:9000/api/notices/'

export const getNotices = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postNotice = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteNotice = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
