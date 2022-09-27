import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter()
  
  React.useEffect(()=>{
    router.push('household')
  })

  return (
    <>
    </>
  )
}

export default Home
