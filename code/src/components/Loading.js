import React from "react"
import {useSelector} from "react-redux"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'



export const Loading = () => {
    const isLoading = useSelector((state) => state.ui.isLoading)

    return(
        <>
        {isLoading && <div>
            <Loader type='Puff' color='#FF0000' height={200} width={200} />
        </div>}
        </>
    )
}