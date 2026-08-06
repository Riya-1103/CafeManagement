// import React, { useState } from 'react';
// import LogoutButton from '../../Components/LogoutButton';
// import MenuPage from './MenuPage';

// const Home = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('tab-1');

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Navigation Bar */}
//       <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <i className="fa fa-utensils text-2xl text-amber-500 mr-2"></i>
//               <h1 className="text-2xl font-bold">Restoran</h1>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-8">
//               <a href="/Students/Home" className="font-medium hover:text-amber-400 border-b-2 border-amber-500">Home</a>
//               <a href="/Students/About" className="font-medium hover:text-amber-400">About</a>
//               <a href="/Students/MenuItemPage" className="font-medium hover:text-amber-400">Items</a>
//               <a href="menu.html" className="font-medium hover:text-amber-400">Menu</a>
//               <div className="relative group">
//                 <button className="font-medium hover:text-amber-400 flex items-center">
//                   Pages <i className="fa fa-chevron-down ml-1 text-xs"></i>
//                 </button>
//                 <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg rounded mt-1 py-2 w-48">
//                   <a href="booking.html" className="block px-4 py-2 hover:bg-amber-50">Booking</a>
//                   <a href="team.html" className="block px-4 py-2 hover:bg-amber-50">Our Team</a>
//                   <a href="testimonial.html" className="block px-4 py-2 hover:bg-amber-50">Testimonial</a>
//                 </div>
//               </div>
//               <a href="contact.html" className="font-medium hover:text-amber-400">Contact</a>
//               <a href="#" className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded">Book A Table</a>
//               <LogoutButton className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded" />
//             </div>
            
//             {/* Mobile menu button */}
//             <div className="lg:hidden">
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-white focus:outline-none"
//               >
//                 <i className={`fa fa-${isMenuOpen ? 'times' : 'bars'} text-xl`}></i>
//               </button>
//             </div>
//           </div>
          
//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="lg:hidden bg-gray-800 pb-4">
//               <div className="flex flex-col space-y-2 px-4">
//                 <a href="/Students/Home" className="font-medium py-2 border-b border-gray-700">Home</a>
//                 <a href="/Students/About" className="font-medium py-2 border-b border-gray-700">About</a>
//                 <a href="s/Students/MenuItemPage" className="font-medium py-2 border-b border-gray-700">Items</a>
//                 <a href="menu.html" className="font-medium py-2 border-b border-gray-700">Menu</a>
//                 <div className="py-2 border-b border-gray-700">
//                   <button className="font-medium flex items-center justify-between w-full">
//                     Pages <i className="fa fa-chevron-down text-xs"></i>
//                   </button>
//                   <div className="pl-4 mt-2 space-y-2">
//                     <a href="booking.html" className="block py-1 text-gray-300 hover:text-white">Booking</a>
//                     <a href="team.html" className="block py-1 text-gray-300 hover:text-white">Our Team</a>
//                     <a href="testimonial.html" className="block py-1 text-gray-300 hover:text-white">Testimonial</a>
//                   </div>
//                 </div>
//                 <a href="contact.html" className="font-medium py-2">Contact</a>
//                 <div className="flex space-x-2 pt-2">
//                   <a href="#" className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded flex-1 text-center">Book A Table</a>
//                   <LogoutButton className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded flex-1 text-center" />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="bg-gray-900 text-white py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-12 md:mb-0">
//               <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//                 Enjoy Our<br />Delicious Meal
//               </h1>
//               <p className="text-lg text-gray-300 mb-8 max-w-lg">
//                 Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded transition duration-300">
//                   Book A Table
//                 </a>
//                 <a href="#" className="border border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-6 rounded transition duration-300">
//                   View Menu
//                 </a>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-center">
//               <img 
//                 src="/img/hero.png" 
//                 alt="Delicious Meal" 
//                 className="rounded-lg shadow-xl max-w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Service 1 */}
//             <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
//               <div className="text-amber-500 text-4xl mb-4">
//                 <i className="fa fa-user-tie"></i>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Master Chefs</h3>
//               <p className="text-gray-600">
//                 Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
//               </p>
//             </div>

//             {/* Service 2 */}
//             <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
//               <div className="text-amber-500 text-4xl mb-4">
//                 <i className="fa fa-utensils"></i>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
//               <p className="text-gray-600">
//                 Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
//               </p>
//             </div>

//             {/* Service 3 */}
//             <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
//               <div className="text-amber-500 text-4xl mb-4">
//                 <i className="fa fa-cart-plus"></i>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Online Order</h3>
//               <p className="text-gray-600">
//                 Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
//               </p>
//             </div>

