import React from "react"

interface ErrorMessageProps {
  error: string
}

export function Error({error}: ErrorMessageProps) {
  return(
    <h2 className='text-center text-red-600'>{error}</h2>
  )
}