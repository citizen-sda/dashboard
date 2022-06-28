import supabase from '../../../lib/supabase';
import { pagination } from '../../../lib/pagination';

export default async function handler(req, res) {
  const { slug } = req.query;
  const total = 20;

  const { from, to } = pagination(slug[1] - 1, total);
  const { data: datas } = await supabase
    .from('user')
    .select('*, report(id_report), badge(badgelist(id_badgelist, name, image))')
    .order('badgelist', { foreignTable: 'badge', ascending: false });

  datas.sort((a, b) => Number(b.report.length) - Number(a.report.length));
  //   const pages = Math.ceil(count / total);
  const data = datas.slice(from, to);
  const count = datas.length;
  const pages = Math.ceil(count / total);
  res.status(200).json({ data, count, pages, total });
}
