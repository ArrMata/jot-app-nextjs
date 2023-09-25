import { getTodos } from '@/lib/actions/todos.actions'
import Image from 'next/image'

export default async function Home() {

  const todos = await getTodos();

  return (
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <main className='bg-slate-900 h-screen'>
          <nav className='flex items-center px-8 py-4 gap-4'>
            <label for="my-drawer" className='bg-gray-300 p-1 rounded hover:bg-gray-400 transition-colors cursor-pointer'>
              <Image src="/icons/menu-2.png" width={35} height={35} alt='Menu Icon' />
            </label>
            <h1 className='text-4xl font-bold'>Jot It</h1>
          </nav>
        </main>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="flex flex-col p-4 w-80 min-h-full bg-slate-700 text-base-content">
          {todos.map(() =>
            <>
              todo
            </>)}

        </ul>
      </div>
    </div>
  )
}
