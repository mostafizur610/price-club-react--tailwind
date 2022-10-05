import React from 'react';
import Link from './Link/Link';
import { Bars3Icon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Product', path: '/home' },
        { id: 3, name: 'Orders', path: '/home' },
        { id: 4, name: 'Contacts', path: '/home' },
        { id: 5, name: 'About', path: '/home' },
    ]
    return (
        <nav>
            <Bars3Icon className="h-6 w-6" />
            <ul className='md: flex justify-center'>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;