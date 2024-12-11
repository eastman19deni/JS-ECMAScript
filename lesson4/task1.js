async function getUserData(userId) {
    try {
        const response = await
            fetch(`https://gb.ru/lessons/459627/homework/${userId}`)

        if (!response.ok) {
            throw new Error('User can"t join')
        }
        const userData = await response.json()
        return userData
    } catch (error) {
        return Promise.reject(error.message)
    }
}

getUserData(1)
    .then(user => console.log(user))
    .catch(error => console.log(error))