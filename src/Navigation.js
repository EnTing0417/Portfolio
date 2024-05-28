import React, { useState } from 'react';
import { MailOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import About from './About.js'; 
import Educational_Background from './Educational_Background.js';
import Working_Experience from './Working_Experience.js';
import Skills from './Skills.js';
import Achievement from './Achievement.js';
import ContactMe from './ContactMe.js';

var selectedComponent = { name: 'about', component: About }

const componentData = [
  { name: 'about', component: About },
  { name: 'education', component: Educational_Background },
  { name: 'work', component: Working_Experience },
  { name: 'skills', component: Skills },
  { name: 'achievement', component: Achievement },
  { name: 'contact', component: ContactMe },
];

const MenuItems = [
  {
    label: 'About',
    key: 'about',
    icon: <HomeOutlined />,
    link:'/about'
  },
  {
    label: 'Educational Background',
    key: 'education',
    icon: <MailOutlined />,
    link:'/educational-background'
  },  
  {
    label: 'Working Experience',
    key: 'work',
    icon: <MailOutlined />,
    link:'/working-experience'
  },  
  {
    label: 'Skills',
    key: 'skills',
    icon: <MailOutlined />,
    link:'/skills'
  },  
  {
    label: 'Achievement and Involvement',
    key: 'achievement',
    icon: <MailOutlined />,
    link:'/achievement-and-involvement'
  },  
  {
    label: 'Contact Me',
    key: 'contact',
    icon: <PhoneOutlined />,
    link: '/contact-me'
  },  
]

const NavigationMenu = () => {
  const [current, setCurrent] = useState('about');
  const onClick = (e) => {
    setCurrent(e.key);
    selectedComponent = componentData.find(item => item.name === e.key);
  };

  return (
    <div className="side-navigation">
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" >
      {MenuItems.map(item => (
        <Menu.Item key={item.key}>
          <Link to={item.link}>{item.icon} {item.label}</Link>
          </Menu.Item>
      ))}
    </Menu>
    <div>
    <selectedComponent.component />
    </div>
    </div>
  );
};

export default NavigationMenu;
