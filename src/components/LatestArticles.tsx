import { Clock, Eye, User, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const latestArticles = [
  {
    id: 1,
    title: "مستقبل الطاقة المتجددة في الوطن العربي",
    excerpt: "نظرة شاملة على التطورات الحديثة في مجال الطاقة المتجددة والاستثمارات الجديدة في المنطقة العربية.",
    category: "البيئة",
    author: "د. خالد العمري",
    readTime: "7 دقائق",
    views: "3.2k",
    publishedAt: "منذ ساعتين",
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    title: "تطوير المهارات الشخصية في العصر الرقمي",
    excerpt: "كيفية تطوير المهارات الأساسية المطلوبة للنجاح في سوق العمل الحديث والتكيف مع التغييرات التكنولوجية.",
    category: "التطوير",
    author: "أمل حسن",
    readTime: "9 دقائق",
    views: "5.8k",
    publishedAt: "منذ 4 ساعات",
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    title: "فن الطبخ العربي الأصيل",
    excerpt: "وصفات تراثية أصيلة من المطبخ العربي مع نصائح وأسرار الطهي التقليدي.",
    category: "الطبخ",
    author: "شيف مريم",
    readTime: "5 دقائق",
    views: "7.1k",
    publishedAt: "منذ 6 ساعات",
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    title: "أهمية الرياضة للصحة النفسية",
    excerpt: "الفوائد العلمية المثبتة لممارسة الرياضة على الصحة النفسية والعقلية.",
    category: "الصحة",
    author: "د. أحمد سالم",
    readTime: "6 دقائق",
    views: "4.5k",
    publishedAt: "منذ 8 ساعات",
    image: "/api/placeholder/300/200"
  },
  {
    id: 5,
    title: "تقنيات الذكاء الاصطناعي في التعليم",
    excerpt: "كيف تساهم تقنيات الذكاء الاصطناعي في تحسين جودة التعليم وتخصيص التجربة التعليمية.",
    category: "التكنولوجيا",
    author: "د. سالم الرشيد",
    readTime: "10 دقائق",
    views: "6.3k",
    publishedAt: "منذ 12 ساعة",
    image: "/api/placeholder/300/200"
  },
  {
    id: 6,
    title: "السياحة البيئية في الشرق الأوسط",
    excerpt: "اكتشاف المناطق الطبيعية الخلابة في الشرق الأوسط وأهمية الحفاظ على البيئة.",
    category: "السياحة",
    author: "نور الدين",
    readTime: "8 دقائق",
    views: "2.9k",
    publishedAt: "منذ يوم",
    image: "/api/placeholder/300/200"
  }
];

const LatestArticles = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              أحدث المقالات
            </h2>
            <p className="text-muted-foreground text-lg">
              آخر المقالات المنشورة على الموقع
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            عرض الكل
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className="card-hover group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-primary/5">
                <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary/90 text-primary-foreground text-xs">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border/30">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {article.views}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {article.publishedAt}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;