import React from 'react';


export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString()}
        }
    });

    return {
        paths,
        fallback: false
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    return {
        props: {ninja: data }
    };
}

const Detail = ({ninja}) => {
    return (
        <div>
            <h1>Detail Page for {ninja.name}</h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>
        </div>
    );
};

export default Detail;
