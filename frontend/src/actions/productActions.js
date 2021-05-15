import Axios from "axios";
import { PRODUCT_LIST_REQUEST } from "../constants/producConstants"

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/products');
    } catch(error){

    }
}