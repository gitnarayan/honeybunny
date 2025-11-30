export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to place an order or have a question? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Tell us about your cake requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h3>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 text-2xl">📍</div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>304 , Silver city 2 , Greater Noida</p>
                    <p>Uttar Pradesh</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 text-2xl">📞</div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+91 6261507068</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 text-2xl">📧</div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>hello@honeybunnycakes.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 text-2xl">🕐</div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p>Monday - Friday: 9AM - 7PM</p>
                    <p>Saturday - Sunday: 10AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Special Orders</h4>
              <p className="text-gray-700">
                Need a custom cake for a special occasion? Contact us at least 3 days in advance 
                to discuss your design and requirements!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

