import { useCallback, useEffect, useState } from 'react';
import { getParams } from './meta/utils';

const useGetData = ({
    url,
    method = "GET",
    body = null,
    fetchFirst = true,
    onSuccess,
    onFailur,
    params,
    pageNumber,
}) => {

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null
    })

    const fetchData = useCallback(
        async (inputUrl, inputParams = {}, inputPageNumber) => {
            try {
                setState({ data: null, error: null, loading: true });

                const response = await fetch(`${inputUrl || url}?${getParams(params) || getParams(inputParams)}${inputPageNumber ? `&page=${inputPageNumber}` : pageNumber ? `&page=${pageNumber}` : ""
                    }`, {
                    method,
                    body: body ? JSON.stringify(body) : null,
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setState({ data, error: null, loading: false });
                onSuccess && onSuccess(data)
            } catch (err) {
                setState({ data: null, error: err.message, loading: false });
                onFailur && onFailur(err)
            }

        }, [url, method, body, onSuccess, onFailur])

    useEffect(() => {

        fetchFirst && fetchData();

    }, [])

    return ({ ...state, fetchData });
}

export default useGetData