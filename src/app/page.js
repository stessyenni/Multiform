import MultiForm from '@/components/form'
import SideBar from '@/components/sidebar'
import { SidebarItem } from '@/components/sidebar'
import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from 'react-icons/bs'
import { LifeBuoy, Receipt, Boxes, Package, UserCircle, BarChart3, LayoutDashboard, Settings } from 'lucide-react'

export default function App () {
  return (
    <main className='flex min-h-screen items-center justify-center gap-15 bg-zinc-50 font-sans'>
      <SideBar>
        <SidebarItem icon={<Bs1Circle size={20} />} text='Dashboard' active />
        <SidebarItem icon={<Bs2Circle size={20} />} text='Users' />
        <SidebarItem icon={<Bs3Circle size={20} />} text='Products' />
        <SidebarItem icon={<Bs4Circle size={20} />} text='Orders' />
        <SidebarItem icon={<Receipt size={20} />} text='Invoices' alert />
        <SidebarItem icon={<BarChart3 size={20} />} text='Analytics' />
        <hr className='my-3' />
        <SidebarItem icon={<LifeBuoy size={20} />} text='Support' />
        <SidebarItem icon={<Settings size={20} />} text='Settings' />
      </SideBar>
      <MultiForm />
    </main>
  )
}
