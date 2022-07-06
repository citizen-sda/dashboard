import supabase from '../../../lib/supabase';

export default async function handler(req, res) {
  const { count: dataUser } = await supabase
    .from('user')
    .select('*', { count: 'exact' })
    .order('email', { ascending: false });

  const { data: dataReport } = await supabase
    .from('report')
    .select('*')
    .order('id_report', { ascending: false });

  const verified = dataReport.filter((item) => {
    return item.status === 'Diverifikasi';
  });

  const pending = dataReport.filter((item) => {
    return item.status === 'Ditinjau';
  });

  res.status(200).json({
    total_user: dataUser,
    total_report: dataReport.length,
    total_diverifikasi: verified.length,
    total_ditinjau: pending.length,
  });
}
