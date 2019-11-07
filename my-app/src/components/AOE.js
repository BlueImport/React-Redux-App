import React, {useState, useEffect} from "react"
import axios from "axios"


const AOE = (props) => {
    const [civ, setCiv] = useState("")

    useEffect(() => {
        axios
            .get(props.url)
            .then(res =>{
                console.log(res.data)
                setCiv(res.data)
            })
    }, []
    )


    return(
        <div>
            <p>{civ.name}</p>
           
        </div>
    )

}

export default AOE; 