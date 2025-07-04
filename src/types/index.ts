export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
}

export type OrderItem = MenuItem & {
  quantity: number
}