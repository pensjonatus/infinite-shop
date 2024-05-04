function formatNumberAsCurrency(number: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(number);
}

export default function CurrencyDisplay({ amount }: { amount: number }) {
  return <>{formatNumberAsCurrency(amount)}</>;
}
