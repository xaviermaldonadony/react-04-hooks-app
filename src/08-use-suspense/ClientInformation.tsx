import { use, useEffect, Usable } from 'react';
import { type User } from './api/get-user.action';

interface Props {
  getUser: Usable<User>;
}
export const ClientInformation = ({ getUser }: Props) => {
  const user = use(getUser);

  //   useEffect(() => {
  //     getUserAction(id).then(console.log);
  //   }, [id]);

  //   const user = use(getUserAction(1));
  //   const user = use(userPromise);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h2 className='text-4xl font-thin text-white'>{user.id}</h2>
      <p className='text-white text-2xl'>{user.location}</p>
      <p className='text-white text-xl'>{user.role}</p>
    </div>
  );
};
