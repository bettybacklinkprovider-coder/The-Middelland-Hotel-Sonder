import React, { useState } from 'react';
import { Page, Room } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ReviewModal } from './components/ReviewModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const handleOpenBooking = (room?: Room) => {
    if (room) {
      setSelectedRoom(room);
    } else {
      setSelectedRoom(null);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950 flex flex-col justify-between">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home
            setCurrentPage={setCurrentPage}
            onOpenBooking={handleOpenBooking}
            onOpenReviewModal={() => setReviewModalOpen(true)}
          />
        )}
        {currentPage === 'rooms' && (
          <Rooms onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'gallery' && (
          <Gallery />
        )}
        {currentPage === 'contact' && (
          <Contact onOpenBooking={() => handleOpenBooking()} />
        )}
      </main>

      <Footer
        setCurrentPage={setCurrentPage}
        onOpenReviewModal={() => setReviewModalOpen(true)}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedRoom={selectedRoom}
      />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
      />

      <WhatsAppButton />
    </div>
  );
}
