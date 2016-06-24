import token from './token';

export default function () {
    let timeId = setInterval(() => {
        logger('(http)Loading..');
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
            logger('Get http data!', ()=>{
                console.log(response.data);
            });
            return response;
        }
    };
}

