import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Heart, Share2, Bookmark, Eye, Home } from 'lucide-react';

const PetBlogPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(128);
  const [isLiked, setIsLiked] = useState(false);

  const popularBlogs = [
    {
      id: 1,
      title: "10 Essential Tips for New Puppy Owners",
      excerpt: "Everything you need to know about bringing your new furry friend home safely...",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=250&fit=crop",
      readTime: "7 min read",
      category: "Dog Care",
      author: "Dr. Sarah Wilson"
    },
    {
      id: 2,
      title: "Understanding Cat Behavior: A Complete Guide",
      excerpt: "Decode your feline friend's mysterious behaviors and strengthen your bond...",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=250&fit=crop",
      readTime: "9 min read",
      category: "Cat Care",
      author: "Emma Thompson"
    },
    {
      id: 3,
      title: "Healthy Diet Plans for Senior Dogs",
      excerpt: "Keep your aging companion healthy with proper nutrition and dietary tips...",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop",
      readTime: "6 min read",
      category: "Nutrition",
      author: "Dr. Mike Roberts"
    },
    {
      id: 4,
      title: "Creating a Pet-Friendly Home Environment",
      excerpt: "Transform your living space into a safe haven for your beloved pets...",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop",
      readTime: "5 min read",
      category: "Home Tips",
      author: "Lisa Chen"
    }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleShare = () => {
    navigator.share?.({
      title: "Best Pet Care Tips You Need to Know",
      url: window.location.href
    }).catch(() => {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
  
      {/* Main Content */ }
      <main className="w-11/12 mx-auto px-4 py-8">

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop" 
              alt="Pet care tips" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Pet Care Tips
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Best Pet Care Tips You Need to Know
              </h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-slate-200">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" 
                    alt="Author" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-800">Dr. Jennifer Adams</p>
                    <p className="text-sm text-slate-500">Veterinarian & Pet Expert</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">March 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">8 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">2.4k views</span>
                  </div>
                </div>
              </div>
              
              {/* Social Actions */}
              <div className="flex items-center space-x-3">
                <button 
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isLiked ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600 hover:bg-red-100 hover:text-red-600'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span className="font-medium">{likes}</span>
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                >
                  <Share2 className="w-5 h-5" />
                  <span className="font-medium">Share</span>
                </button>
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isBookmarked ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="text-slate-700 leading-relaxed">
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Taking care of your beloved pets requires dedication, knowledge, and lots of love. Whether you're a first-time pet owner or looking to improve your pet care routine, these essential tips will help you provide the best possible care for your furry companions.
              </p>

              {/* Section 1 - Text Left, Image Right */}
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">🐕 Understanding Your Pet's Basic Needs</h2>
                  <p className="mb-4 text-lg">
                    Every pet has fundamental needs that must be met for them to live healthy, happy lives. These include proper nutrition, regular exercise, mental stimulation, and plenty of affection.
                  </p>
                  <p className="text-slate-600">
                    Understanding these basic requirements is the foundation of excellent pet care. When you meet your pet's fundamental needs, you create a strong foundation for their overall wellbeing and happiness.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop" 
                    alt="Happy pets playing" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Section 2 - Image Left, Text Right */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">🥘 Nutrition and Feeding Guidelines</h2>
                  <p className="mb-4 text-lg">
                    Proper nutrition is crucial for your pet's health and longevity. The right diet can prevent many health issues and ensure your pet lives a long, vibrant life.
                  </p>
                  <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                    <ul className="space-y-2 text-slate-700">
                      <li>• Choose high-quality pet food appropriate for your pet's age, size, and activity level</li>
                      <li>• Maintain consistent feeding schedules</li>
                      <li>• Always provide fresh, clean water</li>
                      <li>• Avoid feeding human food that can be toxic to pets</li>
                      <li>• Monitor your pet's weight and adjust portions accordingly</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop" 
                    alt="Pet eating healthy food" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Section 3 - Text Left, Image Right */}
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">🏃‍♂️ Exercise and Mental Stimulation</h2>
                  <p className="mb-4 text-lg">
                    Regular exercise is essential for maintaining your pet's physical and mental health. Different pets have varying exercise needs, so it's important to research what's appropriate for your specific companion.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Interactive toys, puzzle feeders, and training sessions can provide mental stimulation. A well-exercised pet is generally happier, healthier, and better behaved.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="font-bold text-slate-800 mb-2">💡 Exercise Tips:</h3>
                    <p className="text-slate-700 text-sm">
                      Start slowly and gradually increase activity levels. Always consider your pet's age, breed, and health condition.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop" 
                    alt="Dog playing and exercising" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Section 4 - Image Left, Text Right */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">🏥 Regular Health Check-ups</h2>
                  <p className="mb-4 text-lg">
                    Prevention is always better than cure. Regular veterinary check-ups can help catch potential health issues early, saving you money and your pet from unnecessary suffering.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Keep up with vaccinations, dental care, and parasite prevention. Learn to recognize signs of illness in your pet so you can seek prompt medical attention when needed.
                  </p>
                  <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-400">
                    <p className="text-red-700 text-sm font-medium">
                      ⚠️ Warning Signs: Loss of appetite, lethargy, unusual behavior, or changes in bathroom habits should be addressed immediately.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop" 
                    alt="Veterinarian examining pet" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Section 5 - Text Left, Image Right */}
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">🏠 Creating a Safe Environment</h2>
                  <p className="mb-4 text-lg">
                    Pet-proofing your home is essential for your companion's safety. A safe environment allows your pet to explore and play without the risk of injury or accident.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Remove or secure potentially dangerous items, ensure your pet has a comfortable space to rest, and provide appropriate toys and enrichment activities. Consider your pet's specific needs when setting up their living environment.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop" 
                    alt="Safe pet home environment" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Final Section - Center Image */}
              <div className="text-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=400&fit=crop" 
                  alt="Happy pet family" 
                  className="rounded-2xl shadow-xl mx-auto w-full max-w-2xl h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">🎯 Key Takeaway</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Remember, every pet is unique, and what works for one may not work for another. Pay attention to your pet's individual needs, preferences, and behaviors. With patience, love, and proper care, you'll build a strong bond with your furry friend that will last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-12">
          <button className="flex items-center space-x-3 px-6 py-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <ArrowLeft className="w-5 h-5 text-orange-500 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <p className="text-sm text-slate-500">Previous Post</p>
              
            </div>
          </button>
          
          <button className="flex items-center space-x-3 px-6 py-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="text-right">
              <p className="text-sm text-slate-500">Next Post</p>
           
            </div>
            <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Popular Blog Posts */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            🌟 Popular Pet Care Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularBlogs.map((blog) => (
              <div key={blog.id} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{blog.author}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

  
    </div>
  );
};

export default PetBlogPage;