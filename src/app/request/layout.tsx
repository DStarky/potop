const RequestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>

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
