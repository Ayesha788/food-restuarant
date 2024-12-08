export default function Footer() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
            orporate clients and leisure travelers has
been relying on Groundlink for dependab
safe, and professional chauffeured car
service in major cities across World.
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold">Opening Hours</h4>
              <p className="text-sm text-gray-400">Mon - Sat: 8:00 - 6:00</p>
              <p className="text-sm text-gray-400">Sunday: Closed</p>
            </div>
          </div>
  
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Contacts</li>
            </ul>
          </div>
  
          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help?</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>
  
          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
            <ul className="space-y-4">
              <li>
                <div>
                  <p className="text-sm text-gray-400">20 Feb, 2022</p>
                  <p className="text-sm font-medium">Keep Your Business</p>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }