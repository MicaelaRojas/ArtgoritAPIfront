import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";
import ImageGallery from "../components/ImageGallery";
import axios from 'axios';
import { Link } from 'react-router-dom'; // Asegúrate de importar la funcionalidad de enrutamiento apropiada

function Home() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7249/api/Obras");
        setApiData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='max-w-4xl mx-auto'>
      <Navbar />
      <ImageGallery data={apiData} />
      
    </div>
  );
}

export default Home;
