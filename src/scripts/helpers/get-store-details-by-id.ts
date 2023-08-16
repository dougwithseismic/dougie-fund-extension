const getSToreDetailsById = (storeId: string) => {
    const url = `https://d.joinhoney.com/v3?operationName=ext_getStoreById&variables={"storeId":"${storeId}","maxUGC":3,"successCount":1}`

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            // You can access the data here
            console.log(data)
        })
        .catch(error => {
            console.error('Error fetching store:', error)
        })
}

export default getSToreDetailsById
