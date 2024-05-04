export default function CartBadge({ itemCount }: { itemCount: number }) {
  if (itemCount > 100) {
    return <>💰</>;
  }
  if (itemCount > 500) {
    return <>🤑</>;
  }
  if (itemCount > 1000) {
    return <>👑</>;
  }
  return null;
}
