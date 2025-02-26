import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageUploadPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/suggestions'); // Navigate to product suggestions page after submit
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center"
         style={{
           backgroundImage: "url('https://ik.imagekit.io/ytissbwn8/desktop-wallpaper-best-drugstore-hair-products-people-and-today-beauty-awards-2016-hair-care.jpg')",
         }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    

   
      <div className="container mx-auto p-6 relative z-10 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96 mx-4">
        <h2 className="text-4xl font-bold text-center text-black mb-8">Upload Your Scalp Images</h2>

        <div className="flex justify-center items-center bg-gray-500 mb-6">
          <input
            type="file"
            className="border-2 border-white p-4 rounded-md bg-transparent text-black"
            placeholder="Upload Image"
          />
        </div>

        <p className="text-center text-black mb-8">Please upload clear images of your scalp for analysis.</p>

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-8 py-4 bg-blue-600 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700"
          >
            Submit & Get Suggestions
          </button>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ImageUploadPage;
