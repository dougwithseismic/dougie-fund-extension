
import { COOKIE_NAME } from './constants'

const isAlreadyMonetized = (): boolean => {
    const name = `${COOKIE_NAME}=`
    const hostname = window.location.hostname
    const decodedCookie = decodeURIComponent(document.cookie)
    const cookieArray = decodedCookie.split(';')

    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length) === hostname
        }
    }

    return false
}


export default isAlreadyMonetized