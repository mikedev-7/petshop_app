import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from Next.js

// Import pet images
import Pet1Img from '../public/img/pets/1.png';
import Pet2Img from '../public/img/pets/2.png';
// Include all other pet images similarly

// Import badge image
import badge from '../public/img/pets/badge.svg';

// Define array of pets
const pets = [
  {
    id: 1,
    category: 'cat',
    name: 'kyba',
    image: Pet1Img
  },
  {
    id: 2,
    category: 'bird',
    name: 'rotty',
    image: Pet2Img
  },
  // Add all other pets similarly
];

const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[10]); // Initial pet details
  const [petIndex, setPetIndex] = useState(10); // Initial pet index

  // Function to get details of clicked pet
  const getPetDetails = (id) => {
    const pet = pets.find((pet) => pet.id === id);
    if (pet) {
      setPetDetails(pet);
      setPetIndex(pets.indexOf(pet)); // Update pet index
    }
  };

  return (
    <section className='bg-pets bg-center py-6 overflow-hidden'>
      <div className='flex flex-col lg:flex-row'>
        {/* Badge */}
        <div className='hidden xl:flex xl:w-[30%] xl:pl-[160px]'>
          <Image src={badge} width={230} height={227} alt='Badge' />
        </div>

        {/* Pets details and list */}
        <div className='flex-1 flex flex-col lg:flex-row'>
          {/* Pet details */}
          <div className='lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0'>
            <div className='text-center text-white'>
              {/* Category */}
              <div className='text-[32px] capitalize'>{petDetails.category}</div>
              {/* Name */}
              <div className='uppercase text-[17px] mb-1'>({petDetails.name})</div>
              {/* Image */}
              <div className='w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white rounded-full'>
                <Image src={petDetails.image} width={150} height={150} alt='Pet' />
              </div>
            </div>
          </div>

          {/* Pet list */}
          <div className='relative lg:w-[60%] flex-1 flex items-center'>
            <div className='flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-6'>
              {/* Map over pets array */}
              {pets.map((pet, index) => (
                <div
                  key={index}
                  onClick={() => {
                    getPetDetails(pet.id);
                  }}
                  className= {`cursor-pointer relative ${petIndex === index ? 'border-2 border-white' : 'bg-black/40'}`}
                >
                  {/* Overlay */}
                  <div className='w-full h-full absolute rounded-full'></div>
                  {/* Pet Image */}
                  <Image src={pet.image} width={95} height={95} alt={`Pet ${pet.id}`} draggable='false' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
