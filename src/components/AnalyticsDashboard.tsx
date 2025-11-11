import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { BarChart3, Users, TrendingUp, AlertCircle, Award, Calendar, Download } from "lucide-react";

export function AnalyticsDashboard() {
  const overviewStats = [
    {
      title: "Total Students",
      value: "342",
      change: "+12%",
      trend: "up",
      icon: Users
    },
    {
      title: "Average GPA",
      value: "3.64",
      change: "+0.08",
      trend: "up",
      icon: Award
    },
    {
      title: "At-Risk Students",
      value: "23",
      change: "-5",
      trend: "down",
      icon: AlertCircle
    },
    {
      title: "Engagement Rate",
      value: "87%",
      change: "+3%",
      trend: "up",
      icon: TrendingUp
    }
  ];

  const atRiskStudents = [
    {
      id: 1,
      name: "Sarah Johnson",
      major: "Computer Science",
      gpa: 2.8,
      attendance: 72,
      missedDeadlines: 4,
      riskLevel: "high"
    },
    {
      id: 2,
      name: "Michael Chen",
      major: "Business Administration",
      gpa: 2.9,
      attendance: 78,
      missedDeadlines: 3,
      riskLevel: "medium"
    },
    {
      id: 3,
      name: "Emily Roberts",
      major: "Engineering",
      gpa: 3.0,
      attendance: 80,
      missedDeadlines: 2,
      riskLevel: "medium"
    }
  ];

  const coursePerformance = [
    { course: "CS 401 - Machine Learning", avgGrade: 85, enrollment: 45, completion: 92 },
    { course: "CS 305 - Database Systems", avgGrade: 88, enrollment: 52, completion: 95 },
    { course: "PHIL 201 - Ethics", avgGrade: 82, enrollment: 38, completion: 90 },
    { course: "CS 202 - Data Structures", avgGrade: 79, enrollment: 48, completion: 88 },
  ];

  const recentActivity = [
    {
      id: 1,
      student: "John Doe",
      action: "Completed Resume Analysis",
      time: "2 hours ago",
      category: "Career"
    },
    {
      id: 2,
      student: "Jane Smith",
      action: "Applied to 3 internships",
      time: "4 hours ago",
      category: "Jobs"
    },
    {
      id: 3,
      student: "Alex Brown",
      action: "Scheduled advising session",
      time: "5 hours ago",
      category: "Academic"
    },
    {
      id: 4,
      student: "Lisa Wang",
      action: "Updated study plan",
      time: "1 day ago",
      category: "Planning"
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Analytics Dashboard</h2>
          <p className="text-muted-foreground">Track student progress and insights</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="semester">
            <SelectTrigger className="w-48 bg-input-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semester">This Semester</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="size-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground mb-1">{stat.title}</p>
                  <h2 className="mb-1">{stat.value}</h2>
                  <div className="flex items-center gap-1">
                    <span className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground">from last period</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-primary/10">
                  <stat.icon className="size-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* At-Risk Students */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="size-5 text-orange-500" />
                At-Risk Students
              </CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {atRiskStudents.map((student) => (
              <div
                key={student.id}
                className="p-4 rounded-lg border border-border bg-card/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4>{student.name}</h4>
                      <p className="text-sm text-muted-foreground">{student.major}</p>
                    </div>
                  </div>
                  <Badge variant={student.riskLevel === "high" ? "destructive" : "secondary"}>
                    {student.riskLevel} risk
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">GPA</p>
                    <p>{student.gpa}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Attendance</p>
                    <p>{student.attendance}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Missed</p>
                    <p>{student.missedDeadlines} deadlines</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-3">
                  Contact Student
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="size-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
              >
                <Avatar className="size-8">
                  <AvatarFallback className="text-xs">
                    {activity.student.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm mb-1">
                    <span>{activity.student}</span>
                    <span className="text-muted-foreground"> {activity.action}</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{activity.category}</Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Course Performance */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="size-5" />
              Course Performance
            </CardTitle>
            <Button variant="outline" size="sm">View Details</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {coursePerformance.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4>{course.course}</h4>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">{course.enrollment} students</span>
                    <Badge variant="secondary">{course.avgGrade}% avg</Badge>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Completion Rate</span>
                    <span>{course.completion}%</span>
                  </div>
                  <Progress value={course.completion} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Engagement Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <h3 className="text-primary">1,234</h3>
              <p className="text-sm text-muted-foreground">Resume Analyses</p>
              <p className="text-xs text-muted-foreground">This month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <h3 className="text-primary">856</h3>
              <p className="text-sm text-muted-foreground">Job Applications</p>
              <p className="text-xs text-muted-foreground">This month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <h3 className="text-primary">2,103</h3>
              <p className="text-sm text-muted-foreground">Study Sessions</p>
              <p className="text-xs text-muted-foreground">This month</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
