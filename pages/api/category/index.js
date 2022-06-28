import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  const { data } = await supabase
    .from('category')
    .select('*')
    .order('id_category');
  res.status(200).json(data);
}
