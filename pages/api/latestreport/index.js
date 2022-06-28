import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  const { data } = await supabase
    .from('report')
    .select('*, user!inner(*, badge!inner(badgelist(*)))')
    .order('badgelist', { foreignTable: 'user.badge', ascending: false })
    .order('id_report', { ascending: false })
    .limit(3);
  res.status(200).json(data);
}
