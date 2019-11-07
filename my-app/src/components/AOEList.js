import React, {useEffect} from "react"
import {connect} from "react-redux"
import AOE from "./AOE"
import {fetchCivs} from "../actions/actions"

const AOEList = (props) => {
    useEffect(() => {
        props.fetchCivs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.fetchCivs])

    console.log(props.civ)

    return (
        <div style={{display: "flex", flexDirection: "row", width: 400}}>
            {props.civ.map(civ => {
                return <AOE civ={civ} url={civ.url}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        civ: state.civ
    }
}

export default connect(mapStateToProps, {fetchCivs})(AOEList) 