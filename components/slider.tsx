"use client";

import { useState, useRef, useEffect } from "react";
import { Heart } from "lucide-react";
import { CircleX } from "lucide-react";
import Image from "next/image";
import SlideLeftIcon from "../public/slide-left.svg";
import SlideRightIcon from "../public/slide-right.svg";

interface Slide {
    name: string;
    image: string;
    description: string;
}

const Slider = ({ slides }: { slides: Slide[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const [translateX, setTranslateX] = useState(0);
    const [userResponses, setUserResponses] = useState<(null | "liked" | "disliked")[]>([]);

    useEffect(() => {
        localStorage.clear();
        const initialResponses = new Array(slides.length).fill(null);
        setUserResponses(initialResponses);
    }, [slides]);

    const handleResponse = (response: "liked" | "disliked") => {
        const updatedResponses = [...userResponses];
        updatedResponses[currentIndex] = response;
        setUserResponses(updatedResponses);
        localStorage.setItem("userResponses", JSON.stringify(updatedResponses));
    };

    const handleRightSwipe = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setTranslateX(0);
        }
    };

    const handleLeftSwipe = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setTranslateX(0);
        }
    };

    const handleSkip = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1); // Move to the next slide
            setTranslateX(0); // Reset translation
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
        if (touchStartX.current !== null) {
            const diffX = touchStartX.current - touchEndX.current;
            setTranslateX(-diffX);
        }
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const diffX = touchStartX.current - touchEndX.current;

        if (diffX > 50) {
            handleRightSwipe();
        } else if (diffX < -50) {
            handleLeftSwipe();
        } else {
            setTranslateX(0);
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    const totalLikes = userResponses.filter(response => response === "liked").length;
    const totalDislikes = userResponses.filter(response => response === "disliked").length;

    // Get only the liked images
    const likedImages = slides
        .filter((_, index) => userResponses[index] === "liked")
        .map(slide => slide.image);

    return (
        <div className="flex flex-col items-center justify-top min-h-screen p-4">
            <div className="relative w-full max-w-md">

                {currentIndex < slides.length - 1 && (
                    <button
                        onClick={handleSkip}
                        className="absolute top-0 right-0 mt-2 mr-2 px-2 py-2 rounded-lg z-10 text-white"
                    >
                        Skip
                    </button>
                )}

                {currentIndex < slides.length - 1 ? ( // Only render the slider images if not on the last index
                    <div
                        className="relative bg-white overflow-hidden flex justify-center items-center min-h-[400px] max-h-[400px] w-full"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Previous Image */}
                        {currentIndex > 0 && (
                            <img
                                src={slides[currentIndex - 1].image}
                                alt="Previous Slide"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                                style={{
                                    transform: `translateX(${translateX + 100}%)`,
                                }}
                            />
                        )}

                        {/* Current Image */}
                        <Image
                            src={slides[currentIndex].image}
                            alt="Current Slide"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                            layout="fill"
                            objectFit="cover"
                            style={{
                                transform: `translateX(${translateX}px)`,
                            }}
                        />

                        {/* Next Image */}
                        {currentIndex < slides.length - 1 && (
                            <img
                                src={slides[currentIndex + 1].image}
                                alt="Next Slide"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
                                style={{
                                    transform: `translateX(${translateX - 100}%)`,
                                }}
                            />
                        )}

                        {/* Navigation Buttons */}
                        {currentIndex > 0 && (
                            <button
                                onClick={handleLeftSwipe}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 animate-slide-left"
                            >
                                <Image src={SlideLeftIcon} width={24} height={24} alt="slide-left" />
                            </button>
                        )}

                        {currentIndex < slides.length - 1 && (
                            <button
                                onClick={handleRightSwipe}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 animate-slide-right"
                            >
                                <Image src={SlideRightIcon} width={24} height={24} alt="slide-right" />
                            </button>
                        )}
                    </div>
                ) : null} {/* Render nothing for images on the last index */}

                <div className="mt-4 text-center">
                    {currentIndex < slides.length - 1 ? (
                        <>
                            <h3 className="text-lg font-bold">{slides[currentIndex].name}</h3>
                            <div className="mt-4 flex items-center justify-center">
                                {userResponses[currentIndex] === null ? (
                                    <>
                                        <button
                                            onClick={() => handleResponse("liked")}
                                            className="mr-2 bg-[#E6C4BC] text-black px-4 py-2 rounded flex gap-2"
                                        >
                                            <Heart />
                                            Like
                                        </button>
                                        <button
                                            onClick={() => handleResponse("disliked")}
                                            className="bg-[#3C3B3A] text-white px-4 py-2 rounded flex gap-2"
                                        >
                                            <CircleX />
                                            Dislike
                                        </button>
                                    </>
                                ) : userResponses[currentIndex] === "liked" ? (
                                    <p className="text-green-500">You liked this design!</p>
                                ) : (
                                    <p className="text-red-500 items-center">You disliked this design!</p>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="rounded">
                            <div className="flex flex-col bg-gray-100 p-2 py-4 gap-1 text-black">
                                <p className="text-12px">You liked {totalLikes} designs.</p>
                                <p className="text-12px">You disliked {totalDislikes} designs.</p>
                            </div>
                            {/* Display liked images */}
                            <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-2 xl:columns-4 2xl:columns-4 gap-4 space-y-4 p-4 pb-100">
                                {likedImages.map((src, index) => (
                                    <div key={index} className="relative">
                                        <Image
                                            src={src}
                                            alt={`Liked Image ${index + 1}`}
                                            layout="responsive"
                                            width={500}
                                            height={500}
                                            className="rounded-lg shadow-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Slider;
