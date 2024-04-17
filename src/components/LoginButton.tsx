import { login } from '@/services/auth';
import { Button } from './ui/button';

export default function LoginButton({ text = 'Войти', action = login }) {
  return (
    <form action={action}>
      <Button>{text}</Button>
    </form>
  );
}
