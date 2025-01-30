import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
    id: 0,
    title: "Toyota Corolla 2014",
    desc: "The 2014 Toyota Corolla is a compact sedan that combines reliability with efficiency. It features a 1.8-liter 4-cylinder engine, offering a smooth and economical drive. With seating for five and ample trunk space, it provides both comfort and practicality. Safety features such as airbags and stability control ensure peace of mind, making it an ideal choice for daily commuting and long-term ownership.",
    img: "/car-1.jpg",
    tags: ["Airbags", "1.3 CC", "Dashcam", "Safety"],
    },
    {
    id: 1,
    title: "Toyota Corolla 2020",
    desc: "The 2014 Toyota Corolla is a compact sedan that combines reliability with efficiency. It features a 1.8-liter 4-cylinder engine, offering a smooth and economical drive. With seating for five and ample trunk space, it provides both comfort and practicality. Safety features such as airbags and stability control ensure peace of mind, making it an ideal choice for daily commuting and long-term ownership.",
    img: "/car-2.jpg",
    tags: ["Safety", "Dashcam", "Airbags", "Sunroof"],
    },
    {
    id: 2,
    title: "Toyota Fortuner 24",
    desc: "The Toyota Fortuner is a mid-size SUV that blends power with luxury. It features a 2.8-liter turbo-diesel engine, providing a strong and smooth drive. With seating for seven and generous cargo space, it offers both comfort and practicality. Safety features such as multiple airbags and stability control ensure peace of mind, making it a versatile choice for both urban commuting and off-road adventures.", 
    img: "/car-3.jpg",
    tags: ["Cool box", "Airbags", "KeyCard", "Sunroof"],
    },
    {
    id: 3,
    title: "Toyota Fortuner 2017",
    desc: "The Toyota Fortuner is a mid-size SUV that blends power with luxury. It features a 2.8-liter turbo-diesel engine, providing a strong and smooth drive. With seating for seven and generous cargo space, it offers both comfort and practicality. Safety features such as multiple airbags and stability control ensure peace of mind, making it a versatile choice for both urban commuting and off-road adventures.",
    img: "/car-4.jpg",
    tags: ["Cool box", "Airbags", "KeyCard", "Sunroof"],
    },
    {
    id: 4,
    title: "Suuki Mehran 2019",
    desc: "The Suzuki Mehran is a compact city car known for its affordability and durability. It features an 800cc 3-cylinder engine, offering modest performance suitable for urban driving. With a manual transmission and basic amenities, it's a popular choice for first-time car buyers. The Mehran is also celebrated for its high resale value and low maintenance costs, making it a practical option for many",
    img: "/car-5.jpg",
    tags: ["Seatbelt", "AC", "Immobilizer Key", "Speakers"],
    },
    {
    id: 5,
    title: "Honda Civic 2024",
    desc: "The Honda Civic is a compact car that excels in performance and style. It features a 1.8-liter 4-cylinder engine, delivering a responsive and efficient drive. With seating for five and a spacious interior, it provides both comfort and practicality. Safety features such as airbags and stability control ensure peace of mind, making it an ideal choice for daily commuting and long-term ownership. Its slees.",
    img: "/car-6.jpg",
    tags: ["Wireless", "AC", "Pwr Steering", "KeyCard"],
    },
];
  
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Cars' /> 
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
