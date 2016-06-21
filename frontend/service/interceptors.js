import token from './token';

export default function () {
    let timeId = setInterval(() => {
        console.log('(http)Loading..');
    }, 10);
    return {
        request: (request) => {
            request.headers = {
                'x-access-token': token.getToken() || ''
            };
            return request;
        },
        response: (response) => {
            clearTimeout(timeId);
            showdev('Get http data!');
            showdev(response.data);
            return response;
        }
    };
}

