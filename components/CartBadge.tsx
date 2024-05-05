import jeff from "@/public/jeff.png";
import Image from "next/image";

export default function CartBadge({ itemCount }: { itemCount: number }) {
  switch (true) {
    case itemCount === 69:
      return <>❤️</>;
    case itemCount === 420:
      return <>🌿</>;
    case itemCount === 666:
      return <>😈</>;

    case itemCount >= 100000000:
      return (
        <Image
          width={16}
          height={16}
          src={jeff}
          alt="a symbol of avarice"
          className="inline"
          unoptimized
        />
      );
    case itemCount >= 50000000:
      return <>🧐</>;
    case itemCount >= 10000000:
      return <>🤑🤑🤑</>;
    case itemCount >= 5000000:
      return <>🤑🤑</>;
    case itemCount >= 1000000:
      return <>🙌</>;
    case itemCount >= 500000:
      return <>🦁</>;
    case itemCount >= 100000:
      return <>🤩</>;
    case itemCount >= 50000:
      return <>🏆</>;
    case itemCount >= 10000:
      return <>🥇</>;
    case itemCount >= 5000:
      return <>💎</>;
    case itemCount >= 1000:
      return <>👑</>;
    case itemCount >= 500:
      return <>🤑</>;
    case itemCount >= 100:
      return <>💰</>;

    default:
      return null;
  }
}
