import React from 'react';
import Head from "next/head";

export const getStaticProps = async () => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();

    return {
        props: {
            ninjas: data
        }
    };
}

const Index = ({ninjas}) => (
    <>
        <Head>
            <title>NinjaList | NinjaList</title>
            <meta name="keywords" content="ninjas" />
        </Head>
        <div>
            <h1>Ninjas INDEX</h1>
            {ninjas.map(ninja => (
                <div key={ninja.id}>
                    <a>
                        <h3>{ninja.name}</h3>
                    </a>
                </div>

            )  )}
        </div>
    </>
);

export default Index;