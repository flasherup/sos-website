export const retrieveError = (payload:any) => {
    let res = '';
    if (payload.hasOwnProperty('status')) {
        res += 'Status: ' + payload.status;

    }
    if (payload.hasOwnProperty('data')) {
        const data = payload.data;
        if (data && data.hasOwnProperty('error')) {
            res +=  ', Message: ' + data.error;
        }

    }

    return res;
}