import axios from "axios" 

export const FETCH_AOEII_START = "FETCH_AOEII_START";
export const FETCH_AOEII_SUCCESS = "FETCH_AOEII_SUCCESS";
export const FETCH_AOEII_FAILURE = "FETCH_AOEII_FAILURE";

export const fetchCivs = () => dispatch => {
    dispatch({ type: FETCH_AOEII_START });
    axios 
        .get("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
        .then((res) => {
            console.log(res)
            dispatch({
                type: FETCH_AOEII_SUCCESS,
                payload: res.data.results
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_AOEII_FAILURE, payload: err.response})
        })

}