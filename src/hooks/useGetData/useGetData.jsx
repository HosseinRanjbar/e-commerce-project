import { useEffect, useState } from 'react';

const useGetData = ({
    url,
    method = "GET",
    body
}) => {

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null
    })

    useEffect(() => {
        setState({ data: null, error: null, loading: true });

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method,
                    body,
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setState({ data, error: null, loading: false });
            } catch (error) {
                setState({ data: null, error: error.message, loading: false });

            }

        }
        fetchData();

    }, [url, method, body])

    return state;
}

export default useGetData