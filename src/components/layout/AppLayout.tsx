import TabBar from './TabBar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="flex h-dvh flex-col bg-white md:flex-row">
      <main className="min-h-0 min-w-0 flex-1 overflow-hidden">
        <Outlet />
      </main>
      <TabBar />
    </div>
  );
}

export default AppLayout