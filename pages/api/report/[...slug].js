import supabase from '../../../lib/supabase';
import { pagination } from '../../../lib/pagination';

export default async function handler(req, res) {
  const { slug } = req.query;
  const total = 10;

  if (slug[2]) {
    const { from, to } = pagination(slug[2] - 1, total);
    const { data, count } = await supabase
      .from('report')
      .select('*, user!inner(*, badge!inner(badgelist(*)))', { count: 'exact' })
      .eq('category', slug[0])
      .order('badgelist', { foreignTable: 'user.badge', ascending: false })
      .order('id_report', { ascending: false })
      .range(from, to - 1);
    const pages = Math.ceil(count / total);
    res.status(200).json({ data, count, pages, total });
  } else {
    const { from, to } = pagination(slug[1] - 1, total);
    const { data, count } = await supabase
      .from('report')
      .select('*, user!inner(*, badge!inner(badgelist(*)))', { count: 'exact' })
      .order('badgelist', { foreignTable: 'user.badge', ascending: false })
      .order('id_report', { ascending: false })
      .range(from, to - 1);
    const pages = Math.ceil(count / total);
    res.status(200).json({ data, count, pages, total });
  }
}
