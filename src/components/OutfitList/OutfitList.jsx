import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import style from './OutfitList.module.css';

const ListItem = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(`Toggled: ${item.name} - Open: ${!isOpen}`);
  };

  const isLeaf = !item.children || item.children.length === 0;
  const itemClass = `${style.oreo} ${style[`level${level}`]}`;

  return (
    <div className={style.wrapper}>
      <div onClick={handleToggle} className={itemClass}>
        {isLeaf ? (
          <Link to={`/details/${item.name}`} className={style.link}>
            {item.name} 
            {item.count !== undefined && (
              <span className={style.count}>{item.count}</span>
            )}
          </Link>
        ) : (
          <>
            {item.name}
            <Icon
              icon={isOpen ? 'mingcute:up-line' : 'mingcute:down-line'}
              className={style.icon}
            />
          </>
        )}
      </div>
      {isOpen && item.children && (
        <div style={{ marginLeft: '20px' }}>
          {item.children.map((child, index) => (
            <ListItem key={`${item.name}-${index}`} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

// Основной компонент для отображения всего списка
export const OutfitList = () => {
  const data = [
    {
      name: 'Clothes',
      children: [
        {
          name: 'Подэлемент 1.1',
          children: [
            { name: 'Подэлемент 1.1.1' },
            { name: 'Подэлемент 1.1.2' }
          ]
        },
        { 
          name: 'Подэлемент 1.2',
          children: [
            { name: 'Подэлемент 1.2.1' },
            { name: 'Подэлемент 1.2.2' }
          ] }
      ]
    },
    {
      name: 'Shoes',
      children: [
        {
          name: 'Подэлемент 2.1',
          children: [
            { name: 'Подэлемент 2.1.1' },
            { name: 'Подэлемент 2.1.2' }
          ]
        },
        {
          name: 'Подэлемент 2.2',
          children: [
            { name: 'Подэлемент 2.2.1' },
            { name: 'Подэлемент 2.2.2' }
          ]
        }
      ]
    },
    {
      name: 'Accessories',
      children: [
        {
          name: 'Подэлемент 1.1',
          children: [
            { name: 'Подэлемент 1.1.1' },
            { name: 'Подэлемент 1.1.2' }
          ]
        },
        { 
          name: 'Подэлемент 1.2',
          children: [
            { name: 'Подэлемент 1.2.1' },
            { name: 'Подэлемент 1.2.2' }
          ] }
      ]
    },
    {
      name: 'Premium',
      children: [
        {
          name: 'Подэлемент 1.1',
          children: [
            { name: 'Подэлемент 1.1.1' },
            { name: 'Подэлемент 1.1.2' }
          ]
        },
        { 
          name: 'Подэлемент 1.2',
          children: [
            { name: 'Подэлемент 1.2.1' },
            { name: 'Подэлемент 1.2.2' }
          ] }
      ]
    },
    {
      name: 'Sport',
      children: [
        {
          name: 'Подэлемент 1.1',
          children: [
            { name: 'Подэлемент 1.1.1' },
            { name: 'Подэлемент 1.1.2' }
          ]
        },
        { 
          name: 'Подэлемент 1.2',
          children: [
            { name: 'Подэлемент 1.2.1' },
            { name: 'Подэлемент 1.2.2' }
          ] }
      ]
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <ListItem key={`${item.name}-${index}`} item={item} level={0} />
      ))}
    </div>
  );
};
