export const revalidate = 0;
import { getServerPocketbase } from '@/services/pb/server-pocketbase';

export default async function AdminDashboard() {
  const pb = getServerPocketbase();
  const users = await pb.collection('users').getList();

  return (
    <>
      <h1 className='text-5xl'>Панель админа</h1>
      <p>Страница для админа; настройки приложения + реестр пользователей</p>
      <table className='table-auto w-full max-w-md text-sm'>
        <thead>
          <tr>
            <td>id</td>
            <td>username</td>
            <td>name</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {users.items.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username}</td>
              <td>{u.name}</td>
              <td>{u.email ?? 'не указан'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
