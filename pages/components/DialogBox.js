import * as React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function DialogBox() {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button 
        className="modern-btn-primary"
        onClick={handleClickOpen}
      >
        Learn More
      </button>
      
      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 transition-opacity"
              onClick={handleClose}
            ></div>
            
            {/* Dialog */}
            <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-screen overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">
                  About Us
                </h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Cetal Deve Solutions is a consulting firm committed to provide experienced, excellent and highly skilled 
                  professionals to help with client business requirements. We have an excellent record of client satisfaction as we firmly believe in providing quality over quantity.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We understand finding the right candidate for the business is quite challenging and time consuming.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With our dedicated pool of resources we help you to choose the right candidate that range from long term to short term without having to comprise with business requirements. 
                  We listen, understand and deliver the right professionals to your business requirements.
                </p>
              </div>
              
              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={handleClose}
                  className="modern-btn-secondary w-full sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}