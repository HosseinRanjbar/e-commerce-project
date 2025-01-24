import { useCallback, useEffect, useState } from 'react';
import { getParams } from './meta/utils';

const useGetData = ({
    url,
    method = "GET",
    body = null,
    fetchFirst = true,
    onSuccess,
    onFailur,
    params = {},
    page,
    pageSize
}) => {

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null
    })



    const fetchData = useCallback(
        async (inputUrl, inputParams = {}, inputPage, inputPageSize) => {
            return new Promise(async (resolve, reject) => {

                setState({ data: null, error: null, loading: true });

                //TODO: check the last character is "?" or not
                await fetch(`${inputUrl || url}?${getParams(params) + getParams(inputParams)}${inputPage ? `&page=${inputPage}` : page ? `&page=${page}` : ""}${inputPageSize ? `&limit=${inputPageSize}` : pageSize ? `&limit=${pageSize}` : ""}`, {
                    method,
                    body: body ? JSON.stringify(body) : null,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    return response.json()

                }).then((data) => {
                    setState({ data, error: null, loading: false });
                    onSuccess && onSuccess(data)
                    resolve(data)
                }).catch((err) => {
                    setState({ data: null, error: err.message, loading: false });
                    onFailur && onFailur(err)
                    reject(err)
                })

            })


        }, [url, method, body])

    useEffect(() => {

        fetchFirst && fetchData();

    }, [])

    return ({ ...state, fetchData });
}

export default useGetData