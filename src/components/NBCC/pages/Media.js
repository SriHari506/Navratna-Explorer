import React from 'react';
import { Link } from 'react-router-dom';
import './Media.css'; // Import the updated CSS for styles

const Media = () => {
  const awards = [
    {
      image: "https://nbccindia.in/images/awards/9TH%20Atal%20Shastra%20Awards.jpeg",
      title: "Infrastructure Construction Public Sector Enterprise",
      description: "NBCC was awarded as “Best Infrastructure Construction Public Sector Enterprise (PSE) of India” at the 9th Atal Shastra Markenomy Awards 2024 on October 18, 2024 in Mumbai.",
      date: "Oct 2024",
    },
    {
      image: "https://nbccindia.in/images/awards/Fortune%20Leadership%20Award.jpg",
      title: "Fortune Leadership Award 2024",
      description: "NBCC received the Fortune Leadership Award 2024 in the CSR category at a prestigious ceremony in New Delhi on October 19, 2024.",
      date: "Oct 2024",
    },
    {
      image: "https://nbccindia.in/images/awards/HaritRatnaAward_Oct_2024.jpg",
      title: "Harit Ratna Award for Clean Construction",
      description: "NBCC was honored with the Harit Ratna Award presented by Shri Gopal Rai, Honorable Delhi Cabinet Minister for Environment, Forest, and Wildlife.",
      date: "Oct 2024",
    },
    {
      image: "https://nbccindia.in/images/awards/PSUAward2024.jpg",
      title: "Digital Transformation Excellence Award",
      description: "NBCC was honored with the Digital Transformation Excellence Award at the 9th PSU IT Forum, held on September 26, 2024.",
      date: "Sep 2024",
    },
    {
      image: "https://nbccindia.in/images/awards/BIS_Award_2024.jpg",
      title: "Award of Appreciation from BIS for 25 Years of Upholding Excellence",
      description: "NBCC was honored with an Award of Appreciation by the Bureau of Indian Standards (BIS) for consistently upholding the highest standards over the past two and a half decades.",
      date: "Sep 2024",
    },
    {
      image: "https://nbccindia.in/images/awards/Award_Sep_2024.jpg",
      title: "Award by TOLIC Delhi for Rajbhasha Utsav",
      description: "NBCC was presented with a Shield by the Town Official Language Implementation Committee (TOLIC) for exhibition in Rajbhasha Utsav and securing first position in the Quiz Competition.",
      date: "Sep 2024",
    },
    {
      image: "https://nbccindia.in/images/awards/Top%20Rankers%20Excellence%20Award%202024.jpg",
      title: "Top Rankers Excellence Award 2024 - Company of the Year",
      description: "NBCC received the Top Rankers Excellence Award 2024 for 'Company of the Year' in recognition of its contribution in the construction and infrastructure sector.",
      date: "Aug 2024",
    },
    {
      image: "https://nbccindia.in/images/awards/Award_Aug_2024.jpg",
      title: "16th Exceed Environment, CSR & HR Award 2024",
      description: "NBCC bagged three awards in the 16th Exceed Environment, CSR & HR Award 2024: Gold Awards for CSR & HR Wellness and a Silver Award for HR Training Excellence.",
      date: "Aug 2024",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Indian Built Environment Awards 2024 - Office and Commercial Buildings",
      description: "NBCC was honored with the Indian Built Environment Award 2024 in the Office and Commercial Buildings category for 'Kaushal Bhawan'.",
      date: "July 2024",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sustainability Champion - Editor’s Choice Award",
      description: "NBCC was recognized as a Sustainability Champion and awarded the Editor’s Choice Award at the Outlook Planet Sustainability Summit & Awards 2024.",
      date: "May 2024",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Best Construction Infrastructure Public Sector Enterprise",
      description: "NBCC was conferred with the prestigious ‘Best Construction Infrastructure Public Sector Enterprise (PSE)’ award at the 8th Atal Shastra Markenomy Awards 2023.",
      date: "Dec 2023",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Green Ribbon Champions - Excellence in Green Technology Adoption",
      description: "NBCC was conferred with Green Ribbon Champions by News 18 for Excellence in Green Technology Adoption.",
      date: "Oct 2023",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "14th Exceed HR Awards 2023 - CSR & Training Category",
      description: "NBCC bagged the 14th Exceed HR Award 2023 for its outstanding CSR & training practices.",
      date: "Aug 2023",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Silver Award for COVID Relief Project (Mega)",
      description: "NBCC received a Silver Award from the Integrated Health and Wellbeing Council for its contribution to COVID vaccination efforts in Leh and Ladakh.",
      date: "July 2023",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "CEO of the Year Award by Asia HRD Congress",
      description: "Shri P.K. Gupta, Chairman-and-Managing Director of NBCC, was conferred with the 'CEO of The Year' award by the Asia HRD Congress.",
      date: "July 2023",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Responsible Business Award by World CSR Day",
      description: "NBCC was conferred with the Responsible Business Award under the 'Real Estate Category' for Amrapali Projects.",
      date: "July 2023",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Digital Transformation Leader Award",
      description: "NBCC’s GM (IT), Mr. Satish Kumar Nangia, received the Digital Transformation Leader award for his outstanding contribution to digital growth through technology.",
      date: "Feb 2023",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Atal Shastra Markenomy Award for Best Public Sector Enterprise",
      description: "NBCC received the Atal Shastra Markenomy Award for ‘Best Public Sector Enterprise impacting Market Infra Economy’ at the 2022 ceremony.",
      date: "Nov 2022",
    },
  ];

  return (
    <div className="media-container">
      {/* Media Page Header */}
      <header className="media-header text-center py-5">
        <h1>Awards & Recognition</h1>
        <p>Celebrating our achievements and milestones.</p>
      </header>

      {/* Awards Content Section */}
      <section className="awards-content py-5">
        <h2 className="text-center mb-4">Our Prestigious Awards</h2>
        
        {/* Awards Grid */}
        <div className="card-container">
          {awards.map((award, index) => (
            <div key={index} className="card">
              <img src={award.image} alt={award.title} />
              <div className="card-body">
                <h5 className="card-title">{award.title}</h5>
                <p className="card-date">{award.date}</p>
                <p className="card-text">{award.description}</p>
                <Link to="/media/award-details" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sliding Bar */}
        <div className="sliding-bar">
          <h3 className="text-center mb-4">Explore More Awards</h3>
          <div className="slider">
            <input type="range" min="1" max="100" value="50" className="slider-range" />
            <p className="slider-value">Slide to view additional awards</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Media;
