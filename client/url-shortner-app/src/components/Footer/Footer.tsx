import * as React from 'react';

interface FooterProps {
}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <div className='bg-sky-900/80  text-white text-center py-5 '>
        Copyright &#169; URLShortner | Ravneet Singh
    </div>
  )
};

export default Footer;
