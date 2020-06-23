export const isAuthenticated = () => {
    var acesso = localStorage.getItem('token');
    return acesso;
}