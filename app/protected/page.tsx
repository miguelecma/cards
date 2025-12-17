import { redirect } from 'next/navigation'
import Link from 'next/link'

import { LogoutButton } from '@/components/logout-button'
import { createClient } from '@/lib/supabase/server'

export default async function ProtectedPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getClaims()
  if (error || !data?.claims) {
    redirect('/auth/login')
  }

  return (
    <div className="flex flex-col h-svh w-full items-center justify-around gap-2">
      <div><Link className='text-primary underline-offset-4 hover:underline cursor-pointer' href="/">Dashboard</Link></div>
      <div className='flex justify-around w-full'>
        <p>
          Hello <span>{data.claims.email}</span>
        </p>
        <LogoutButton />
      </div>
    </div>
  )
}
