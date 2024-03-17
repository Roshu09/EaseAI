import React from 'react'
import facebookIcon from '../assets/socials/facebook.svg';
import instagramIcon from '../assets/socials/instagram.svg';
import twitterIcon from '../assets/socials/twitter.svg';


const socials = [
  {
    id: 0,
    url: 'https://github.com/Roshu09',
    iconUrl: facebookIcon,
    title: 'Facebook'
  },
  {
    id: 1,
    url: 'https://www.instagram.com/ig_roshan09/?hl=en',
    iconUrl: instagramIcon,
    title: 'Instagram'
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/roshan-gupta-340887227',
    iconUrl: twitterIcon,
    title: 'Twitter'
  }
];


const Footer = () => {
  return (
    <section className="!px-0 !py-10">
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <p className="caption text-n-4 lg:block">
            ©{new Date().getFullYear()}. All rights reserved @Roshu
            </p>
            <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
                <a key={item.id} href={item.url} target="_blank" className="flex items-center justify-center w-10 h-10 bg-n-9 rounded-full transition-colors hover:bg-purple-500">
                    <img src={item.iconUrl}
                    width={16}
                    height={16}
                    alt={item.title} />
                </a>
            ))}
            </ul>
        </div>
    </section>
  )
}

export default Footer;