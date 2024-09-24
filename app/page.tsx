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
  },
  {
    name: "Art Deco",
    isLiked: false,
    isNotLiked: false,
    description: "Characterized by bold geometric patterns, rich colors, and luxurious materials, Art Deco represents elegance and glamour.",
    image: "/designs/design-9.jpg",
  },
  {
    name: "Industrial",
    isLiked: false,
    isNotLiked: false,
    description: "Industrial architecture showcases raw materials and open spaces, often repurposing old factories and warehouses.",
    image: "/designs/design-10.jpg",
  },
  {
    name: "Neo-Classical",
    isLiked: false,
    isNotLiked: false,
    description: "Neo-Classical architecture draws inspiration from ancient Greek and Roman styles, featuring grand columns and symmetrical shapes.",
    image: "/designs/design-11.jpg",
  },
  {
    name: "Rustic",
    isLiked: false,
    isNotLiked: false,
    description: "Rustic architecture emphasizes natural materials like wood and stone, creating cozy, warm spaces that blend with the environment.",
    image: "/designs/design-12.jpg",
  },
  {
    name: "Cape Cod",
    isLiked: false,
    isNotLiked: false,
    description: "Cape Cod style is known for its simple, symmetrical design, steep rooflines, and dormer windows, reflecting early American architecture.",
    image: "/designs/design-13.jpg",
  },
  {
    name: "Victorian",
    isLiked: false,
    isNotLiked: false,
    description: "Victorian architecture features ornate detailing, asymmetrical shapes, and vibrant colors, showcasing the creativity of the 19th century.",
    image: "/designs/design-14.jpg",
  },
  {
    name: "Postmodern",
    isLiked: false,
    isNotLiked: false,
    description: "Postmodern architecture blends historical references with contemporary styles, often using playful forms and colors.",
    image: "/designs/design-15.jpg",
  },
]

const Home = () => {
  
  return (
    <div className='w-full h-[100vh] relative'>
      <Slider slides={slidesData} />
    </div>
  )
}

export default Home