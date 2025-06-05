import { useState, useEffect } from 'react';
import './App.css';

// Import images
import dashboardImage from './assets/images/gpJkThr5HXSw.jpg';
import analyticsImage from './assets/images/33awd0yJZB9f.png';
import spaIcons from './assets/images/naYA47p6XO0L.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'solution', 'how-it-works', 'why-choose', 'cta'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-teal-600">SpaFlow AI</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`text-sm font-medium ${activeSection === 'hero' ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('problem')}
              className={`text-sm font-medium ${activeSection === 'problem' ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
            >
              Challenges
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className={`text-sm font-medium ${activeSection === 'solution' ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
            >
              Solution
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`text-sm font-medium ${activeSection === 'how-it-works' ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('why-choose')}
              className={`text-sm font-medium ${activeSection === 'why-choose' ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}`}
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition-colors"
            >
              Request Demo
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-sm font-medium text-left py-2 ${activeSection === 'hero' ? 'text-teal-600' : 'text-gray-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('problem')}
                className={`text-sm font-medium text-left py-2 ${activeSection === 'problem' ? 'text-teal-600' : 'text-gray-600'}`}
              >
                Challenges
              </button>
              <button 
                onClick={() => scrollToSection('solution')}
                className={`text-sm font-medium text-left py-2 ${activeSection === 'solution' ? 'text-teal-600' : 'text-gray-600'}`}
              >
                Solution
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className={`text-sm font-medium text-left py-2 ${activeSection === 'how-it-works' ? 'text-teal-600' : 'text-gray-600'}`}
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('why-choose')}
                className={`text-sm font-medium text-left py-2 ${activeSection === 'why-choose' ? 'text-teal-600' : 'text-gray-600'}`}
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition-colors text-center"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Maximize Every Appointment: The AI Solution for Dubai's Leading Spas.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                SpaFlow AI leverages predictive analytics to dramatically reduce missed appointments and automate hyper-personalized re-engagement, designed exclusively for Dubai's premier spas.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => scrollToSection('cta')}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Request a Free Demo
                </button>
                <button 
                  onClick={() => scrollToSection('cta')}
                  className="border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Learn More About Our Pilot Program
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={dashboardImage} 
                  alt="SpaFlow AI Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/30 to-blue-600/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Pain Points Section */}
      <section id="problem" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Are No-Shows & Fading Loyalty Costing Your Spa?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Revenue Loss</h3>
              <p className="text-gray-600">
                In Dubai's competitive luxury spa market, every missed appointment translates directly to lost revenue and underutilized resources. Your highly-trained therapists sit idle while your business bears the full cost.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Manual Tracking</h3>
              <p className="text-gray-600">
                Tracking client re-booking cycles manually consumes valuable staff time that could be better invested in delivering exceptional experiences. Your team struggles to remember when to reach out to past clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalization Challenges</h3>
              <p className="text-gray-600">
                Your discerning clientele expects communications tailored to their preferences and history, yet delivering this level of customization manually is virtually impossible across hundreds or thousands of client relationships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Competitive Pressure</h3>
              <p className="text-gray-600">
                Dubai's spa landscape grows increasingly competitive, with new establishments constantly raising the bar for client experience. Without leveraging the latest technology, you risk falling behind more innovative competitors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Inefficient Operations</h3>
              <p className="text-gray-600">
                Without an intelligent system in place, you're leaving substantial revenue on the table—revenue that could be captured through optimized scheduling, proactive client management, and data-driven decision making.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Client Experience</h3>
              <p className="text-gray-600">
                Generic mass messages fail to resonate with your high-end clientele, leading to diminishing returns on your marketing efforts and a less personalized experience that doesn't match your spa's premium positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution / How SpaFlow AI Helps Section */}
      <section id="solution" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Introducing SpaFlow AI: Your Intelligent Spa Partner
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We turn data into delighted clients and maximized revenue.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Predictive No-Show Prevention</h3>
                  <p className="text-gray-600">
                    Our sophisticated AI algorithms analyze your historical booking data to identify patterns and risk factors associated with missed appointments. By examining dozens of variables, SpaFlow AI assigns a risk score to each upcoming appointment. High-risk bookings trigger automated, personalized confirmation sequences designed to dramatically reduce your no-show rate.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Automated Client Re-engagement</h3>
                  <p className="text-gray-600">
                    SpaFlow AI transforms sporadic visitors into loyal, recurring clients through intelligent re-engagement. The system learns each client's optimal treatment cycles and preferences, then initiates perfectly-timed, personalized communications when they're most likely to book again. The result is a steady stream of returning clients without your team having to manually track and follow up.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Actionable Client Insights</h3>
                  <p className="text-gray-600">
                    Beyond automation, SpaFlow AI provides your management team with unprecedented visibility into client behavior and preferences. Our intuitive dashboard reveals which services drive the highest retention, which booking patterns yield the most reliable clients, and which re-engagement strategies produce the best results.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={analyticsImage} 
                alt="SpaFlow AI Analytics Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Seamlessly Integrate. Effortlessly Profit.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Connect</h3>
              <p className="text-gray-600">
                Integration with your existing systems forms the foundation of the SpaFlow AI experience. Our technical team handles the secure connection to your current booking platform, whether you use Fresha, Mindbody, Booker, or another popular system.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Fresha</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Mindbody</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Booker</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Zenoti</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Analyze & Predict</h3>
              <p className="text-gray-600">
                Once connected, SpaFlow AI begins its learning phase, analyzing your historical booking data to identify patterns specific to your spa and clientele. Unlike generic solutions, our AI adapts to the unique characteristics of Dubai's luxury spa market and your specific business model.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-full max-w-xs bg-gray-50 rounded-lg p-2">
                  <div className="h-2 bg-teal-100 rounded-full mb-1">
                    <div className="h-2 bg-teal-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="text-xs text-gray-500">Prediction Accuracy: 85%</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Engage & Grow</h3>
              <p className="text-gray-600">
                With predictions and insights in place, SpaFlow AI activates its engagement engines. High-risk appointments receive proactive, personalized confirmation sequences. Clients approaching their optimal re-booking window receive elegantly crafted messages that feel personal and timely.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="flex items-center space-x-1">
                  <span className="block w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="block w-3 h-3 rounded-full bg-orange-400"></span>
                  <span className="block w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="block w-3 h-3 rounded-full bg-green-400"></span>
                  <span className="block w-3 h-3 rounded-full bg-teal-400"></span>
                  <span className="block w-3 h-3 rounded-full bg-blue-400"></span>
                  <span className="text-xs text-gray-500 ml-2">Client Engagement Cycle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SpaFlow AI Section */}
      <section id="why-choose" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            The Spa Advantage: Why SpaFlow AI is Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Dubai Focused</h3>
              </div>
              <p className="text-gray-600">
                SpaFlow AI was conceived and developed specifically for the unique dynamics of Dubai's luxury spa market. Our algorithms account for local factors that generic solutions miss—from seasonal tourism patterns to cultural considerations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Proven ROI Model</h3>
              </div>
              <p className="text-gray-600">
                Our hybrid subscription and performance-based pricing ensures our incentives remain perfectly aligned with yours. Most of our clients see a return on investment within the first month, with the system typically paying for itself several times over.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Effortless Integration</h3>
              </div>
              <p className="text-gray-600">
                Unlike cumbersome enterprise solutions that require months of implementation and training, SpaFlow AI integrates seamlessly with your existing technology stack. We've built dedicated connectors for all major spa management systems used in the Dubai market.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Data Security & Privacy</h3>
              </div>
              <p className="text-gray-600">
                We recognize that your client data represents one of your most valuable assets. SpaFlow AI employs enterprise-grade security protocols at every level, from encrypted data transmission to secure, redundant storage. Our system complies with international data protection standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Dedicated Local Support</h3>
              </div>
              <p className="text-gray-600">
                When you partner with SpaFlow AI, you gain access to our responsive local support team based right here in Dubai. Our support specialists understand both the technical aspects of our platform and the operational realities of running a premium spa business.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Client Satisfaction Focus</h3>
              </div>
              <p className="text-gray-600">
                Our ultimate goal is to enhance your clients' experience while boosting your bottom line. By ensuring timely communications, personalized engagement, and seamless booking experiences, SpaFlow AI helps you deliver the premium service your clientele expects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Testimonials from our pilot program participants coming soon.
          </p>
          
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Testimonials Coming Soon</h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              We're currently collecting success stories from our pilot program participants. Check back soon to hear how SpaFlow AI is transforming spa businesses across Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Spa's Profitability?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Discover how SpaFlow AI can redefine your client management and revenue streams.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Request Your Free Demo</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="spa-name" className="block text-sm font-medium text-white/90 mb-1">Spa Name</label>
                    <input 
                      type="text" 
                      id="spa-name" 
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Serenity Spa Dubai"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Tell us about your spa and your specific needs..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    type="submit"
                    className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Schedule Your Free Demo
                  </button>
                  <button 
                    type="button"
                    className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Explore the Pilot Program
                  </button>
                </div>
                
                <p className="text-sm text-white/70 mt-4">
                  No credit card required for demo. See measurable results before you commit.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-teal-400">SpaFlow AI</h2>
              <p className="text-gray-400 mt-2">© 2025 SpaFlow AI. All rights reserved.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-gray-400">Email: contact@spaflowai.com</p>
                <p className="text-gray-400">Phone: +971 4 XXX XXXX</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Legal</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
