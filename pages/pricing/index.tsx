import Link from 'next/link';
import React from 'react';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function pricing () {
    return (
        <>
            <MainLayout>
                <h1 className={'title-home'}>
                    Pricing
                    Ir a <Link href='/about'>about</Link>
                </h1>
            </MainLayout>
        </>
    )
}