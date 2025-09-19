import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, MessageSquare, Eye, TrendingUp, Calendar } from "lucide-react";

const stats = [
  {
    title: "إجمالي المقالات",
    value: "1,234",
    description: "+12% من الشهر الماضي",
    icon: FileText,
    color: "text-blue-600"
  },
  {
    title: "المشاهدات اليوم",
    value: "45,678",
    description: "+5% من أمس",
    icon: Eye,
    color: "text-green-600"
  },
  {
    title: "المستخدمين النشطين",
    value: "8,432",
    description: "+8% من الأسبوع الماضي",
    icon: Users,
    color: "text-orange-600"
  },
  {
    title: "التعليقات الجديدة",
    value: "156",
    description: "+23% من أمس",
    icon: MessageSquare,
    color: "text-purple-600"
  }
];

const recentArticles = [
  { title: "كيفية تطوير المواقع الإلكترونية", views: "1,234", status: "منشور" },
  { title: "أساسيات الذكاء الاصطناعي", views: "987", status: "مسودة" },
  { title: "تطوير التطبيقات المحمولة", views: "2,156", status: "منشور" },
  { title: "أمن المعلومات والحماية", views: "654", status: "مراجعة" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">لوحة التحكم الرئيسية</h1>
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {new Date().toLocaleDateString('ar-SA')}
        </div>
      </div>

      {/* إحصائيات سريعة */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* آخر المقالات */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              آخر المقالات
            </CardTitle>
            <CardDescription>المقالات الأحدث في الموقع</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentArticles.map((article, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{article.title}</h4>
                    <p className="text-sm text-muted-foreground">{article.views} مشاهدة</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    article.status === 'منشور' ? 'bg-green-100 text-green-800' :
                    article.status === 'مسودة' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {article.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* إحصائيات المشاهدات */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              إحصائيات الأداء
            </CardTitle>
            <CardDescription>أداء الموقع خلال آخر 7 أيام</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>المشاهدات</span>
                <span className="font-bold text-green-600">↗ +15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>المستخدمين الجدد</span>
                <span className="font-bold text-blue-600">↗ +8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>معدل الارتداد</span>
                <span className="font-bold text-red-600">↘ -3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>وقت البقاء</span>
                <span className="font-bold text-green-600">↗ +12%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}