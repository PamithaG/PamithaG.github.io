
import React from 'react';
import { PROFILE_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-16 text-center text-slate-500 border-t border-slate-800">
      <p>&copy; {new Date().getFullYear()} {PROFILE_DATA.name}. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
