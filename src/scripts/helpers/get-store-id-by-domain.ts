const getStoreIdByDomain = (domain: string): Promise<string | null> => {
    const url = `https://d.joinhoney.com/v3?operationName=ext_getStorePartialsByDomain&variables={"domain":"${domain}"}`

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            // Accessing the storeId from the response
            return data.getPartialURLsByDomain[0]?.storeId || null
        })
        .catch(error => {
            console.error('Error fetching store partials by domain:', error)
            return null
        })
}

export default getStoreIdByDomain