import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className='h-[calc(100vh-100px)] flex justify-center items-center flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Заявка успешно создана!</h1>
      <p className='text-xl'>Вы сможете посмотреть статус заявки в <Link href='/dashboard' className='underline'>личном кабинете</Link></p>
    </section>
  )
}
export default SuccessPage;