import Header from './Header';
import Footer from './Footer';

export default function Blog() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center items-center">
        {/* Contenido del blog irá aquí */}
      </main>
      <Footer />
    </>
  );
}
