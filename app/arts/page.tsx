"use client"

import Navbar from '../components/Navbar'
import "@/styles/globals.css";
import { Articles_arts } from '../components/Articles_arts';
import PageNav from '../components/PageNav';
import React, {useEffect, useState} from 'react';
import Articles_arts_little_sreen from '../components/Articles_arts_little_sreen';

const Page = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Déterminez la taille de l'écran
    const screenWidth = window.innerWidth;

    // Définissez un seuil de largeur d'écran pour basculer entre les composants
    const largeScreenWidth = 768;

    // Mettez à jour l'état en fonction de la taille de l'écran
    setIsLargeScreen(screenWidth > largeScreenWidth);

    // Ajoutez un gestionnaire d'événement de redimensionnement pour mettre à jour l'état lorsque la fenêtre est redimensionnée
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > largeScreenWidth);
    };

    window.addEventListener('resize', handleResize);

    // Retirez le gestionnaire d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="w-full">
      <PageNav />
      {isLargeScreen ? <Articles_arts /> : <Articles_arts_little_sreen />}
    </div>
  )
}

export default Page


