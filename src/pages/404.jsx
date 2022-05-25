import { Header } from '../components/layout/Header';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
    let timer = setTimeout(() => {
      router.push('/projects');
    }, 5000);
  });

  return (
    <>
      <Header />
      <h1>404 Error - Page Not Found</h1>
    </>
  );
}
