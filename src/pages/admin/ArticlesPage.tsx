import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Plus, Search, MoreHorizontal, Edit, Trash, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "كيفية تطوير المواقع الإلكترونية باستخدام React",
    category: "تطوير الويب",
    author: "أحمد محمد",
    status: "منشور",
    views: 1234,
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "أساسيات الذكاء الاصطناعي وتطبيقاته",
    category: "تكنولوجيا",
    author: "فاطمة علي",
    status: "مسودة",
    views: 0,
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "تطوير التطبيقات المحمولة باستخدام Flutter",
    category: "تطوير التطبيقات",
    author: "محمد أحمد",
    status: "منشور",
    views: 2156,
    date: "2024-01-13",
  },
  {
    id: 4,
    title: "أمن المعلومات والحماية الرقمية",
    category: "أمن المعلومات",
    author: "سارة خالد",
    status: "مراجعة",
    views: 654,
    date: "2024-01-12",
  },
];

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    const statusMap = {
      "منشور": "bg-green-100 text-green-800",
      "مسودة": "bg-yellow-100 text-yellow-800",
      "مراجعة": "bg-blue-100 text-blue-800",
    };
    return statusMap[status as keyof typeof statusMap] || "bg-gray-100 text-gray-800";
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">إدارة المقالات</h1>
        <Button asChild>
          <Link to="/admin/articles/new">
            <Plus className="ml-2 h-4 w-4" />
            إضافة مقال جديد
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>جميع المقالات</CardTitle>
          <CardDescription>إدارة ومراجعة جميع مقالات الموقع</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="البحث في المقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>العنوان</TableHead>
                <TableHead>التصنيف</TableHead>
                <TableHead>الكاتب</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>المشاهدات</TableHead>
                <TableHead>التاريخ</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.category}</TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(article.status)}>
                      {article.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{article.views.toLocaleString()}</TableCell>
                  <TableCell>{new Date(article.date).toLocaleDateString('ar-SA')}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="ml-2 h-4 w-4" />
                          عرض
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="ml-2 h-4 w-4" />
                          تعديل
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="ml-2 h-4 w-4" />
                          حذف
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}