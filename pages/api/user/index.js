import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { error: users_error } = await supabase.from('user').insert({
        name: req.body.name,
        email: req.body.email,
        avatar: req.body.avatar,
      });

      if (users_error === null) {
        const { error: badge_error } = await supabase.from('badge').insert({
          email: req.body.email,
          badgelist: 20001,
        });
        res.send({ badge_error });
      } else {
        res.send({ users_error });
      }
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' });
    }
  } else {
    res.status(200).json();
  }
}
