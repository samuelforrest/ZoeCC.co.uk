import { SpeechBubble } from '@/components/SpeechBubble';
import { WhatsAppButton, WhatsAppLink } from '@/components/WhatsAppButton';
import { Heart, Camera, Coffee, Droplets, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight animate-fade-in">
                Gentle, Loving Cat Care with{' '}
                <span className="text-primary">Zoe Forrest</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                £8/hr, tailored care for every cat personality, while you're on holiday.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                src="/lovable-uploads/c6e5a1ec-dca4-4339-9c9c-d031ad30bb1f.png" 
                alt="Zoe holding a beautiful fluffy cat" 
                className="w-full h-auto object-cover"
              />
              <SpeechBubble className="absolute top-4 left-4 animate-fade-in">
                I love Zoe! 💕
              </SpeechBubble>
            </div>
          </div>
        </div>
      </section>

      {/* About Zoe Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">About Zoe</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            With years of experience caring for cats of all personalities, I understand that every feline friend has unique needs. 
            Whether your cat is shy and needs gentle patience, or playful and requires active engagement, I provide personalized care 
            that keeps them comfortable and happy while you're away. My approach is always gentle, loving, and attentive to your cat's 
            individual routine and preferences.
          </p>
        </div>
      </section>

      {/* Services Section */}
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
                  <p className="text-muted-foreground">Following your cat's exact routine and dietary preferences</p>
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
                  <h3 className="font-medium text-foreground mb-2">Play & Comfort Time</h3>
                  <p className="text-muted-foreground">Engaging activities and gentle companionship tailored to your cat's personality</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Photo Updates for Owners</h3>
                  <p className="text-muted-foreground">Regular photos and updates so you can see how your cat is doing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">Cats I've Cared For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group">
              <div className="relative rounded-xl overflow-hidden shadow-soft group-hover:shadow-elegant transition-all duration-300">
                <img 
                  src="/lovable-uploads/dab14485-a105-497c-8940-182a91328cad.png" 
                  alt="Adorable tabby cat" 
                  className="w-full h-80 object-cover"
                />
                <SpeechBubble className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  I love Zoe! 😸
                </SpeechBubble>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative rounded-xl overflow-hidden shadow-soft group-hover:shadow-elegant transition-all duration-300">
                <img 
                  src="/lovable-uploads/7a26a9b7-fe7e-4e44-a46a-bc83485f252c.png" 
                  alt="Sleepy content cat" 
                  className="w-full h-80 object-cover"
                />
                <SpeechBubble className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  I love Zoe! 😴
                </SpeechBubble>
              </div>
            </div>
            
            <div className="relative group md:col-span-2 lg:col-span-1">
              <div className="relative rounded-xl overflow-hidden shadow-soft group-hover:shadow-elegant transition-all duration-300">
                <img 
                  src="/lovable-uploads/6c93bd9a-042e-4e97-9557-a30d39ddf79b.png" 
                  alt="Black cat with food bowls" 
                  className="w-full h-80 object-cover"
                />
                <SpeechBubble className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  I love Zoe! 🖤
                </SpeechBubble>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">What Cat Parents Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                "Zoe was absolutely wonderful with our shy rescue cat Luna. She was so patient and gentle, 
                and Luna actually came out of hiding by day two! The photo updates were a lifesaver."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">S</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Sarah M.</p>
                  <p className="text-sm text-muted-foreground">Weybridge</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                "Our two cats have completely different personalities, but Zoe understood them both perfectly. 
                She gave our energetic tabby plenty of playtime and our older cat the gentle attention he needed."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">J</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">James T.</p>
                  <p className="text-sm text-muted-foreground">Greater London</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <p className="text-muted-foreground italic leading-relaxed mb-6">
                "We came home to a very happy and relaxed cat. Zoe clearly has a special way with animals. 
                The house was spotless and our cat was purring the moment we walked in!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-medium">M</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Maria K.</p>
                  <p className="text-sm text-muted-foreground">Greater London</p>
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
              <span className="font-serif text-4xl text-primary">£8</span>
              <span className="text-xl text-muted-foreground">per hour</span>
            </div>
            <p className="text-lg text-muted-foreground">
              No hidden fees. Local only (Greater London, Weybridge).
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-serif text-2xl text-primary">ZoeCC</span>
          </div>
          <p className="text-muted-foreground">
            Gentle, loving cat care in Greater London & Weybridge
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;