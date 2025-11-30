const cakes = [
  {
    id: 1,
    name: "Chocolate Delight",
    description: "Rich chocolate layers with creamy frosting",
    price: "$45",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Vanilla Dream",
    description: "Classic vanilla cake with buttercream roses",
    price: "$42",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Strawberry Bliss",
    description: "Fresh strawberries and whipped cream",
    price: "$48",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Red Velvet Elegance",
    description: "Luxurious red velvet with cream cheese frosting",
    price: "$50",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    name: "Lemon Zest",
    description: "Tangy lemon cake with zesty icing",
    price: "$43",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Carrot Cake Classic",
    description: "Spiced carrot cake with cream cheese frosting",
    price: "$46",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=600&fit=crop",
  },
];

export default function CakeGallery() {
  return (
    <section id="cakes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Signature Cakes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each cake is crafted with premium ingredients and artistic flair
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full font-semibold">
                  {cake.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  {cake.name}
                </h3>
                <p className="text-gray-600 mb-4">{cake.description}</p>
                <button className="w-full bg-primary-100 text-primary-700 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors">
                  Order This Cake
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

