import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  const { data } = await supabase
    .from('user')
    .select('*, report(id_report), badge(badgelist(id_badgelist, name, image))')
    .order('badgelist', { foreignTable: 'badge', ascending: false });
  data.sort((a, b) => Number(b.report.length) - Number(a.report.length));
  res.status(200).json(data);
}
