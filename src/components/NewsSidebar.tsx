import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewsSidebar() {
  const news = [
    {
      id: 1,
      title: "New Leadership Program Launch",
      category: "Academic",
      date: "Feb 20, 2024",
      excerpt: "ALU introduces an innovative leadership development...",
      image: "https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwY29uZmVyZW5jZSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MDM4MDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Campus Sustainability Initiative",
      category: "Campus",
      date: "Feb 19, 2024",
      excerpt: "Subscribe for real-time ALU news from our campuses worldwide.",
      image: "https://images.unsplash.com/photo-1627685317111-5133a227c0e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjB0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc2MDM4MDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Student Achievements",
      category: "Success",
      date: "Feb 18, 2024",
      excerpt: "Celebrating our students' outstanding accomplishments...",
      image: "https://images.unsplash.com/photo-1620459134634-867369354df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYwMzgwNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="w-80 bg-sidebar border-l border-sidebar-border overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white text-xs">
            ALU
          </div>
          <h3>ALU News</h3>
        </div>

        <div className="space-y-4">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-sidebar-accent border-sidebar-border hover:border-primary/50 transition-colors cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h4>{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                <div className="flex items-center gap-1 text-sm text-primary hover:underline">
                  <span>Read more</span>
                  <ExternalLink className="size-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
