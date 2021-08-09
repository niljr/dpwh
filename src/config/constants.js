// env config
export const config = {
    apiUrl: process.env.REACT_APP_API_HOST,
    // oAuthService: 'oauth2-service/',
    users: 'users/',
    authenticate: 'authenticate/',
    tasks: 'tasks/',
    clientCredentialInternal: process.env.REACT_APP_CLIENT_CREDENTIALS_INTERNAL
};

// keys for localstorage
export const storageKey = {
    accessToken: 'dpwh_accesstoken',
    sidebarState: 'sidebarState'
};
