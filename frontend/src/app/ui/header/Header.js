"use client"

import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" href="/">Leo GPT</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/icons/favicon.ico" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li><Link href="/" className="rounded-lg btn btn-ghost">Home</Link></li>
              <li><Link href="conversations" className="rounded-lg btn btn-ghost">Conversations</Link></li>
              <li><Link href="settings" className="rounded-lg btn btn-ghost">Settings</Link></li>
              <li><Link href="login" className="rounded-lg btn btn-ghost">Log in</Link></li>
              <li><Link href="signup" className="rounded-lg btn btn-ghost">Sign up</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header