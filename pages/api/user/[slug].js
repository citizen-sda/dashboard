import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  const { slug } = req.query;
  const { data } = await supabase
    .from('user')
    .select('*, badge(badgelist(*)), report(*)')
    .eq('email', slug)
    .order('badgelist', { foreignTable: 'badge', ascending: false });
  res.status(200).json(data);
}
