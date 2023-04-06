import { useEffect, useState } from "react"
import { getGifs } from "../helper/getGifs";


export const useFetchGifs = (category: any) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        setTimeout(() =>
            getGifs(category).then(

                (images) => {
                    console.log(images);
                    setState({
                        data: images,
                        loading: false
                    })
                }
            )
            , 3000);
    }, [])

    return state;
}