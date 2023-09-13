import Link from "next/link"

interface MenuItemProps {
    title: string,
    link: string,
    Icon: string
}

export default function MenuItem({
    title,
    link,
    Icon
} : MenuItemProps) {
  return (
    <Link href={link} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2">{title}</p>
    </Link>
  )
}
