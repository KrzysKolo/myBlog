import {useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res =>{
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
        }, 1000)
        }, []);
        return {data, isLoading, error}
}
export default useFetch;