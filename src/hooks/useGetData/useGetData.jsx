import { useCallback, useEffect, useState } from 'react';

const useGetData = ({
    url,
    method = "GET",
    body,
    fetchFirst = true
}) => {

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null
    })


    const fetchData = useCallback(
        async (inputUrl = "", inputBody) => {
            try {
                setState({ data: null, error: null, loading: true });

                const response = await fetch(inputUrl || url, {
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

        }, [url, method, body])

    useEffect(() => {

        fetchFirst && fetchData();

    }, [])

    return ({ ...state, fetchData });
}

export default useGetData