import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  const { slug } = req.query;
  const { data } = await supabase
    .from('facility')
    .select('*, category(*)')
    .eq('id_facility', slug);

  if (!data) {
    res.status(200).json({ error: 'data not found' });
  } else if (!data[0]) {
    res.status(200).json({ error: 'data not found' });
  } else {
    res.status(200).json(data);
  }
}
