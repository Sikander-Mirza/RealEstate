import React, { useState } from 'react';
import { Home, Search, User, Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram, Youtube, ChevronDown } from 'lucide-react';
import heroimage from "../../public/hero-section.jpg"
import heroimage1 from "../../public/hero-img1.jpg"
import heroimage2 from "../../public/hero-img2.jpg"
import Vector from "../../public/Vector.png"
import dollar from "../../public/dollar.png"
import property from "../../public/property.png"
import company from "../../public/company.png"
import hammer from "../../public/hammer.png"
import diamond from "../../public/diamond.png"
import shake from "../../public/shake.png"
import dreamhome1 from "../../public/dreamhome1.jpg"
import dreamhome2 from "../../public/dreamhome2.jpg"
import testionial1 from "../../public/testimonial1.png"
import testionial2 from "../../public/testimonial2.png"
import testionial3 from "../../public/testimonial3.png"
import testionial4 from "../../public/testimonial4.png"
import founder from "../../public/founder.jpg"
import independent from "../../public/independent.png"
import realstate from "../../public/realstate.png"
import brain from "../../public/brain.png"
import footer1 from "../../public/footer1.png"
import footer2 from "../../public/footer2.png"
import footer3 from "../../public/footer3.png"
import footer4 from "../../public/footer4.png"
import footer5 from "../../public/footer5.jpg"
import footer6 from "../../public/footer6.jpg"
import footer7 from "../../public/footer7.jpg"
import footer8 from "../../public/footer8.png"
import footerlogo from "../../public/footer-logo.png"
import { motion } from 'framer-motion';

