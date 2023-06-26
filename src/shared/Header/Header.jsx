import React from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const navigation =[
        {id:'1', name: 'Home', href:'/'},
        {id:'2', name: 'Login', href:'/login'},
        {id:'3', name: 'Register', href:'/register'},
        {id:'4', name: 'Create-product', href:'/hi'},
        {id:'5', name: 'About', href:'/by'},
    ]

    return (
        <div className=''>
           <Navbar
      fluid
      rounded
      className='rounded-none basic '
      
    >
      <Navbar.Brand to="/">
        {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        /> */}
        <span className="self-center text-xl font-semibold text-white">
          Isu`s` Food Review`
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
          <Link to='/admin'>Dashboard</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      {
                navigation.map(item =><NavLink
                key={item.id}
                to={item.href}
                className={({isActive}) => {
                   return 'text-xl px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-400 no-underline' + 
                   (isActive ? 'text-gray-300 bg-gray-400 hover:text-blue-800' :
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