import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import Cards from '../components/cards'
import DashBoard from '../components/DashBoard'
import UserActivity from '../components/UserActivity'

export default function Home() {
  return (
     <Main>
        <DashBoard/>
        <UserActivity/>

      </Main>
    
  )
}
