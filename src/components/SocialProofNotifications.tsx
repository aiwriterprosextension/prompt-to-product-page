
import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface Buyer {
  name: string;
  location: string;
}

interface Notification {
  id: number;
  buyer: Buyer;
  timestamp: number;
}

const buyerData: Buyer[] = [
  { "name": "Sarah", "location": "Texas" },
  { "name": "Liam", "location": "California" },
  { "name": "Priya", "location": "Ontario, Canada" },
  { "name": "Carlos", "location": "Florida" },
  { "name": "Emily", "location": "New York" },
  { "name": "Jin", "location": "Seoul, South Korea" },
  { "name": "Ahmed", "location": "Dubai, UAE" },
  { "name": "Maya", "location": "London, UK" },
  { "name": "Tom", "location": "Illinois" },
  { "name": "Ravi", "location": "Mumbai, India" },
  { "name": "Hiroshi", "location": "Tokyo, Japan" },
  { "name": "Olivia", "location": "Sydney, Australia" },
  { "name": "Noah", "location": "Washington, USA" },
  { "name": "Fatima", "location": "Cairo, Egypt" },
  { "name": "Daniel", "location": "Toronto, Canada" },
  { "name": "Sophia", "location": "Boston, USA" },
  { "name": "Diego", "location": "Mexico City, Mexico" },
  { "name": "Aisha", "location": "Nairobi, Kenya" },
  { "name": "Lucas", "location": "Berlin, Germany" },
  { "name": "Hannah", "location": "Denver, USA" },
  { "name": "Zara", "location": "Karachi, Pakistan" },
  { "name": "Ethan", "location": "Seattle, USA" },
  { "name": "Isabella", "location": "Rome, Italy" },
  { "name": "Mateo", "location": "Buenos Aires, Argentina" },
  { "name": "Amira", "location": "Doha, Qatar" },
  { "name": "William", "location": "Houston, USA" },
  { "name": "Sofia", "location": "Madrid, Spain" },
  { "name": "Arjun", "location": "Bangalore, India" },
  { "name": "Nora", "location": "Dublin, Ireland" },
  { "name": "Leo", "location": "Auckland, New Zealand" },
  { "name": "Victoria", "location": "Los Angeles, USA" },
  { "name": "Mohammed", "location": "Riyadh, Saudi Arabia" },
  { "name": "Emma", "location": "Chicago, USA" },
  { "name": "Benjamin", "location": "Philadelphia, USA" },
  { "name": "Chloe", "location": "Vancouver, Canada" },
  { "name": "Omar", "location": "Amman, Jordan" },
  { "name": "Santiago", "location": "Lima, Peru" },
  { "name": "Mila", "location": "Oslo, Norway" },
  { "name": "David", "location": "Tel Aviv, Israel" },
  { "name": "Leila", "location": "Casablanca, Morocco" },
  { "name": "Jacob", "location": "Atlanta, USA" },
  { "name": "Yuki", "location": "Kyoto, Japan" },
  { "name": "Camila", "location": "São Paulo, Brazil" },
  { "name": "Owen", "location": "Minneapolis, USA" },
  { "name": "Eva", "location": "Prague, Czech Republic" },
  { "name": "Nikolai", "location": "Moscow, Russia" },
  { "name": "Chandra", "location": "Kathmandu, Nepal" },
  { "name": "Julia", "location": "Warsaw, Poland" },
  { "name": "Henry", "location": "Portland, USA" },
  { "name": "Elena", "location": "Athens, Greece" },
  { "name": "Samuel", "location": "Johannesburg, South Africa" },
  { "name": "Freya", "location": "Stockholm, Sweden" },
  { "name": "Andres", "location": "Bogotá, Colombia" },
  { "name": "Clara", "location": "Zurich, Switzerland" },
  { "name": "Jayden", "location": "Dallas, USA" },
  { "name": "Amina", "location": "Kuala Lumpur, Malaysia" },
  { "name": "George", "location": "Manchester, UK" },
  { "name": "Natalie", "location": "Edinburgh, Scotland" },
  { "name": "Ibrahim", "location": "Istanbul, Turkey" },
  { "name": "Alice", "location": "Paris, France" },
  { "name": "Dylan", "location": "Phoenix, USA" },
  { "name": "Harper", "location": "San Diego, USA" },
  { "name": "Mikhail", "location": "St. Petersburg, Russia" },
  { "name": "Anika", "location": "Chennai, India" },
  { "name": "Jonas", "location": "Copenhagen, Denmark" },
  { "name": "Laila", "location": "Beirut, Lebanon" },
  { "name": "Thiago", "location": "Rio de Janeiro, Brazil" },
  { "name": "Sienna", "location": "Melbourne, Australia" },
  { "name": "Victor", "location": "Lisbon, Portugal" },
  { "name": "Amelie", "location": "Brussels, Belgium" },
  { "name": "Hassan", "location": "Kuwait City, Kuwait" },
  { "name": "Marta", "location": "Barcelona, Spain" },
  { "name": "Felix", "location": "Hamburg, Germany" },
  { "name": "Aya", "location": "Hanoi, Vietnam" },
  { "name": "Tariq", "location": "Khartoum, Sudan" },
  { "name": "Gabriel", "location": "Santiago, Chile" },
  { "name": "Lina", "location": "Tallinn, Estonia" },
  { "name": "Marcus", "location": "Detroit, USA" },
  { "name": "Isla", "location": "Glasgow, Scotland" },
  { "name": "Hugo", "location": "Brisbane, Australia" },
  { "name": "Kiran", "location": "Hyderabad, India" },
  { "name": "Ava", "location": "San Francisco, USA" },
  { "name": "Mateusz", "location": "Krakow, Poland" },
  { "name": "Leonie", "location": "Vienna, Austria" },
  { "name": "Olivier", "location": "Montreal, Canada" },
  { "name": "Fatou", "location": "Dakar, Senegal" },
  { "name": "Andrei", "location": "Bucharest, Romania" },
  { "name": "Sasha", "location": "Belgrade, Serbia" },
  { "name": "Nadia", "location": "Tunis, Tunisia" },
  { "name": "Peter", "location": "Prague, Czech Republic" },
  { "name": "Mei", "location": "Shanghai, China" },
  { "name": "Adrian", "location": "Vienna, Austria" },
  { "name": "Helena", "location": "Ljubljana, Slovenia" },
  { "name": "Carter", "location": "Miami, USA" },
  { "name": "Daria", "location": "Riga, Latvia" },
  { "name": "Khalid", "location": "Muscat, Oman" },
  { "name": "Laura", "location": "Helsinki, Finland" },
  { "name": "Oskar", "location": "Warsaw, Poland" },
  { "name": "Grace", "location": "Boston, USA" },
  { "name": "Malik", "location": "Lagos, Nigeria" }
];

const SocialProofNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const getRandomBuyer = (): Buyer => {
    const randomIndex = Math.floor(Math.random() * buyerData.length);
    return buyerData[randomIndex];
  };

  const addNotification = () => {
    const newNotification: Notification = {
      id: Date.now(),
      buyer: getRandomBuyer(),
      timestamp: Date.now(),
    };

    setNotifications((prev) => [...prev, newNotification]);

    // Auto-remove notification after 4 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
    }, 4000);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  useEffect(() => {
    // Show first notification after 3 seconds
    const firstTimeout = setTimeout(addNotification, 3000);

    // Set up recurring notifications every 15-30 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 15000 + 15000; // 15-30 seconds
      setTimeout(addNotification, randomDelay);
    }, 30000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-2 max-w-xs sm:max-w-sm">
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 animate-fade-in flex items-start gap-3"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              <span className="font-semibold">{notification.buyer.name}</span> from{' '}
              <span className="text-gray-600 dark:text-gray-400">{notification.buyer.location}</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              just purchased AMZ Extractor
            </p>
          </div>
          <button
            onClick={() => removeNotification(notification.id)}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SocialProofNotifications;