//             {/* Service 4 */}
//             <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
//               <div className="text-amber-500 text-4xl mb-4">
//                 <i className="fa fa-headset"></i>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
//               <p className="text-gray-600">
//                 Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 mb-12 lg:mb-0">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
//                   <img 
//                     src="/img/about-1.jpg" 
//                     alt="About 1" 
//                     className="absolute inset-0 w-full h-full object-cover transition duration-500 hover:scale-105"
//                   />
//                 </div>
//                 <div className="relative overflow-hidden rounded-lg shadow-lg h-64 mt-8">
//                   <img 
//                     src="/img/about-2.jpg" 
//                     alt="About 2" 
//                     className="absolute inset-0 w-full h-full object-cover transition duration-500 hover:scale-105"
//                   />
//                 </div>
//                 <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
//                   <img 
//                     src="/img/about-3.jpg" 
//                     alt="About 3" 
//                     className="absolute inset-0 w-full h-full object-cover transition duration-500 hover:scale-105"
//                   />
//                 </div>
//                 <div className="relative overflow-hidden rounded-lg shadow-lg h-64 mt-8">
//                   <img 
//                     src="/img/about-4.jpg" 
//                     alt="About 4" 
//                     className="absolute inset-0 w-full h-full object-cover transition duration-500 hover:scale-105"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="lg:w-1/2 lg:pl-12">
//               <h5 className="text-amber-500 font-medium mb-2">About Us</h5>
//               <h1 className="text-3xl font-bold mb-6">Welcome to <span className="text-amber-500">Restoran</span></h1>
//               <p className="text-gray-600 mb-4">
//                 Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
//               </p>
//               <p className="text-gray-600 mb-8">
//                 Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
//                 <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
//                   <div className="flex items-center">
//                     <span className="text-3xl font-bold text-amber-500 mr-4">15</span>
//                     <div>
//                       <p className="text-gray-500 text-sm">Years of</p>
//                       <h6 className="font-medium">Experience</h6>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500">
//                   <div className="flex items-center">
//                     <span className="text-3xl font-bold text-amber-500 mr-4">50</span>
//                     <div>
//                       <p className="text-gray-500 text-sm">Popular</p>
//                       <h6 className="font-medium">Master Chefs</h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <a href="#" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded transition duration-300">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Menu Section */}
//       {/* <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h5 className="text-amber-500 font-medium mb-2">Food Menu</h5>
//             <h1 className="text-3xl font-bold">Most Popular Items</h1>
//           </div>

