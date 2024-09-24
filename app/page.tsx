"use client"

import React from 'react'
import Slider from '@/components/slider'

const slidesData = [
  {
    name: "Minimalist",
    isLiked: false,
    isNotLiked: false,
    description: "Utilizes cutting-edge technology and materials to create bold.",
    image: "/designs/design-1.png",
  },
  {
    name: "Mid-Century",
    isLiked: false,
    isNotLiked: false,
    description: "Known for functionality, minimalism, and the use of light colors, especially white.",
    image: "/designs/design-2.png",
  },
  {
    name: "Contemporary",
    isLiked: false,
    isNotLiked: false,
    description: "Contemporary architecture blends innovative design with sustainable practices, creating functional spaces that reflect modern lifestyles.",
    image: "/designs/design-3.png",
  },
  {
    name: "Scandinavian",
    isLiked: false,
    isNotLiked: false,
    description: "Scandinavian architecture emphasizes simplicity, functionality, and connection to nature.",
    image: "/designs/design-4.png",
  },
  {
    name: "Futuristic",
    isLiked: false,
    isNotLiked: false,
    description: "Futuristic architecture integrates advanced technology with visionary design concepts.",
    image: "/designs/design-5.png",
  },
  {
    name: "Modern",
    isLiked: false,
    isNotLiked: false,
    description: "Modern architecture focuses on minimalism, open spaces, and clean lines.",
    image: "/designs/design-6.png",
  },
  {
    name: "Deconstructivism",
    isLiked: false,
    isNotLiked: false,
    description: "Deconstructivism disrupts traditional forms, creating fragmented and dynamic structures.",
    image: "/designs/design-7.png",
  }
]
const Home = () => {
  
  return (
    <div className='w-full h-[100vh] relative'>
      <Slider slides={slidesData} />
    </div>
  )
}

export default Home