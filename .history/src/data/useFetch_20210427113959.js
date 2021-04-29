import {useEffect } from 'react';

const useFetch = () => {
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
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
        }, 1000)
        }, []);

}