export const depositMoney = (amount) => {
    console.log(amount)
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payLoad: amount,
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payLoad: amount,
        })
    }
}

