"use client"

import { useRouter, useSearchParams } from 'next/navigation'


const AuthCallBack = () => {
   const router = useRouter()

  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')
  return (
    <div>{origin}</div>
  )
}

export default AuthCallBack;