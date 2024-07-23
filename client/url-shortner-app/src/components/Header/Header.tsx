import * as React from 'react';

interface HeaderProps {
}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div className='bg-sky-900/90 '>
        <div className='container p-2 mx-auto'>
            <nav className='py-5'>
                <div className='text-base text-white'>
                    URL Shortner
                </div>
            </nav>
        </div>
    </div>
  )
};

export default Header;
