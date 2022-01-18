import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './index.css'

export default function Media() {
    return (
    <div className="media">
      <ImageList sx={{ width: 240, height: 60 }} cols={5} rowHeight={30}>
        {itemData.map((item) => (
        <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.title}>
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=30&h=30&fit=crop&auto=format`}
              srcSet={`${item.img}?w=30&h=30&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              gap="10"
            />
          </ImageListItem>
        </a>))}
      </ImageList>
    </div>
    );
  }

const itemData = [
    {
        img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        title: 'Github',
        href: 'https://github.com/ntaherni'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png',
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/nicholas-tahernia/'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
        title: 'Instagram',
        href: 'https://www.instagram.com/nico___t/'
    },
    {
        img: 'https://toppng.com/uploads/preview/font-email-comments-email-icon-square-11563265451o3oy61mf1b.png',
        title: 'Mail',
        href: 'mailto:nicholas.tahernia@gmail.com',
    },
    {
        img: 'https://logodix.com/logo/737744.png',
        title: 'Phone',
        href: 'tel:7608082256'
    },
];
