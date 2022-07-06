import React, { useState } from 'react';
import supabase from '../lib/supabase';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export const Index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(supabase.auth.session());
  const [user, setUser] = useState(supabase.auth.user());
  const [form, setForm] = useState({
    email: '',
  });

  React.useEffect(() => {
    setSession(supabase.auth.session());
    setUser(supabase.auth.user());
  }, []);

  if (session) {
    router.push('/dashboard');
  }

  const handleLogin = async (form) => {
    try {
      setLoading(true);
      const { user, session, error } = await supabase.auth.signIn(form);
      if (error) {
        throw error;
      } else {
        toast.success('Check your email');
      }
    } catch (error) {
      toast.error(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>Welcome to Citizen!</title>
      <div className="bg-gray-100 h-screen">
        <div className="flex justify-center">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-md bg-base-100 mt-24">
            <div className="card-body">
              <div className="flex justify-center m-8">
                <img
                  src="https://res.cloudinary.com/sycwell/image/upload/c_limit%2Cf_auto%2Cfl_progressive%2Cq_75%2Cw_200/citizen_lt87zl.webp"
                  width="100px"
                />
              </div>
              <div className="form-control">
                <label className="label"></label>
                <input
                  className="input input-bordered w-full focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-control mt-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin(form);
                  }}
                  className="btn bg-primary w-full"
                  disabled={loading}
                >
                  <span>{loading ? 'Loading' : 'login'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
