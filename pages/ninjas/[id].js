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


const Detail = ({}) => {
    return (
        <div>
            <h1>Detail Page for </h1>
        </div>
    );
};

export default Detail;
