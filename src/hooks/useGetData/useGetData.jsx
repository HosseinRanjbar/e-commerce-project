import { useCallback, useEffect, useRef, useState } from 'react';
import { getParams, constructQueryString } from './meta/utils';
import useSnackBar from '../useSnackBar/useSnackBar';

const useGetData = ({
    url,
    method = "GET",
    body = null,
    fetchFirst = true,
    onSuccess,
    onFailure,
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
    const isFetchingRef = useRef(false)

    const fetchData = useCallback(
        async (inputUrl, inputParams = {}, inputPage, inputPageSize) => {
            if (isFetchingRef.current) return;
            isFetchingRef.current = true;

            return new Promise(async (resolve, reject) => {

                setState({ data: null, error: null, loading: true });

                const queryString = constructQueryString(params, inputParams, inputPage, page, inputPageSize, pageSize);

                fetch(`${inputUrl || url}${queryString}`, {
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
                    onFailure && onFailure(err)
                    reject(err)
                    open({
                        type: "error",
                        message: err?.message,
                    })
                }).finally(() => {
                    isFetchingRef.current = false;
                });

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