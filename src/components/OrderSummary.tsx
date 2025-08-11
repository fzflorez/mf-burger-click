import { formatCurrency } from "../helpers";

type OrderSummaryProps = {
  label: string
  amount: number
  className?: string
  textColor?: string
}

export default function OrderSummary({label, amount, className, textColor}: OrderSummaryProps) {
  return (
    <div className="flex justify-between">
      <p className={`text-base sm:text-lg text-gray-500 ${className}`}>{label}:</p>
      <p className={`text-base sm:text-lg font-semibold ${textColor}`}>{formatCurrency(amount)}</p>
    </div>
  )
}
