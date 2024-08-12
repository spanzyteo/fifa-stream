import React, { useState } from 'react'
import playStore from '../assets/google-play.png'
import { Link } from 'react-router-dom'
import { FaCopy } from 'react-icons/fa'

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
    <div className="mt-20 flex flex-col ml-10 md:ml-20 w-[300px] md:w-[450px]">
      <div className="text-3xl font-bold flex">
        <h1 className="w-[250px] md:w-[400px] break-all">{walletAddress}</h1>
        <div className='flex flex-col'>
          <FaCopy
            className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700 h-[20px] w-[20px]"
            onClick={copyToClipboard}
            title="Copy Wallet Address"
          />
          {isCopied && <span className="ml-2 text-sm text-black">Copied!</span>}
        </div>
      </div>
      <div className="mt-10 font-semibold ">
        The Livestream app grants you mobile access to go live to your events,
        find us on solana now
      </div>
      <Link
        to={
          'https://play.google.com/store/apps/details?id=com.livestream.livestream'
        }
        className="mt-10 mb-2"
      >
        <img src={playStore} alt="" className="h-[60px]" />
      </Link>
      <div className="md:mt-[7.5rem] mt-[14rem]"></div>
    </div>
  )
}

export default Body
