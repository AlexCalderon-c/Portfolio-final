import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full">
            <nav className="bg-menu p-4 fixed w-full z-50 top-0">
                <ul className="flex justify-center gap-5 list-none text-white text-xs">
                    <li className="cursor-pointer hover:text-secondary transition-colors">My projects</li>
                    <li className="cursor-pointer hover:text-secondary transition-colors">About me</li>
                    <li className="cursor-pointer hover:text-secondary transition-colors">Skills</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
