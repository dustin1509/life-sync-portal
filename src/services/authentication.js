export function signUp(options) {
    if (!(options.body instanceof FormData)) {
        options.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            ...options.headers,
        };
        options.body = JSON.stringify(options.body);
    } else {
        options.headers = {
            Accept: 'application/json',
            ...options.headers,
        };
    }
    fetch("http://localhost:8081/life-sync/api/authentication/sign-up", options)
        .then(response => response.json())
}

export function signIn(options) {
    if (!(options.body instanceof FormData)) {
        options.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            ...options.headers,
        };
        options.body = JSON.stringify(options.body);
    } else {
        options.headers = {
            Accept: 'application/json',
            ...options.headers,
        };
    }
    fetch("http://localhost:8081/life-sync/api/authentication/sign-in", options)
        .then(response => response.json())
}