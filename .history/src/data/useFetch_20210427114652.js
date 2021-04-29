import {useEffect, useState } from 'react';

const useFetch = () => {

    const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const blog = 'http://localhost:4000/posts';
    useEffect(() => {
        setTimeout(() => {
            fetch(blog)
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