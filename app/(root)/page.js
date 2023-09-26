import TodoCard from '@/components/TodoCard';
import TodoForm from '@/components/TodoForm';
import { getTodos } from '@/lib/actions/todos.actions'
import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {

  const todos = await getTodos();

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <main className='bg-slate-900 h-screen'>
          <nav className='flex items-center px-8 py-4 gap-4'>
            <label htmlFor="my-drawer" className='bg-gray-300 p-1 rounded hover:bg-gray-400 transition-colors cursor-pointer'>
              <Image src="/icons/menu-2.png" width={35} height={35} alt='Menu Icon' />
            </label>
            <Link href="/" className='text-4xl font-bold'>Jot It</Link>
          </nav>
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="flex flex-col p-4 w-80 min-h-full bg-slate-700 text-base-content">
          {todos.length > 0 ? todos.map((todo) =>
            <TodoCard key={todo._id} todo={todo} />
          ) :
            <>
              <h2 className='text-white text-xl'>No todos found...</h2>
            </>}
          <TodoForm />
        </ul>
      </div>
    </div>
  )
}
