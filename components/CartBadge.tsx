import jeff from "@/public/jeff.png";
import Image from "next/image";

export default function CartBadge({ itemCount }: { itemCount: number }) {
  if (itemCount === 69) {
    return <>❤️</>;
  }

  if (itemCount >= 100) {
    return <>💰</>;
  }

  if (itemCount >= 500) {
    return <>🤑</>;
  }

  if (itemCount >= 1000) {
    return <>👑</>;
  }

  if (itemCount >= 5000) {
    return <>💎</>;
  }

  if (itemCount >= 10000) {
    return <>🥇</>;
  }

  if (itemCount >= 50000) {
    return <>🏆</>;
  }

  if (itemCount >= 100000) {
    return <>🤩</>;
  }

  if (itemCount >= 500000) {
    return <>🦁</>;
  }

  if (itemCount >= 1000000) {
    return <>🙌</>;
  }

  if (itemCount >= 5000000) {
    return <>🤑🤑</>;
  }

  if (itemCount >= 10000000) {
    return <>🤑🤑🤑</>;
  }

  if (itemCount >= 50000000) {
    return <>🧐</>;
  }

  if (itemCount >= 100000000) {
    return (
      <Image
        width={16}
        height={16}
        src={jeff}
        alt="a symbol of avarice"
        className="inline"
      />
    );
  }

  return null;
}
