import LoginButton from '@/components/LoginButton';
import { loginAsAdmin, loginAsCommittee } from '@/services/auth';

export default function LoginPage() {
  return (
    <>
      <div className='flex gap-4'>
        <LoginButton text='Вход для члена комитета' action={loginAsCommittee} />
        <LoginButton text='Вход для админа' action={loginAsAdmin} />
      </div>
    </>
  );
}
