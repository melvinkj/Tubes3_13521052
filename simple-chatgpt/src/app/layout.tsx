import { SessionProvider } from '@/components/SessionProvider'
import '../styles/globals.css'
import SideBar from '@/components/SideBar'
import { getServerSession } from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';

export const metadata = {
  title: 'Simple ChatGPT',
  description: 'Generated by Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ): (
            <div className='flex'>
              <div className='bg-slate-900 max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                {/* Sidebar */}
                <SideBar/>

              </div>

              {/* Client Provider - Notification */}

              <div className='bg-slate-800 flex-1'>{children}</div>
            </div>
          )}

        </SessionProvider> 
      </body>
    </html>
  )
}
