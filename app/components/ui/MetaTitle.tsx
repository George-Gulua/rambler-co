import React, { FC } from 'react'
import Head from 'next/head'

interface MetaTitleInterface {
    title: string
}

const MetaTitle: FC<MetaTitleInterface> = ({ title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
        </div>
    )
}

export default MetaTitle
