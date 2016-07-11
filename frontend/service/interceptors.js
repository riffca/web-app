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
            logger('Http request!', ()=>{
                console.log(request.data);
            });
            logger(request.method + ' ' + request.url);

            return request;
        },
        response: (response) => {
            clearTimeout(timeId);


            logger('Http response!', ()=>{
                console.log(response.data);
            });
            //траблы если передавать response.data
            return response;
        }
    };
}

