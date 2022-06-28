import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { error } = await supabase.from('report').insert({
        name: req.body.name,
        desc: req.body.desc,
        email: req.body.email,
        image: req.body.image,
        category: req.body.category,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        image_width: req.body.image_width,
        image_height: req.body.image_height,
      });

      //check rank
      const rankData = [5, 19, 49, 99, 199];
      const { data } = await supabase
        .from('user')
        .select('*, badge(badgelist(*)), report(*)')
        .eq('email', req.body.email)
        .order('badgelist', { foreignTable: 'badge', ascending: false });

      rankData.map(async (item) => {
        if (
          data[0].report.length >= item - 1 &&
          data[0].badge[0].badgelist.requirement < item - 1
        ) {
          await supabase.from('badge').insert([
            {
              email: req.body.email,
              badgelist: data[0].badge[0].badgelist.id_badgelist + 1,
            },
          ]);
        }
      });

      res.send({ error });
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }
  } else if (req.method === 'PUT') {
    const { data, error } = await supabase
      .from('report')
      .update({ status: req.body.status })
      .match({ id_report: req.body.id_report });
    res.status(200).json({ succes: 'ok', error, data });
  } else if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('report')
      .delete()
      .match({ id_report: req.body.id_report });
    res.status(200).json({ succes: 'ok', error });
  } else {
    const { data, count } = await supabase
      .from('report')
      .select('*, user!inner(*, badge!inner(badgelist(*)))', { count: 'exact' })
      .order('badgelist', { foreignTable: 'user.badge', ascending: false })
      .order('id_report', { ascending: false });
    res.status(200).json({ data });
  }
}
