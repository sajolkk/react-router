import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sajolkk')
    //         .then(response => response.json())
    //         .then(data => setData(data));
    // }, [])

    const data = useLoaderData();
    return (
        <>
            <div className='bg-slate-700 py-3 text-white'>
                <h1 className='text-center font-bold text-3xl'>Github Followers: {data.followers}</h1>
                <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>
        </>
    )
}

export default Github;

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sajolkk');
    return response.json();
}