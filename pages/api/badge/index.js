import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { error } = await supabase.from('badge_list').insert({
      id_badgelist: req.body.id_badgelist,
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      requirement: req.body.requirement,
    });

    res.status(200).json({ error });
  } else if (req.method === 'PUT') {
    const { error } = await supabase
      .from('badge_list')
      .update({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        requirement: req.body.requirement,
      })
      .match({ id_badgelist: req.body.id_badgelist });
    res.status(200).json({ error });
  } else if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('badge_list')
      .delete()
      .match({ id_badgelist: req.body.id_badgelist });
    res.status(200).json({ error });
  } else {
    const { data } = await supabase
      .from('badge_list')
      .select('*')
      .order('id_badgelist', { ascending: false });

    res.status(200).json(data);
  }
}
