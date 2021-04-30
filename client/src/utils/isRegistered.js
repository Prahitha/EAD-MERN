const isRegistered = (event) => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const userId = user._id;

    return event.registeredUsers.includes(userId);
}

export default isRegistered;