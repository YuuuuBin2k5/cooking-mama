import FoodList from '../components/FoodList';

export default function Home() {
  return (
    <main style={{ background: '#f9f9f9', minHeight: '100vh' }}>
      <section style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#e67e22', marginBottom: '0.5rem' }}>Cooking Mama</h1>
        <p style={{ color: '#555', fontSize: '1.2rem' }}>Khám phá các món ăn ngon và hấp dẫn!</p>
      </section>
      <FoodList />
    </main>
  );
}
