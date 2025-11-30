export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to <span className="font-semibold text-primary-600">Honeybunny Cakes</span>, 
              where passion meets perfection. We started with a simple dream: to create cakes that 
              not only taste incredible but also bring smiles to faces.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Every cake is handcrafted by our skilled bakers using only the finest ingredients. 
              We believe in the power of quality, attention to detail, and a whole lot of love.
            </p>
            <p className="text-lg text-gray-700">
              From classic flavors to custom designs, we&apos;re here to make your special moments 
              even more memorable with our delightful creations.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop"
              alt="Baking process"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg hidden lg:block">
              <div className="text-3xl font-bold font-serif">10+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-4">🍰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">Only the finest, locally sourced ingredients</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Designs</h3>
            <p className="text-gray-600">Every cake tailored to your vision</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Made with Love</h3>
            <p className="text-gray-600">Crafted with care and attention to detail</p>
          </div>
        </div>
      </div>
    </section>
  );
}

