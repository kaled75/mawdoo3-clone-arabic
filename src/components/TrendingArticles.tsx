import { Clock, Eye, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trendingArticles = [
  {
    id: 1,
    title: "أسرار النجاح في ريادة الأعمال",
    excerpt: "تعرف على أهم الاستراتيجيات والنصائح التي يتبعها رواد الأعمال الناجحون حول العالم لبناء مشاريع مربحة ومستدامة.",
    category: "الأعمال",
    author: "أحمد محمد",
    readTime: "5 دقائق",
    views: "12.5k",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    title: "فوائد الذكاء الاصطناعي في الطب",
    excerpt: "كيف يساهم الذكاء الاصطناعي في تطوير العلاجات وتشخيص الأمراض بدقة أكبر.",
    category: "التكنولوجيا",
    author: "د. فاطمة الزهراء",
    readTime: "8 دقائق",
    views: "8.3k",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "أفضل تقنيات التأمل والاسترخاء",
    excerpt: "طرق علمية مثبتة لتحسين الصحة النفسية والجسدية من خلال ممارسة التأمل.",
    category: "الصحة",
    author: "سارة أحمد",
    readTime: "6 دقائق",
    views: "15.2k",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "تاريخ الحضارة الإسلامية",
    excerpt: "رحلة عبر التاريخ لاستكشاف إنجازات الحضارة الإسلامية في العلوم والفنون.",
    category: "التاريخ",
    author: "محمد الأندلسي",
    readTime: "12 دقيقة",
    views: "6.7k",
    image: "/api/placeholder/400/250"
  }
];

const TrendingArticles = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              المقالات الرائجة
            </h2>
            <p className="text-muted-foreground text-lg">
              أكثر المقالات قراءة ومشاركة هذا الأسبوع
            </p>
          </div>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            جديد
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* المقال المميز */}
          <div className="lg:col-span-8">
            <Card className="card-hover group overflow-hidden bg-gradient-subtle border-border/50">
              <div className="relative h-80 bg-primary/5">
                <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    {trendingArticles[0].category}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary-light transition-colors">
                      {trendingArticles[0].title}
                    </h3>
                    <p className="text-white/90 text-lg mb-4 line-clamp-2">
                      {trendingArticles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {trendingArticles[0].author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {trendingArticles[0].readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {trendingArticles[0].views}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* المقالات الأخرى */}
          <div className="lg:col-span-4 space-y-6">
            {trendingArticles.slice(1).map((article, index) => (
              <Card key={article.id} className="card-hover group bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <div className="text-2xl font-bold text-primary">
                        {index + 2}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {article.category}
                      </Badge>
                      <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingArticles;