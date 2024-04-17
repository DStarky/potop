import { redirect } from 'next/navigation';

export async function login() {
  'use server';

  redirect('/dashboard');
}

export async function loginAsCommittee() {
  'use server';

  redirect('/committee/dashboard');
}

export async function loginAsAdmin() {
  'use server';

  redirect('/admin');
}

export async function logout() {
  'use server';

  redirect('/');
}
