const RequestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='w-full bg-red-300 p-2'>
        <p className='text-center'>
          <strong>Внимание!</strong> Согласование заявки возможно только при
          условии внесения предпринимателя в перечень пострадавших в результате
          ЧС. Заявку на внесение в указанный перечень можно оставить на сайте{' '}
          <a
            href='https://forms.yandex.ru/u/6616587ceb614602b5cd8495/'
            className='underline'
          >
            https://forms.yandex.ru/u/6616587ceb614602b5cd8495/
          </a>
        </p>
      </div>
      <section className='p-12'>
        <h2 className='mb-12 text-center text-2xl font-bold'>
          Создание заявки на получение поддержки
        </h2>
        {children}
      </section>
    </>
  );
};
export default RequestLayout;
