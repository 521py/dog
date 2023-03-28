
export const totalPrice = (count, price, discount) => {

    return (
        count * price * (discount / 100)
    )
}