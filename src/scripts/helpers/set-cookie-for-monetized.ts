import { COOKIE_NAME } from './constants'

const setCookieForMonetized = (): void => {
    const hostname = window.location.hostname
    const expiryDate = new Date()
    expiryDate.setTime(expiryDate.getTime() + 72 * 60 * 60 * 1000) // 72 hours from now
    const expires = 'expires=' + expiryDate.toUTCString()
    document.cookie = `${COOKIE_NAME}=${hostname};${expires};path=/`
}

export default setCookieForMonetized