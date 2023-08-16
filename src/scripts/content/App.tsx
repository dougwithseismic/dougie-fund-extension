import React, { useEffect, useState } from 'react'
import { isMonetizable, monetizeUrl } from 'monetize-this'
import isAlreadyMonetized from '../helpers/is-already-monetized'
import setCookieForMonetized from '../helpers/set-cookie-for-monetized'
import Confetti from 'react-confetti'
const App = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [details, setDetails] = useState({} as any)
    const [showConfetti, setShowConfetti] = useState(false)

    useEffect(() => {
        // 1. Check if the url is monetizable. If so, show the overlay.
        const checkMonetizable = async () => {
            const alreadyMonetized = isAlreadyMonetized()
            if (alreadyMonetized) {
                return
            }

            const response = await isMonetizable(window.location.href)

            if (response) {
                toggleIsOpen(true)
            }
        }

        checkMonetizable()
    }, [])

    const toggleIsOpen = (open?: boolean) => {
        setIsOpen(open ?? !isOpen)
    }

    const handleDrop = async () => {
        try {
            monetizeUrl(window.location.href)
            setCookieForMonetized()
            setShowConfetti(true) // Trigger the confetti!

            // Optionally, you can hide the confetti after a few seconds
            setTimeout(() => {
                setShowConfetti(false)
                toggleIsOpen(false)
            }, 3000)
        } catch (error) {
            toggleIsOpen(false)
        }
    }

    return (
        <>
            <div className="fixed bottom-0 right-0 p-4">
                {isOpen && (
                    <div className="inline-flex items-center justify-center h-16 rounded-full">
                        <div className="inline-flex items-center justify-end p-2 rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-400">
                            <div className="inline-flex flex-col self-stretch justify-center gap-2 px-4">
                                <div className="font-normal leading-tight tracking-wider text-white text-normal">
                                    {showConfetti ? (
                                        '🎉 Thank you! 🎉🏁'
                                    ) : (
                                        <>
                                            <p>
                                                Hey, Did you know that If you end up
                                                buying here, you can support me with an affiliate commission?
                                            </p>
                                            <p>If you want to, click the button! It costs nothing :)</p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="inline-flex items-start self-stretch justify-start p-4 px-8 duration-200 bg-white rounded-full cursor-pointer hover:bg-gothamBlack-50">
                                <div
                                    className="text-base font-bold text-center text-black cursor-pointer"
                                    onClick={() => handleDrop()}
                                >
                                    Support Doug
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showConfetti && <Confetti />}
            </div>
        </>
    )
}

export default App
