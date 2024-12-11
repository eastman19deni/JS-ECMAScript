async function saveUserData(user) {

    try {
        const response = await fetch('https://gb.ru/lessons/459627/homework', {
            method: 'POST', headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(user),
        })
        if (!response.ok) {
            throw new Error('Failed to save user data')
        }
    } catch (error) {
        return Promise.reject(error.message)
    }

}

const user = {
    name: 'Ewan Resss',
    age: 30,
    email: 'Ewan@gmail.com '
}

saveUserData(user)
    .then(() => {
        console.log('User data saveds successfully')
    })
    .catch(error => {
        console.error(error)
    })
