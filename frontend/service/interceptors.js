export default function () {
    let timeId = setInterval(() => {
        console.log('Loading..');
    }, 10);
    return {
        request: (request) => {
            request.headers = {
                'x-access-token': 'secret'
            };
            return request;
        },
        response: (response) => {
            clearTimeout(timeId);
            showdev(response.data);
            return response;
        }
    };
}

