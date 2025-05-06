const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-2">About Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">Learn about our journey since 2014</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=450" 
                alt="Shivrai Mahila Urban Co-op. Credit Society building" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Story</h3>
              <p className="mb-4 text-gray-700">
                Established in 2014, Shivrai Mahila Urban Co-operative Credit Society Ltd. has been serving the community with dedication and trust. Our institution was founded with the vision to provide accessible financial services to all.
              </p>
              <p className="mb-6 text-gray-700">
                Over the years, we have grown steadily, expanding our services while maintaining our core values of trust, reliability, and customer satisfaction. We take pride in contributing to the economic development of our region.
              </p>
              
              <div className="flex items-center space-x-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">2014</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Banking Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
