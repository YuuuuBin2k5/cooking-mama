import React from 'react';
import styles from './foodList.module.css';

const foods = [
  {
    name: 'Bánh mì',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    description: 'Bánh mì Việt Nam giòn tan, thơm ngon.'
  },
  {
    name: 'Phở',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    description: 'Phở bò truyền thống với nước dùng đậm đà.'
  },
  {
    name: 'Gỏi cuốn',
    image: 'https://images.unsplash.com/photo-1464306076886-debede6bbf09?auto=format&fit=crop&w=400&q=80',
    description: 'Gỏi cuốn tươi mát, ăn kèm nước chấm đặc biệt.'
  },
  {
    name: 'Bún chả',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    description: 'Bún chả Hà Nội thơm ngon, hấp dẫn.'
  }
];

export default function FoodList() {
  return (
    <div className={styles.foodListContainer}>
      {foods.map((food, idx) => (
        <div key={idx} className={styles.foodCard}>
          <img src={food.image} alt={food.name} className={styles.foodImage} />
          <h3 className={styles.foodName}>{food.name}</h3>
          <p className={styles.foodDesc}>{food.description}</p>
        </div>
      ))}
    </div>
  );
}
