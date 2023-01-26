import { Inter } from '@next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <MainLayout>
            <h1 className={'title-home'}>
                Ir a <Link href='/about'>about</Link>
            </h1>
        </MainLayout>
    )
 }
