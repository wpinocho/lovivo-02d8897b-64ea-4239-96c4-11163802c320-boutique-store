import { Button } from '@/components/ui/button'
import heroImage from '@/assets/hero-boutique.jpg'

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            La Maison
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
            Elegancia atemporal para la mujer moderna. Descubre nuestra colección de piezas únicas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              onClick={scrollToProducts}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base"
            >
              Explorar Colección
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToProducts}
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground font-medium px-8 py-6 text-base"
            >
              Nueva Temporada
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}