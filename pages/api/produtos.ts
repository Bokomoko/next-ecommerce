import supabase from '../../services/supabase';

const handler = async (_, response) => {
  const { data: products } = await supabase
    .from('produtcs')
    .select('*');

  response.json({
    body: products,
  });
};

export default handler;
