import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center pt-5">
        <h1 className="text-6xl font-bold">Oй ой ой,</h1>
        <h1 className="text-6xl font-bold">Oт Халепа!!!</h1>
        <h1 className=" text-6xl font-bold">Перейти на</h1>
        <Link className="flex text-6xl font-bold underline text-red-700" href='/'>Головну сторінку</Link>
    </div>
  )
}

export default NotFoundPage;