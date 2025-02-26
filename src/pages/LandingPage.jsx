import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/questions");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 flex justify-between items-center py-4">
          <h1 className="text-3xl font-extrabold text-blue-600">Follicle Fusion</h1>
          <nav>
            <ul className="flex space-x-8 text-blue-600 font-medium">
              <li>
                <a href="#how-it-works" className="hover:text-blue-800">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-800">
                  What We Offer
                </a>
              </li>
              <li>
                <button
                  onClick={handleGetStarted}
                  className="hover:text-blue-800 transition duration-300"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://ik.imagekit.io/ytissbwn8/Haircare-and-scalp-care_1400x800.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 opacity-80"></div>
        <div className="container mx-auto px-6 flex flex-col items-center justify-center h-full relative z-10 text-white text-center">
          <h2 className="text-5xl font-extrabold leading-tight mb-6 drop-shadow-md">
            Your Hair, Your Story
          </h2>
          <p className="text-lg max-w-3xl mb-8">
            Discover your personalized hair and scalp care solution with advanced
            analysis and tailored recommendations.
          </p>
        
          <p className="text-xl italic mb-8">
            "Healthy Hair, Healthy You – Tailored Just For You!"
          </p>
          <button
            onClick={handleGetStarted}
            className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </section>

 
      <section id="follicle-fusion" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-extrabold text-blue-600 mb-8">Welcome to Follicle Fusion</h3>
          <p className="text-lg max-w-4xl mx-auto mb-6">
            At Follicle Fusion, we believe that every person deserves healthy, strong, and vibrant hair. Our platform offers personalized solutions for hair and scalp care based on advanced analysis and science-backed treatments.
          </p>
          <p className="text-lg max-w-4xl mx-auto mb-6">
            Our mission is simple: to rejuvenate and enhance the natural beauty of your hair, giving you the confidence you deserve. With our tailored solutions and ongoing support, healthy hair is just a step away.
          </p>
          <p className="text-lg max-w-4xl mx-auto mb-6 italic">
            "Transform Your Tresses, Transform Your Life!"
          </p>
        </div>
      </section>

      
      <section id="how-it-works" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-extrabold text-center mb-12 text-blue-600">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Upload Your Scalp Images",
                description:
                  "Let our system analyze your hair and scalp condition using state-of-the-art image processing.",
              },
              {
                title: "Share Your Story",
                description:
                  "Provide text-based inputs about your routines, challenges, and goals for a deeper understanding.",
              },
              {
                title: "Receive Tailored Insights",
                description:
                  "Get real-time, data-driven recommendations for healthier, stronger hair.",
              },
              {
                title: "Track Your Progress",
                description:
                  "Monitor changes and refine your care routine with ongoing insights.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-blue-600">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-extrabold text-center mb-12 text-blue-600">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Comprehensive Scalp Analysis",
                description:
                  "Understand your scalp and hair condition through our tailored assessments.",
              },
              {
                title: "Personalized Recommendations",
                description:
                  "Receive care strategies customized to your hair type, lifestyle, and environmental factors.",
              },
              {
                title: "Environment-Aware Care",
                description:
                  "Factor in local climate, water quality, and external influences for optimal results.",
              },
              {
                title: "Simple, User-Friendly Interface",
                description:
                  "Navigate effortlessly to find the solutions that suit you best.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h4 className="text-xl font-bold mb-4 text-blue-600">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


  
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>© 2024 Follicle Fusion. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