export default function DiviaightLanding() {
    const [activeTab, setActiveTab] = useState('buyer');

    const propertyImages = [
        testionial1,
        testionial2,
        testionial3,
        testionial4
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Navigation */}
            <nav className="flex items-center justify-between px-8 py-4 bg-black border-b border-gray-900">
                <div className="flex items-center">
                    <img src={footerlogo} alt="" className='h-15' />
                </div>

                <div className="flex items-center gap-15">
                    <a href="#" className="text-white hover:text-blue-500 transition" style={{ fontWeight: "700", fontSize: "18px", fontFamily: "Montserrat" }}>Home</a>
                    <a href="#" className="text-white hover:text-blue-500 transition" style={{ fontWeight: "700", fontSize: "18px", fontFamily: "Montserrat" }}>Service</a>
                    <a href="#" className="text-white hover:text-blue-500 transition" style={{ fontWeight: "700", fontSize: "18px", fontFamily: "Montserrat" }}>Agents</a>
                    <a href="#" className="text-white hover:text-blue-500 transition" style={{ fontWeight: "700", fontSize: "18px", fontFamily: "Montserrat" }}>Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-900 rounded">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-900 rounded">
                        <User className="w-5 h-5" />
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-sm font-semibold transition">
                        Sign up
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="  bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
                {/* Background Image */}
                <div className="relative w-full  lg:py-28 ">

                    {/* Dark background image */}
                    <div className="absolute inset-0 opacity-30">
                        <img src={heroimage} alt="Background" className="w-full h-full " /> </div>

                    {/* Content Container */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                        {/* LEFT TEXT BLOCK */}
                        <div>
                            <p className="text-[#ffffff] text-sm mb-3 tracking-widest" style={{ fontSize: "23.69px", fontFamily: "Poppins", fontWeight: "400" }}>
                                INTRODUCING
                            </p>

                            <h2
                                className="mb-6 leading-tight"
                                style={{
                                    fontFamily: "MoglanDemo",
                                    fontSize: "57px",
                                    fontWeight: 400,
                                    lineHeight: "1.1",
                                }}
                            >
                                INDEPENDENT <br /> CO-OWNERSHIP
                            </h2>

                            <h3 className="lg:text-2xl text-gray-300 mb-8 font-light tracking-wide" style={{ fontFamily: "Poppins", fontSize: "23.69px" }}>
                                BUYS SHARES | SELL SHARES | LEARN HOW
                            </h3>

                            <div
                                className="space-y-4 text-gray-300 mb-10"
                                style={{ fontFamily: "Poppins" }}
                            >
                                <p>
                                    We Transform Awesome Vacation Homes From “Ownership” into “Co-Ownership”.
                                    We Don’t Sell Real Estate. We Show Our Clients How To Select Any Vacation Home,
                                    Then Divide The Title And Ownership.
                                </p>

                                <p>
                                    We Invented The Independent Co-Ownership Concept Which Dramatically Reduces Ownership Costs.
                                </p>

                                <p>
                                    We’re Experienced Consultants Who Guide Clients In Transforming Ownership Into Co-Ownership.
                                </p>
                            </div>

                            <button className="bg-[#47AEB6] hover:bg-blue-700 px-8 py-3 rounded text-sm font-semibold transition">
                                Book a Free Introductory Session to Learn How?
                            </button>
                        </div>

                        {/* RIGHT IMAGE STACK */}
                        <div className="relative h-[480px] lg:h-[520px]">

                            {/* MAIN LARGE IMAGE */}
                            <div className="absolute top-0 right-0 w-[85%] h-[120%] border-r-4 border-b-4 border-white rounded-[10px] overflow-hidden shadow-2xl">
                                <img
                                    src={heroimage1}
                                    alt="Main Home"
                                    className="w-full h-full object-cover"
                                />
                            </div>


                            {/* SMALL OVERLAPPING IMAGE */}
                            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] 
        rounded-2xl overflow-hidden shadow-2xl border-4 border-black z-20 
        translate-x-[-15%] translate-y-[15%]">
                                <img
                                    src={heroimage2}
                                    alt="Small Home"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>


                {/* Tab Selection */}
                <div className="max-w-4xl mx-auto mt-16 flex gap-4 mb-15">

                    <button
                        onClick={() => setActiveTab('buyer')}
                        className={`flex-1 py-4 px-6 rounded-lg font-semibold flex items-center justify-between transition bg-white 
      ${activeTab === 'buyer' ? 'text-black' : 'text-gray-500'}`}
                    >
                        <span style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "21.51px" }}>Buyer</span>
                        <img src={Vector} alt="" className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => setActiveTab('seller')}
                        className={`flex-1 py-4 px-6 rounded-lg font-semibold flex items-center justify-between transition bg-white 
      ${activeTab === 'seller' ? 'text-black' : 'text-gray-500'}`}
                    >
                        <span style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "21.51px" }}>Seller</span>
                        <img src={dollar} alt="" className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => setActiveTab('list')}
                        className={`flex-1 py-4 px-6 rounded-lg font-semibold flex items-center justify-between transition bg-white 
      ${activeTab === 'list' ? 'text-black' : 'text-gray-500'}`}
                    >
                        <span style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "21.51px" }}>List a Property</span>
                        <img src={property} alt="" className="w-6 h-6" />
                    </button>

                </div>

            </section>

            {/* How Our Company Works */}
            <section className="py-20 px-8 bg-black relative">
                <div className="absolute inset-0 opacity-50">
                    <img
                        src={company}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-white text-sm mb-1 tracking-wider font-semibold" style={{ fontSize: "17.08px" }}>
                            ARE YOU A PROSPECTIVE BUYER WITH A DREAM? GO TO OUR INQUIRE SECTION.
                        </p>

                        <p className="text-white text-sm mb-8 font-semibold" style={{ fontSize: "17.08px" }}>
                            TELL US YOUR PREFERENCES AND LET US HELP YOU FIND EXACTLY WHAT YOU WANT!
                        </p>

                        {/* CENTERED THIN LINE */}
                        <div className="w-[730px] h-[2px] bg-teal-400 mx-auto mb-6"></div>

                        <h2 className="text-6xl font-serif font-light tracking-wide">
                            HOW OUR COMPANY WORKS
                        </h2>
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        {/* Left Card - We Show You How */}
                        <div className="bg-black mt-20 bg-opacity-70 border border-teal-400 rounded-lg p-8 backdrop-blur">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12  rounded flex items-center justify-center" style={{ backgroundColor: "#242424" }}>
                                    <img src={hammer} alt="" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif mb-4">We Show You How</h3>
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                We facilitate the technical and legal skill to make the transaction seamless and worry free.
                            </p>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• Professional training</li>
                                <li>• 100+ years of combined real estate experience</li>
                                <li>• Comprehensive and exclusive transactional process</li>
                            </ul>
                        </div>

                        {/* Center Card - Second home Owners */}
                        <div
                            className="bg-black bg-opacity-90 border-2 border-teal-400 rounded-lg p-8 backdrop-blur 
             transform lg:-translate-y-4 shadow-[0_0_25px_#14B8A6] transition"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-teal-400 rounded flex items-center justify-center">
                                    <div className="w-12 h-12 rounded flex items-center justify-center" style={{ backgroundColor: "#242424" }}>
                                        <img src={diamond} alt="" />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-3xl font-serif mb-4">Second home Owners</h3>

                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                You'd like to reduce your annual ownership costs. Now you can! By 88%!
                            </p>

                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• Process-ready</li>
                                <li>• You'll remain on title</li>
                                <li>• Property use and enjoyment throughout each year</li>
                                <li>• Worry-free, custom administratio</li>
                            </ul>
                        </div>


                        {/* Right Card - Buyers */}
                        <div className="bg-black mt-20 bg-opacity-70 border border-teal-400 rounded-lg p-8 backdrop-blur">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12  rounded flex items-center justify-center" style={{ backgroundColor: "#242424" }}>
                                    <img src={shake} alt="" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif mb-4">Buyers</h3>
                            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                You've wanted to own your very own vacation home. Now you can — at 1/8th of the cost!
                            </p>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• Professional Guidance</li>
                                <li>• Title and Equity</li>
                                <li>• Coordinated administration after the closing</li>
                                <li>• Property use and enjoyment throughout each year</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enjoy Your Dream Home */}
            <section className="py-24 px-10 bg-black relative overflow-hidden mt-5">

                {/* LEFT IMAGE */}
                <div className="hidden lg:block absolute left-5 ">
                    <img
                        src={dreamhome1}
                        alt="Left interior"
                        className="w-[280px] h-[320px] object-cover rounded-2xl shadow-2xl"
                    />
                </div>


                {/* RIGHT IMAGE */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 right-5">
                    <img
                        src={dreamhome2}
                        alt="Right interior"
                        className="w-[280px] h-[320px] object-cover rounded-2xl shadow-2xl" style={{ marginTop: "120px" }}
                    />
                </div>

                {/* CENTER CONTENT */}
                <div className="relative max-w-3xl mx-auto text-center">

                    <p className="text-white tracking-[0.4em] text-sm mb-3" style={{ fontSize: "25.13px", fontFamily: "Rethink Sans" }}>AFFORDABLY</p>

                    <h2 className=" md:text-6xl font-serif font-light text-white mb-4" style={{ fontSize: "46.61px", fontWeight: "400", fontFamily: "MoglanDemo" }}>
                        ENJOY YOUR DREAM HOME NOW
                    </h2>

                    {/* BLUE LINE */}
                    <div className="w-170 h-[3px] bg-teal-400 mx-auto mb-10"></div>

                    <div className="text-gray-300 space-y-6 leading-relaxed mb-10 font-light">
                        <p>
                            Why wait until retirement to begin enjoying your dream home in the mountains,
                            beach, or near a favorite family getaway? With divieight you have enough
                            money now and can begin searching for a property immediately that has
                            everything you could want!
                        </p>
                        <p>
                            Soon, you'll not only have title and ownership, you'll have property use and
                            enjoyment throughout all the seasons of each year!
                        </p>
                    </div>

                    <button className="hover:bg-teal-600 px-8 py-3 rounded-lg text-white font-medium text-sm transition" style={{ backgroundColor: "#47AEB6" }}>
                        Book A Free Introductory Session To Learn How
                    </button>
                </div>

            </section>


            {/* Client Experiences */}
            <section className="py-20 px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    <p className="text-center text-[#FFFFFF] mb-4" style={{ fontSize: "25.13px", fontFamily: "Poppins" }}>
                        See What Our Clients Have To Say. Check Us Out On Social Media
                    </p>

                    <div className="w-170 h-[3px] bg-teal-400 mx-auto mb-4"></div>

                    <h2 className="text-center mb-12" style={{ fontFamily: "MoglanDemo", fontSize: "51px", fontWeight: "400" }}>Our Recent Client Experiences</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {propertyImages.map((img, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg">

                                <img
                                    src={img}
                                    alt={`Property ${index + 1}`}
                                    className="w-full h-100 object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

                                <div className="absolute bottom-4 right-4 text-white text-6xl font-bold opacity-50">

                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Founder Message */}
            <section className="py-20 px-6 lg:px-12 bg-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <p className="text-white  mb-2 tracking-wide" style={{ fontFamily: "Poppins", fontWeight: "500", fontSize: "35.94px" }}>
                            A message from our
                        </p>

                        <h2 className="text-4xl text-white" style={{ fontFamily: "MoglanDemo", fontWeight: "400", fontSize: "44.33px" }}>
                            FOUNDER ABOUT INDY-CO
                        </h2>

                        {/* TEAL UNDERLINE */}
                        <div className="w-130 h-[2px] bg-teal-400 mt-3 mb-8"></div>

                        <div className="text-gray-300 text-[17px] leading-relaxed space-y-3">
                            <p>My name is Mark. I’m glad you found us!</p>

                            <p>
                                I started the “independent” co-ownership concept years ago when I
                                discovered that people would love to own a vacation home.
                            </p>

                            <p>
                                Problem was, they just couldn’t justify the cost of purchase and
                                ownership. After all, it is a second home – with infrequent use.
                            </p>

                            <p>
                                I solved that puzzle years ago. Now I train people of all economic
                                and professional backgrounds. Join my podcast. In the meantime,
                                contact us. Tell us your story and your needs. We can help, I promise.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE WITH CURVED SHAPE */}
                    <div className="relative flex justify-center">
                        <div className="overflow-hidden border-4 border-white rounded-[10px] rounded-bl-[120px] shadow-2xl">
                            <img
                                src={founder}
                                alt="Founder Mark"
                                className="w-[380px] h-[480px] object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>


            {/* Areas of Expertise */}
            <section className="py-20 px-8 bg-[#1B1B1B]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl mb-12" style={{ fontFamily: "MoglanDemo", fontWeight: "400", fontSize: "48px" }}>Our Areas of Expertise
                        <div className="w-110 h-[2px] bg-teal-400 mt-5 mb-8"></div>
                    </h2>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#121212] p-8 rounded-lg flex items-center justify-between hover:bg-gray-800 transition">
                            <span className="text-xl text-gray-300">Independent Co-Ownership (Indy-Co)</span>
                            <div className="w-12 h-12 bg-[#242424] rounded flex items-center justify-center">
                                <img src={independent} alt="" className='w-8 h-8' />
                            </div>
                        </div>

                        <div className="bg-[#121212] p-8 rounded-lg flex items-center justify-between hover:bg-gray-800 transition">
                            <span className="text-xl text-gray-300">Independent Co-Ownership (Indy-Co)</span>
                            <div className="w-12 h-12 bg-[#242424] rounded flex items-center justify-center">
                                <img src={diamond} alt="" className='w-8 h-8' />
                            </div>
                        </div>

                        <div className="bg-[#121212] p-8 rounded-lg flex items-center justify-between hover:bg-gray-800 transition">
                            <span className="text-xl text-gray-300">Real Estate Investing</span>
                            <div className="w-12 h-12 bg-[#242424] rounded flex items-center justify-center">
                                <img src={realstate} alt="" className='w-8 h-8' />
                            </div>
                        </div>

                        <div className="bg-[#121212] p-8 rounded-lg flex items-center justify-between hover:bg-gray-800 transition">
                            <span className="text-xl text-gray-300">Business Administration</span>
                            <div className="w-12 h-12 bg-[#242424] rounded flex items-center justify-center">
                                <img src={brain} alt="" className='w-8 h-8' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-[#0f0f0f] px-8 py-14">
                <div className="max-w-7xl mx-auto">

                    {/* TOP GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1.5fr_1fr] gap-20">


                        {/* BRAND + EMAIL + IMAGES */}
                        <div>
                            <h3 className="text-4xl font-bold mb-6">
                                <img src={footerlogo} alt="" className=' h-20' />
                            </h3>

                            {/* EMAIL BOX */}
                            <div className="flex items-center gap-3 mb-8 bg-[#111] px-4 py-2 rounded-full border border-neutral-800">
                                <Mail className="text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Here"
                                    className="flex-1 bg-transparent text-sm text-gray-300 outline-none"
                                />
                                <button className="bg-white p-2 rounded-full hover:bg-gray-200 transition">
                                    <Send className="text-black w-4 h-4" />
                                </button>
                            </div>

                            {/* IMAGE STRIP */}
                            <div className="flex gap-1">
                                {[
                                    footer1,
                                    footer2,
                                    footer3,
                                    footer4,
                                    footer5,
                                    footer6,
                                    footer7,
                                    footer8,
                                ].map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt="Property"
                                        className="w-15 h-20 rounded-lg object-cover border border-neutral-800"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* QUICK LINKS */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-[#47AEB6]">Quick Link</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-blue-500 transition text-[#DBDBDB]">Home</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition text-[#DBDBDB]">About</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition text-[#DBDBDB]">Property</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition text-[#DBDBDB]">Service</a></li>
                            </ul>
                        </div>

                        {/* CONTACT INFO */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-[#47AEB6]">Contact</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li className="flex items-center gap-2 text-[#DBDBDB]">
                                    <Phone className="w-4 h-4" style={{ color: "#47AEB6" }} /> +123 456 789
                                </li>
                                <li className="flex items-center gap-2 text-[#DBDBDB]">
                                    <Mail className="w-4 h-4" style={{ color: "#47AEB6" }} /> support@divieight.com
                                </li>
                                <li className="flex items-center gap-2 leading-5 text-[#DBDBDB]">
                                    <MapPin className="w-4 h-4" style={{ color: "#47AEB6" }} />
                                    Sudirman Street 302, Metro,<br />Lampung Indonesia.
                                </li>
                                <li className="flex items-center gap-2 text-[#47AEB6] cursor-pointer hover:underline">
                                    → See On Map
                                </li>
                            </ul>
                        </div>

                        {/* SUPPORT */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-[#47AEB6]">Support</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-blue-500 transition text-[#DBDBDB]">Contact us</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition text-[#DBDBDB]">Help Center</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition text-[#DBDBDB]">How It Works</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition text-[#DBDBDB]">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="w-full border-t border-[#388389] mt-12 mb-8"></div>
                    <div className="flex justify-center gap-4 mb-8">
                        {[
                            Facebook,
                            Twitter,
                            Instagram,
                            Linkedin,
                            Youtube,
                            // Custom Icons (WhatsApp + Telegram)
                        ].map((Icon, i) => (
                            <button
                                key={i}
                                className="w-10 h-10 bg-neutral-900 hover:bg-blue-600 flex items-center justify-center transition border border-white rounded-[10px]"
                            >
                                <Icon className="w-5 h-5 text-[#47AEB6]" />
                            </button>
                        ))}

                        {/* WHATSAPP */}
                        <button className="w-10 h-10 bg-neutral-900 hover:bg-blue-600 flex items-center justify-center transition border border-white rounded-[10px]">
                            <svg
                                className="w-5 h-5 text-[#47AEB6]"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.5 1.34 5.04L2 22l5.15-1.33A9.93 9.93 0 0012.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.64 14.57c-.24.67-1.38 1.29-1.9 1.33-.49.04-1.09.06-1.76-.11-.41-.1-.94-.31-1.63-.61-2.86-1.24-4.72-4.03-4.86-4.22-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.1.99-2.38.26-.29.57-.36.76-.36.19 0 .38.01.54.01.17 0 .41-.07.64.49.24.57.82 1.97.89 2.11.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.13.56.17.29.75 1.24 1.62 2.01 1.12.99 2.07 1.3 2.36 1.44.29.15.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.64-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.69-.17 1.36z" />
                            </svg>
                        </button>

                        {/* TELEGRAM */}
                        <button className="w-10 h-10 bg-neutral-900 hover:bg-blue-600 flex items-center justify-center transition border border-white rounded-[10px]">
                            <svg
                                className="w-5 h-5 text-[#47AEB6]"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9.04 15.81l-.39 5.52c.56 0 .8-.24 1.1-.53l2.64-2.52 5.48 4.01c1 .55 1.71.26 1.98-.93l3.59-16.72.01-.01c.32-1.49-.54-2.07-1.51-1.71L1.51 9.49c-1.45.57-1.43 1.39-.25 1.77l6.57 2.05L18.57 6.2c.6-.37 1.15-.17.7.2" />
                            </svg>
                        </button>
                    </div>

                    {/* COPYRIGHT */}
                    <p className="text-center text[#DBDBDB] text-sm">
                        © Copyright divieight. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
}
