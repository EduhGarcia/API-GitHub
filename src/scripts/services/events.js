import { baseUrl, repositoriesQuantity } from "../variables.js"

async function userEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { userEvents }