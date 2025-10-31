"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, MessageSquare, Star } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="GrandView Hotel"
          logoSrc="https://images.pexels.com/photos/33929921/pexels-photo-33929921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Detailed shot of the Alvis emblem on a vintage car grille showcasing classic automotive design."
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Where exceptional service meets timeless elegance. Discover our world-class accommodations and create unforgettable memories."
          tag="5-Star Hotel"
          tagIcon={Star}
          imageSrc="https://images.pexels.com/photos/15447099/pexels-photo-15447099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel exterior at golden hour"
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Amenities",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Where luxury meets comfort, and every detail is crafted to perfection. Experience unparalleled hospitality in the heart of the city."
          buttons={[
            {
              text: "View Rooms",
              href: "https://booking.example.com"
            },
            {
              text: "Learn More",
              href: "about-details"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Hotel Amenities"
          description="Discover our exceptional facilities designed for your comfort and convenience"
          tag="Premium Services"
          tagIcon={Crown}
          features={[
            {
              title: "Elegant Suites",
              description: "Spacious rooms with premium furnishings, city views, and luxury amenities",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel suite interior"
            },
            {
              title: "Lobby Lounge",
              description: "Grand lobby with comfortable seating, perfect for meetings or relaxation",
              imageSrc: "https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel lobby with elegant furniture"
            },
            {
              title: "Fine Dining",
              description: "Award-winning restaurant serving gourmet cuisine with exceptional service",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant dining room"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read testimonials from our valued guests who experienced our exceptional hospitality"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO",
              company: "TechCorp International",
              rating: 5,
              testimonial: "Exceptional service and luxury accommodations. The attention to detail was remarkable, and the staff went above and beyond to ensure our stay was perfect.",
              imageSrc: "https://images.pexels.com/photos/8425032/pexels-photo-8425032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael & Elena Chen",
              role: "Honeymooners",
              company: "Anniversary Stay",
              rating: 5,
              testimonial: "Our anniversary stay was absolutely magical. The suite was stunning, the dining was exquisite, and every moment felt special. Highly recommended!",
              imageSrc: "https://images.pexels.com/photos/6181080/pexels-photo-6181080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael and Elena Chen"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Business Executive",
              company: "GlobalFinance Ltd",
              rating: 5,
              testimonial: "Perfect for business travel. The facilities are top-notch, the location is ideal, and the business center exceeded all expectations.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Rodriguez"
            },
            {
              id: "4",
              name: "Jennifer Thompson",
              role: "Family Vacation",
              company: "Weekend Getaway",
              rating: 5,
              testimonial: "Our family vacation was unforgettable. The kids loved the amenities, and we appreciated the thoughtful touches throughout our stay.",
              imageSrc: "https://images.pexels.com/photos/34519519/pexels-photo-34519519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Jennifer Thompson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Book Your Stay?"
          description="Contact us to make a reservation or inquire about our services. Our concierge team is here to assist you."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "dates",
              type: "text",
              placeholder: "Preferred Dates",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or additional information...",
            rows: 4,
            required: false
          }}
          buttonText="Send Inquiry"
          imageSrc="https://images.pexels.com/photos/8667538/pexels-photo-8667538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge desk with elegant reception area"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="GrandView Hotel"
          columns={[
            {
              items: [
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "about"
                },
                {
                  label: "Dining",
                  href: "dining"
                }
              ]
            },
            {
              items: [
                {
                  label: "Book Now",
                  href: "contact"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "location"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about-details"
                },
                {
                  label: "Events",
                  href: "events"
                },
                {
                  label: "Careers",
                  href: "careers"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}