import { ServerResponse } from 'http';
import { v4 as uuidv4 } from 'uuid';
import supabase from '../../services/supabase';

const handler = async (request, response: ServerResponse) => {
  if (request.method !== 'POST') { throw new Error(); }

  const {
    name, price, image, description,
  } = JSON.parse(request.body);

  // Validation
  const { error } = await supabase
    .from('products')
    .insert([
      {
        id: uuidv4(),
        name,
        price,
        image,
        description,
      },
    ]);
  if (error === null) { response.statusCode = 202; } else { response.statusCode = 500; }

  response.end();
};

export default handler;