//           <div className="flex justify-center mb-8">
//             <div className="inline-flex bg-gray-100 rounded-lg p-1">
//               <button 
//                 className={`flex items-center px-6 py-3 rounded-lg ${activeTab === 'tab-1' ? 'bg-white shadow-md' : ''}`}
//                 onClick={() => setActiveTab('tab-1')}
//               >
//                 <i className="fa fa-coffee text-amber-500 text-xl mr-3"></i>
//                 <div>
//                   <div className="text-xs text-gray-500">Popular</div>
//                   <div className="font-medium">Breakfast</div>
//                 </div>
//               </button>
//               <button 
//                 className={`flex items-center px-6 py-3 rounded-lg ${activeTab === 'tab-2' ? 'bg-white shadow-md' : ''}`}
//                 onClick={() => setActiveTab('tab-2')}
//               >
//                 <i className="fa fa-hamburger text-amber-500 text-xl mr-3"></i>
//                 <div>
//                   <div className="text-xs text-gray-500">Special</div>
//                   <div className="font-medium">Lunch</div>
//                 </div>
//               </button>
//               <button 
//                 className={`flex items-center px-6 py-3 rounded-lg ${activeTab === 'tab-3' ? 'bg-white shadow-md' : ''}`}
//                 onClick={() => setActiveTab('tab-3')}
//               >
//                 <i className="fa fa-utensils text-amber-500 text-xl mr-3"></i>
//                 <div>
//                   <div className="text-xs text-gray-500">Lovely</div>
//                   <div className="font-medium">Dinner</div>
//                 </div>
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {activeTab === 'tab-1' && (
//               <>
//                 {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//                   <div key={`breakfast-${item}`} className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center transition duration-300 hover:shadow-md">
//                     <img 
//                       src={`/img/menu-${item}.jpg`} 
//                       alt={`Menu item ${item}`} 
//                       className="w-20 h-20 rounded-lg object-cover mr-4"
//                     />
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
//                         <h3 className="font-medium">Chicken Burger</h3>
//                         <span className="text-amber-500 font-medium">$115</span>
//                       </div>
//                       <p className="text-sm text-gray-500 italic">Ipsum ipsum clita erat amet dolor justo diam</p>
//                     </div>
//                   </div>
//                 ))}
//               </>
//             )}
            
//             {activeTab === 'tab-2' && (
//               <>
//                 {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//                   <div key={`lunch-${item}`} className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center transition duration-300 hover:shadow-md">
//                     <img 
//                       src={`/img/menu-${item}.jpg`} 
//                       alt={`Menu item ${item}`} 
//                       className="w-20 h-20 rounded-lg object-cover mr-4"
//                     />
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
//                         <h3 className="font-medium">Special Lunch {item}</h3>
//                         <span className="text-amber-500 font-medium">${115 + item*5}</span>
//                       </div>
//                       <p className="text-sm text-gray-500 italic">Ipsum ipsum clita erat amet dolor justo diam</p>
//                     </div>
//                   </div>
//                 ))}
//               </>
//             )}
            
//             {activeTab === 'tab-3' && (
//               <>
//                 {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//                   <div key={`dinner-${item}`} className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center transition duration-300 hover:shadow-md">
//                     <img 
//                       src={`/img/menu-${item}.jpg`} 
//                       alt={`Menu item ${item}`} 
//                       className="w-20 h-20 rounded-lg object-cover mr-4"
//                     />
//                     <div className="flex-1">
//                       <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
//                         <h3 className="font-medium">Dinner Special {item}</h3>
//                         <span className="text-amber-500 font-medium">${120 + item*5}</span>
//                       </div>
//                       <p className="text-sm text-gray-500 italic">Ipsum ipsum clita erat amet dolor justo diam</p>
//                     </div>
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>
//         </div>
//       </div> */}

//       <MenuPage/>

 

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//             <div>
//               <h4 className="text-amber-500 font-medium text-lg mb-4">Company</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
//                 <li><a href="#" className="hover:text-white transition duration-300">Contact Us</a></li>
//                 <li><a href="#" className="hover:text-white transition duration-300">Reservation</a></li>
//                 <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-white transition duration-300">Terms & Condition</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-amber-500 font-medium text-lg mb-4">Contact</h4>
//               <ul className="space-y-2">
//                 <li className="flex items-start">
//                   <i className="fa fa-map-marker-alt text-amber-500 mt-1 mr-3"></i>
//                   <span>123 Street, New York, USA</span>
//                 </li>
//                 <li className="flex items-center">
//                   <i className="fa fa-phone-alt text-amber-500 mr-3"></i>
//                   <span>+012 345 67890</span>
//                 </li>
//                 <li className="flex items-center">
//                   <i className="fa fa-envelope text-amber-500 mr-3"></i>
//                   <span>info@example.com</span>
//                 </li>
//               </ul>
//               <div className="flex space-x-3 mt-4">
//                 <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition duration-300">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition duration-300">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition duration-300">
//                   <i className="fab fa-youtube"></i>
//                 </a>
//                 <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition duration-300">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h4 className="text-amber-500 font-medium text-lg mb-4">Opening</h4>
//               <div className="space-y-2">
//                 <div>
//                   <h5 className="font-medium">Monday - Saturday</h5>
//                   <p>09AM - 09PM</p>
//                 </div>
//                 <div>
//                   <h5 className="font-medium">Sunday</h5>
//                   <p>10AM - 08PM</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h4 className="text-amber-500 font-medium text-lg mb-4">Newsletter</h4>
//               <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
//               <div className="relative">
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 pr-20 focus:outline-none focus:ring-2 focus:ring-amber-500"
//                 />
//                 <button 
//                   type="button" 
//                   className="absolute right-1 top-1 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition duration-300"
//                 >
//                   SignUp
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="mb-4 md:mb-0">
//                 © <a href="#" className="text-amber-500 hover:underline">Restoran</a>, All Right Reserved.
//               </div>
//               <div className="flex space-x-4">
//                 <a href="#" className="hover:text-white transition duration-300">Home</a>
//                 <a href="#" className="hover:text-white transition duration-300">Cookies</a>
//                 <a href="#" className="hover:text-white transition duration-300">Help</a>
//                 <a href="#" className="hover:text-white transition duration-300">FQAs</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Back to Top */}
//       {/* <a 
//         href="#" 
//         className="fixed bottom-6 right-6 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-amber-600 transition duration-300"
//       >
//         <i className="fa fa-arrow-up"></i>
//       </a> */}
//     </div>
//   );
// };

// export default Home;







import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../../Components/LogoutButton';
import MenuPage from './MenuPage';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tab-1');
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    
    // Set up an event listener for storage changes
    const handleStorageChange = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const goToCheckout = () => {
    navigate('/Students/CheckoutPage');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
        {/* Navigation content - unchanged */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <i className="fa fa-utensils text-2xl text-amber-500 mr-2"></i>
              <h1 className="text-2xl font-bold"  style={{color:'white'}}>Restoran</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/Students/Home" className="font-medium hover:text-amber-400 border-b-2 border-amber-500">Home</a>
              <a href="/Students/About" className="font-medium hover:text-amber-400">About</a>
              <a href="/Students/MenuItemPage" className="font-medium hover:text-amber-400">Items</a>
              <a href="/Students/CheckoutPage" className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded">Check Out</a>
              <LogoutButton className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded" />
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <i className={`fa fa-${isMenuOpen ? 'times' : 'bars'} text-xl`}></i>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-gray-800 pb-4">
              <div className="flex flex-col space-y-2 px-4">
                <a href="/Students/Home" className="font-medium py-2 border-b border-gray-700">Home</a>
                <a href="/Students/About" className="font-medium py-2 border-b border-gray-700">About</a>
                <a href="/Students/MenuItemPage" className="font-medium py-2 border-b border-gray-700">Items</a>
                <a href="menu.html" className="font-medium py-2 border-b border-gray-700">Menu</a>
                <div className="py-2 border-b border-gray-700">
                  <button className="font-medium flex items-center justify-between w-full">
                    Pages <i className="fa fa-chevron-down text-xs"></i>
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="booking.html" className="block py-1 text-gray-300 hover:text-white">Booking</a>
                    <a href="team.html" className="block py-1 text-gray-300 hover:text-white">Our Team</a>
                    <a href="testimonial.html" className="block py-1 text-gray-300 hover:text-white">Testimonial</a>
                  </div>
                </div>
                <a href="contact.html" className="font-medium py-2">Contact</a>
                <div className="flex space-x-2 pt-2">
                  <a href="#" className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded flex-1 text-center">Book A Table</a>
                  <LogoutButton className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded flex-1 text-center" />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - unchanged */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Enjoy Our<br />Delicious Meal
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Discover the taste of authentic cuisine. Indulge in our carefully crafted menu, featuring a variety of dishes made with the freshest ingredients.              </p>
              <div className="flex space-x-4">
                <a href="/Students/MenuItemPage" className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded transition duration-300">
                  View All Items
                </a>
                
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/img/hero.png" 
                alt="Delicious Meal" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - unchanged */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="text-amber-500 text-4xl mb-4">
                <i className="fa fa-user-tie"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Master Chefs</h3>
              <p className="text-gray-600">
                Expert chefs crafting every dish with passion and precision.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="text-amber-500 text-4xl mb-4">
                <i className="fa fa-utensils"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
              <p className="text-gray-600">
                Fresh ingredients and authentic flavors in every bite.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="text-amber-500 text-4xl mb-4">
                <i className="fa fa-cart-plus"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Online Order</h3>
              <p className="text-gray-600">
                Order easily online and enjoy quick, hassle-free service.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="text-amber-500 text-4xl mb-4">
                <i className="fa fa-headset"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">
                We're available anytime to serve your cravings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - unchanged */}
      <div className="py-16 bg-gray-50">
        {/* About content - removed for brevity */}
      </div>

      {/* Menu Section */}
      <MenuPage />

      {/* Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={goToCheckout}
            className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center"
          >
            <i className="fa fa-shopping-cart mr-2"></i>
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
        </div>
      )}

<div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
              <a className="btn btn-link" href="/Students/Home">Home</a>
              <a className="btn btn-link" href="/Students/About">About</a>
              <a className="btn btn-link" href="/Students/MenuItemPage">Items</a>
              <a className="btn btn-link" href="/Students/CheckoutPage">Checkout</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Kankanady, Mangalore</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" />+91 97 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3" />info@cafe.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube" /></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>
              <p>10AM - 06PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p>Holiday</p>
            </div>
         
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a className="border-bottom" href="#">Restoran-Cafe</a>, All Right Reserved. 
                {/*/*** This template is free as long as you keep the footer author's credit link/attribution link/backlink. If you'd like to use the template without the footer author's credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By <a className="border-bottom" href="">Team VGI</a><br /><br />
              
              </div>
              <div className="col-md-6 text-center text-md-end">
               
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Home;