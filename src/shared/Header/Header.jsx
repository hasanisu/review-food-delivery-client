import React, { useContext } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";





const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleToLogout = () => {
    logoutUser()
      .then(() => { })
      .catch(err => console.error(err))
  }

  const navigation = [
    { id: '1', name: 'Home', href: '/' },
    { id: '2', name: 'Blogs', href: '/blogs' },
    { id: '3', name: 'Contact', href: '/contact' },
  ]

  return (
    <div className=' sticky top-0'>
      <Navbar
        fluid
        rounded
        className='rounded-none basic '

      >
        <Navbar.Brand to="/">
          <img
          alt="logo"
          className="mr-3 w-20 h-18 "
          src="https://i.ibb.co/GCCPDRF/lll-1.png"
        />
          <span className="self-center text-xl font-semibold text-white">
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">

          {
            user?.uid ?

              <Dropdown 
              inline
               
                label={<img src={user?.photoURL} alt="User Setting" className='w-12 h-12 rounded-full border' />}
              >
                <Dropdown.Header>
                  <span className="block text-sm font-bold font-mono">
                    {user?.displayName}
                  </span>
                  <span className="block truncate text-sm  font-mono">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>
                  <Link to='/addService'>Add-Services</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to='/myReviews'>My-Reviews</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleToLogout}>
                  Sign Out
                </Dropdown.Item>
              </Dropdown>

              :
              <>

                <Dropdown inline label={<FaUserCircle
                          className='w-12 h-12 text-gray-300'/>} >

                  <Dropdown.Header>
                    <span className="block text-md font-sans font-bold">
                      CHOSSE YOUR OPTION
                    </span>

                  </Dropdown.Header>

                  <Dropdown.Item className='hover:bg-gray-400 font-mono'>
                    <Link to='/login'>Sign In</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />

                  <Dropdown.Item className='hover:bg-gray-400'>
                    <Link to='/register'>Sign Up</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                </Dropdown>

              </>
          }

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {
            navigation.map(item => <NavLink
              key={item.id}
              to={item.href}
              className={({ isActive }) => {
                return 'text-xl px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:underline' +
                  (isActive ? 'text-gray-300 text-red-300' :
                    ' text-blue-300'
                  )
              }}
            >

              {item.name}
            </NavLink>)

          }
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;