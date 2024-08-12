import React, { useState } from 'react'
import playStore from '../assets/google-play.jpeg'
import { Link } from 'react-router-dom'
import { FaCopy } from 'react-icons/fa'
import { FaRegCopy } from 'react-icons/fa'
import skateMan from '../assets/skate.png'

const Body = () => {
  const walletAddress = '8EGkaTTM2fdKFrZhk8gWiVWShWTRmBXqcoHxJphJ3qTV'
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // Secure context required for clipboard API on some browsers
        await navigator.clipboard.writeText(walletAddress)
        setIsCopied(true)
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = walletAddress
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setIsCopied(true)
      }

      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
  return (
    <div className="mt-20 flex flex-col w-[300px] md:w-[550px] mx-auto">
      <div className="text-white mx-auto text-2xl font-semibold">
        <h1 className="flex text-center text-red-700 md:text-3xl uppercase">
          Watch Live Events From Your Phone
        </h1>
      </div>
      <div className="mt-10 text-white text-center uppercase">
        The Livestream app grants you mobile access to go live to your events,
        find us on Solana now.
      </div>
      <div className="flex flex-col text-white mt-8">
        <h1 className="text-center text-3xl font-bold uppercase">Contact</h1>
        <div className="flex items-center item border border-gray-500 mt-5 px-5 pb-3 rounded-lg mx-auto">
          <h1 className="mt-5 break-all text-xs sm:text-lg text-center">
            {walletAddress}
          </h1>
          <div className="">
            <FaRegCopy
              className="ml-2 cursor-pointer hover:text-gray-700 h-[20px] w-[20px] text-white mt-4"
              onClick={copyToClipboard}
              title="Copy Wallet Address"
            />
            {/* {isCopied && <span className="ml-2 text-sm text-black">Copied!</span>} */}
          </div>
        </div>
      </div>
      <Link
        to={
          'https://play.google.com/store/apps/details?id=com.livestream.livestream'
        }
        target="_blank"
        className="mt-10 mx-auto"
      >
        <img src={playStore} alt="" className="h-[60px]" />
      </Link>
      <div className="h-[400px] md:h-[600px]">
        <img src={skateMan} alt="" className="h-full w-full" />
      </div>
    </div>
  )
}

export default Body
