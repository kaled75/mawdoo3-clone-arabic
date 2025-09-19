import { BookOpen, Beaker, Globe, Heart, Briefcase, Palette, Calculator, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "العلوم", icon: Beaker, count: "1,234", color: "text-blue-600" },
  { name: "التكنولوجيا", icon: Globe, count: "987", color: "text-green-600" },
  { name: "الصحة", icon: Heart, count: "756", color: "text-red-600" },
  { name: "الأعمال", icon: Briefcase, count: "543", color: "text-purple-600" },
  { name: "الفنون", icon: Palette, count: "432", color: "text-pink-600" },
  { name: "التعليم", icon: BookOpen, count: "678", color: "text-indigo-600" },
  { name: "الرياضيات", icon: Calculator, count: "321", color: "text-orange-600" },
  { name: "الرياضة", icon: Trophy, count: "456", color: "text-yellow-600" },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            استكشف التصنيفات
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            تصفح آلاف المقالات المنظمة في تصنيفات متنوعة لتجد ما تبحث عنه بسهولة
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name} 
                className="card-hover cursor-pointer group bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.count} مقال
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;