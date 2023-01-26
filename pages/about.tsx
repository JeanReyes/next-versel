import Link from 'next/link';
import React from 'react';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function about () {
    return (
        <>
            <h1 className={'title-home'}>
                Ir a <Link href='/'>index</Link>
            </h1>
        </>
    )
}

about.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}