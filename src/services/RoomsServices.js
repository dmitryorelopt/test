export class RoomsServices {
    static getAllRooms() {
        return fetch('http://localhost:1337', {
            method: 'GET',
        })
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.indexOf('application/json') !== -1) {
                        return response.json();
                    }
                    console.error('Response data is not json.');
                    return Promise.resolve([]);
                }
            })
            .catch(error => {
                console.error(error);
                return Promise.resolve([]);
            });
    }
}
