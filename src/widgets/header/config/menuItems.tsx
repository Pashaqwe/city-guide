import Link from "next/link";

const menuItems = [
  { key: "city", label: <Link href="/city">Города</Link> },
  { key: "favorites", label: <Link href="/favorites">Избранное</Link> },
];

export default menuItems;
