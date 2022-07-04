import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { error } = await supabase.from('facility').insert({
      id_facility: req.body.id_facility,
      name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      category: req.body.category,
    });

    res.status(200).json({ error });
  } else if (req.method === 'PUT') {
    const { error } = await supabase
      .from('facility')
      .update({
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        category: req.body.category,
      })
      .match({ id_facility: req.body.id_facility });
    res.status(200).json({ error });
  } else if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('facility')
      .delete()
      .match({ id_facility: req.body.id_facility });
    res.status(200).json({ error });
  } else {
    const { data } = await supabase
      .from('facility')
      .select('*, category(*)')
      .order('id_facility', { ascending: false });

    res.status(200).json(data);
  }
}
