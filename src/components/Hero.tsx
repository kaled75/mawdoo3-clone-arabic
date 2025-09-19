import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.3
      }} />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            أهلاً بك في موضوع،
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-white/90 mb-8">
            أكبر موقع عربي بالعالم.
          </h2>
          
          {/* شريط البحث */}
          <div className="max-w-2xl mx-auto mb-8 animate-slideUp">
            <div className="relative flex items-center bg-white/95 backdrop-blur-sm rounded-xl shadow-strong overflow-hidden">
              <Input
                type="text"
                placeholder="ابحث هنا..."
                className="flex-1 border-0 bg-transparent text-lg px-6 py-4 text-right placeholder:text-muted-foreground focus-visible:ring-0"
              />
              <Button variant="search" size="lg" className="m-2 px-8">
                <Search className="h-5 w-5 ml-2" />
                بحث
              </Button>
            </div>
          </div>
          
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            اكتشف مقالات متنوعة في جميع المجالات، من العلوم والتكنولوجيا إلى الثقافة والفنون.
          </p>
        </div>
      </div>
      
      {/* عناصر زخرفية */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;