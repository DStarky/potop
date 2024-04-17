import { Button } from '../ui/button';

interface FinishFormI {
  finishFn: () => void;
}

const FinishForm = ({
  finishFn,
}: FinishFormI & { children?: React.ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <p>Нажимая на кнопку я подтверждаю, что введенные данные верны</p>
      <Button type='submit' onClick={() => finishFn()}>
        Отправить заявку
      </Button>
    </div>
  );
};
export default FinishForm;
