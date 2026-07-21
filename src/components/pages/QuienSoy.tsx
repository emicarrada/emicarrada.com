import { InteractiveTerminal } from '@/components/features/terminal';
import { LoQueHagoSection } from '@/components/features/capabilities/LoQueHagoSection';
import SwipeCards from '@/components/ui/SwipeCards.tsx';
import { SWIPE_CARD_IMAGES } from '@/constants/swipeCards';

export default function QuienSoy() {
  return (
    <section id="quien-soy" className="min-h-screen bg-[#041737]">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-5xl font-null text-[#ff8200] text-center mb-8">
          Quien Soy
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          <div className="order-1 lg:order-1 -mt-6 md:-mt-10">
            <SwipeCards images={SWIPE_CARD_IMAGES} />
          </div>
          
          <div className="order-2 lg:order-2">
            <div className="bg-[#0a2550] rounded-lg p-1">
              <InteractiveTerminal />
            </div>
          </div>
        </div>
      </div>
      
      <LoQueHagoSection />
    </section>
  );
}