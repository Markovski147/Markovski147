export const calcTotalPrice = (total: number, price: number, quantity: number) => {
  return total + price*quantity;
}