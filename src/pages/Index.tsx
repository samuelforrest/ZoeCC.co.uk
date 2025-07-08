import { WhatsAppButton, WhatsAppLink } from '@/components/WhatsAppButton';
import { Heart, Camera, Coffee, Droplets, Sparkles, Flower, CheckCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const Index = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight animate-fade-in">
                Gentle, Loving Cat Care with{' '}
                <span className="text-primary">Zoe</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                £9/visit, tailored care for every cat personality, while you're away or on holiday
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start bg-mut">
              <WhatsAppButton 
                phoneNumber="+44 7434 869115" 
                message="Hi Zoe! I'd like to enquire about cat care services."
                className="text-lg px-8 py-4"
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src="/photos/cat1.jpeg" 
                alt="Zoe holding a beautiful fluffy cat" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Zoe Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">About Zoe</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            With 3 years of experience caring for cats of many different personalities, I understand that every cat has unique needs. 
            Whether your cat is shy and needs gentle patience, or playful and requires active engagement, I provide personalized care 
            that keeps them comfortable.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Feeding & Fresh Water</h3>
                  <p className="text-muted-foreground">Whatever food and treats your cat normally has</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Litter Cleaning</h3>
                  <p className="text-muted-foreground">Daily maintenance to keep your cat's environment clean and comfortable</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Play Time</h3>
                  <p className="text-muted-foreground">Play time with your cat</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Photo Updates for Owners</h3>
                  <p className="text-muted-foreground">Regular photos and updates so you can see how your cat is doing, sent via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">Cats I've Cared For</h2>
          <p className="font-serif text-m md:text-m text-foreground text-center mb-12">Please swipe through</p>

          
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="relative group">
                  <div className="relative rounded-xl overflow-hidden shadow-soft group-hover:shadow-elegant transition-all duration-300">
                    <img 
                      src="/photos/cat2.jpeg" 
                      alt="Adorable tabby cat named Sweep" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-medium text-foreground">Sweep</p>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="relative group">
                  <div className="relative rounded-xl overflow-hidden shadow-soft group-hover:shadow-elegant transition-all duration-300">
                    <img 
                      src="/photos/cat3.jpeg" 
                      alt="Sleepy cat named Lily" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-medium text-foreground">Lily</p>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="relative group">
                  <div className="relative rounded-xl overflow-hidden shadow-soft group-hover:shadow-elegant transition-all duration-300">
                    <img 
                      src="/photos/cat4.jpeg" 
                      alt="Black cat named Sooty with food bowls" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-medium text-foreground">Sooty</p>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="relative group">
                  <div className="relative rounded-xl overflow-hidden shadow-soft group-hover:shadow-elegant transition-all duration-300">
                    <img 
                      src="/photos/cat5.jpeg" 
                      alt="Beautiful cat named Lily" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-medium text-foreground">Lily</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            
            <CarouselPrevious className="hidden sm:flex -left-12 bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary hover:text-primary" />
            <CarouselNext className="hidden sm:flex -right-12 bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary hover:text-primary" />
          </Carousel>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    index + 1 === current ? 'bg-primary' : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">What Cat Parents Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                "Our cat, Lily, had a fabulous holiday with Zoe! She is a cat who thrives on love and attention, so it was
                very reassuring to know that she was being pampered while we were away!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">K</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-foreground">Karen</p>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">Verified</span>
                  </div>
                  <p className="text-sm text-muted-foreground">🏡 Cat stayed at mine</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                "Testimonial TBC"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">F</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-foreground">Fiona J.</p>
                  </div>
                  <p className="text-sm text-muted-foreground">📍Teddington</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Simple, Honest Pricing</h2>
          <div className="bg-card rounded-xl p-8 shadow-soft max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="font-serif text-4xl text-primary">£9</span>
              <span className="text-xl text-muted-foreground">per visit</span>
            </div>
            <p className="text-lg text-muted-foreground">
              No hidden fees. Local only (Teddington Area).
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Check Availability</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Want to check availability? WhatsApp Zoe directly:
          </p>
          
          <div className="space-y-6">
            <div className="text-2xl font-medium text-primary">
              <WhatsAppLink phoneNumber="+44 7434 869115" />
            </div>
            
            <WhatsAppButton 
              phoneNumber="+44 7434 869115" 
              message="Hi Zoe! I'd like to check your availability for cat care services."
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/favicon-96x96.png" 
              alt="ZoeCC Logo" 
              className="h-8 w-8"
            />
            <span className="font-serif text-2xl text-primary">ZoeCC</span>
          </div>
          <p className="text-muted-foreground">
            Gentle, loving cat care in Teddington
          </p>
          <div className="text-sm text-muted-foreground/80 pt-4 border-t border-border/50">
            <p>
              © 2025 ZoeCC. Site created by{' '}
              <a 
                href="https://www.samuelforrest.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                Samuel Forrest
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;