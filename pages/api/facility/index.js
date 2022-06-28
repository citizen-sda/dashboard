import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  const { data } = await supabase
    .from('facility')
    .select('*, category(*)')
    .order('id_facility', { ascending: false });

  res.status(200).json(data);
}
