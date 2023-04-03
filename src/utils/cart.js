
export const totalPrice = (count, price, discount) => {

  return (
    count * price * (1 - discount / 100)
  )
}