import Link from 'next/link';
import MenuItem from '../components/MenuItem';

export default function Home() {
  const featuredItems = [
    { id: '1', name: 'Classic Cheeseburger', price: 9.99, description: 'Juicy beef patty with cheese, lettuce, tomato, and our special sauce.' },
    { id: '2', name: 'BBQ Bacon Burger', price: 12.99, description: 'Smoky BBQ sauce, crispy bacon, cheddar cheese, and onion rings.' },
    { id: '3', name: 'Veggie Burger', price: 8.99, description: 'Plant-based patty with avocado, sprouts, and vegan mayo.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Tio Waldner's Burger</h1>
          <p className="text-xl mb-8">The best burgers in town, made with love and fresh ingredients</p>
          <div className="space-x-4">
            <Link href="/menu" className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              View Menu
            </Link>
            <Link href="/order" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition">
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Burgers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">${item.price}</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Tio Waldner's Burger, we believe in serving quality burgers made with the freshest ingredients.
            Our passion for great food and excellent service has made us a local favorite for over 10 years.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Tio Waldner's Burger. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/design">Design</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
