import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Save, Eye, X, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  "تطوير الويب",
  "تكنولوجيا",
  "تطوير التطبيقات",
  "أمن المعلومات",
  "الذكاء الاصطناعي",
  "علوم الحاسوب",
  "ريادة الأعمال",
  "التسويق الرقمي"
];

export default function NewArticlePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [status, setStatus] = useState("مسودة");

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSave = () => {
    // هنا يمكن إضافة منطق حفظ المقال
    console.log({ title, content, summary, category, tags, status });
    navigate("/admin/articles");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">إضافة مقال جديد</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate("/admin/articles")}>
            إلغاء
          </Button>
          <Button variant="outline">
            <Eye className="ml-2 h-4 w-4" />
            معاينة
          </Button>
          <Button onClick={handleSave}>
            <Save className="ml-2 h-4 w-4" />
            حفظ
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* محتوى المقال */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>محتوى المقال</CardTitle>
              <CardDescription>أدخل تفاصيل المقال الجديد</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">عنوان المقال</Label>
                <Input
                  id="title"
                  placeholder="أدخل عنوان المقال..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="summary">ملخص المقال</Label>
                <Textarea
                  id="summary"
                  placeholder="ملخص مختصر عن المقال..."
                  rows={3}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="content">محتوى المقال</Label>
                <Textarea
                  id="content"
                  placeholder="اكتب محتوى المقال هنا..."
                  rows={15}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* إعدادات المقال */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>إعدادات النشر</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>حالة المقال</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="مسودة">مسودة</SelectItem>
                    <SelectItem value="مراجعة">تحت المراجعة</SelectItem>
                    <SelectItem value="منشور">منشور</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>التصنيف</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر التصنيف" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>الكلمات المفتاحية</CardTitle>
              <CardDescription>أضف كلمات مفتاحية لتحسين البحث</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="أضف كلمة مفتاحية..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                />
                <Button variant="outline" size="icon" onClick={addTag}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X 
                      className="h-3 w-3 cursor-pointer" 
                      onClick={() => removeTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>صورة المقال</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <p className="text-gray-500">اسحب الصورة هنا أو اضغط للتحميل</p>
                <Button variant="outline" className="mt-2">
                  اختيار صورة
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}