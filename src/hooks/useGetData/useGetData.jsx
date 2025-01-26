import { useCallback, useEffect, useRef, useState } from 'react';
import { getParams } from './meta/utils';
import useSnackBar from '../useSnackBar/useSnackBar';

const useGetData = ({
    url,
    method = "GET",
    body = null,
    fetchFirst = true,
    onSuccess,
    onFailur,
    params = {},
    page,
    pageSize,
}) => {

    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null
    })

    const { open } = useSnackBar()

    const fetchFirstRef = useRef(true)

    const fetchData = useCallback(
        (inputUrl, inputParams = {}, inputPage, inputPageSize) => {
            return new Promise((resolve, reject) => {

                setState({ data: null, error: null, loading: true });

                //TODO: check the last character is "?" or not
                fetch(`${inputUrl || url}?${getParams(params) + getParams(inputParams)}${inputPage ? `&page=${inputPage}` : page ? `&page=${page}` : ""}${inputPageSize ? `&limit=${inputPageSize}` : pageSize ? `&limit=${pageSize}` : ""}`, {
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
                    open({
                        type: "error",
                        message: err?.message,
                    })
                })

            })


        }, [url, method, body, fetchFirst])

    useEffect(() => {

        if (fetchFirstRef.current) {
            fetchFirstRef.current = false
            fetchFirst && fetchData(url, params)
            return
        } else {
            fetchData(null, null)
            return
        }
    }, []);


    return ({ ...state, fetchData });
}

export default useGetData