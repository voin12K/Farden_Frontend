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
          name: 'Outerwear',
          children: [
            { name: 'Coats' },
            { name: 'Jackets' },
            { name: 'Parkas' },
            { name: 'Puffer Jackets' },
            { name: 'Trench Coats' },
            { name: 'Vests' },
            { name: 'Windbreakers' },
            { name: 'Raincoats' }
          ]
        },
        {
          name: 'Tops',
          children: [
            {
              name: 'T-Shirts',
              children: [
                { name: 'Basic' },
                { name: 'Striped' },
                { name: 'Printed' }
              ]
            },
            {
              name: 'Shirts',
              children: [
                { name: 'Dress Shirts' },
                { name: 'Short Sleeve' },
                { name: 'Long Sleeve' },
                { name: 'Polos' }
              ]
            },
            {
              name: 'Sweaters & Cardigans',
              children: [
                { name: 'Knit' },
                { name: 'Light' },
                { name: 'Heavy' }
              ]
            },
            {
              name: 'Blouses',
              children: [
                { name: 'Solid' },
                { name: 'Patterned' }
              ]
            },
            {
              name: 'Hoodies & Sweatshirts',
              children: [
                { name: 'With Hood' },
                { name: 'Without Hood' }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Bottoms',
      children: [
        {
          name: 'Pants',
          children: [
            { name: 'Jeans' },
            { name: 'Chinos' },
            { name: 'Dress Pants' },
            { name: 'Joggers' }
          ]
        },
        { name: 'Shorts' },
        {
          name: 'Skirts',
          children: [
            { name: 'Mini' },
            { name: 'Midi' },
            { name: 'Maxi' }
          ]
        },
        { name: 'Leggings' }
      ]
    },
    {
      name: 'Sleepwear & Loungewear',
      children: [
        {
          name: 'Pajamas',
          children: [
            { name: 'Sets' },
            { name: 'Nightgowns' }
          ]
        },
        { name: 'Robes' },
        { name: 'Loungewear Sets' }
      ]
    },
    {
      name: 'Sportswear',
      children: [
        { name: 'Athletic Sets' },
        { name: 'Workout Tops' },
        { name: 'Athletic Shorts' },
        { name: 'Fitness Leggings' },
        { name: 'Sports Bras' },
        { name: 'Sneakers & Athletic Shoes' }
      ]
    },
    {
      name: 'Footwear',
      children: [
        { name: 'Dress Shoes' },
        { name: 'Boots' },
        { name: 'Sneakers' },
        { name: 'Sandals' },
        { name: 'Flats' },
        { name: 'Loafers' }
      ]
    },
    {
      name: 'Accessories',
      children: [
        { name: 'Scarves & Shawls' },
        { name: 'Gloves & Mittens' },
        { name: 'Hats & Headwear' },
        { name: 'Belts' },
        {
          name: 'Bags',
          children: [
            { name: 'Backpacks' },
            { name: 'Crossbody Bags' },
            { name: 'Clutches' }
          ]
        }
      ]
    }    
  ];

  return (
    <div>
      {data.map((item, index) => (
        <ListItem key={`${item.name}-${index}`} item={item} level={0} />
      ))}
    </div>
  );
};
