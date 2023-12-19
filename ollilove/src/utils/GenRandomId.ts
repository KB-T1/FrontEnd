import { v4 as uuidv4 } from 'uuid';

const RandomComponent = () => {
  const randomId = uuidv4();

  console.log('Random ID:', randomId);

  return randomId
};