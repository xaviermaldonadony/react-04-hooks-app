export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  console.log('func called');
  await new Promise((res) => setTimeout(res, 2000));

  console.log('func done');
  return {
    id: id,
    name: 'Xavier',
    location: 'Ottawa, Canada',
    role: 'Dev',
  };
};
