import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  const { data } = await supabase
    .from('badge_list')
    .select('*')
    .order('id_badgelist', { ascending: false });

  res.status(200).json(data);
}
