export function getUserId() {
    
    const localStorageUserId = localStorage.getItem("userId");

    return localStorageUserId
}