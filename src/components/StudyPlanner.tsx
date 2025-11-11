import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Checkbox } from "./ui/checkbox";
import { Calendar, Clock, BookOpen, Target, TrendingUp, Bell, Plus } from "lucide-react";

export function StudyPlanner() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review Machine Learning algorithms", course: "CS 401", duration: "2 hours", completed: false, priority: "high" },
    { id: 2, title: "Complete Database assignment", course: "CS 305", duration: "3 hours", completed: false, priority: "high" },
    { id: 3, title: "Read Ethics chapter 7", course: "PHIL 201", duration: "1 hour", completed: true, priority: "medium" },
    { id: 4, title: "Practice coding problems", course: "CS 202", duration: "2 hours", completed: false, priority: "medium" },
  ]);

  const weeklyGoals = [
    { id: 1, goal: "Study 20 hours", current: 14, target: 20, unit: "hours" },
    { id: 2, goal: "Complete 5 assignments", current: 3, target: 5, unit: "tasks" },
    { id: 3, goal: "Attend all lectures", current: 8, target: 10, unit: "lectures" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Machine Learning Midterm",
      date: "Oct 20, 2025",
      time: "2:00 PM",
      type: "Exam",
      daysUntil: 7
    },
    {
      id: 2,
      title: "Database Project Deadline",
      date: "Oct 18, 2025",
      time: "11:59 PM",
      type: "Assignment",
      daysUntil: 5
    },
    {
      id: 3,
      title: "Study Group - Data Structures",
      date: "Oct 15, 2025",
      time: "6:00 PM",
      type: "Study Session",
      daysUntil: 2
    },
  ];

  const learningNudges = [
    {
      id: 1,
      message: "You haven't reviewed CS 401 notes in 3 days. Consider spending 30 minutes on it today!",
      type: "reminder",
      icon: BookOpen
    },
    {
      id: 2,
      message: "Great progress! You're 70% through your weekly study goal. Keep it up!",
      type: "motivation",
      icon: TrendingUp
    },
    {
      id: 3,
      message: "Database assignment due in 5 days. Start working on it to avoid last-minute rush.",
      type: "warning",
      icon: Bell
    },
  ];

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2>Study Planner</h2>
        <p className="text-muted-foreground">Stay organized with AI-powered study planning and reminders</p>
      </div>

      {/* Weekly Goals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weeklyGoals.map((goal) => (
          <Card key={goal.id}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4>{goal.goal}</h4>
                  <Target className="size-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span>{goal.current} / {goal.target} {goal.unit}</span>
                  </div>
                  <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Nudges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="size-5 text-primary" />
            Learning Nudges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {learningNudges.map((nudge) => (
            <div
              key={nudge.id}
              className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border"
            >
              <div className={`p-2 rounded-lg ${
                nudge.type === "warning" ? "bg-orange-500/10" :
                nudge.type === "motivation" ? "bg-green-500/10" :
                "bg-blue-500/10"
              }`}>
                <nudge.icon className={`size-5 ${
                  nudge.type === "warning" ? "text-orange-500" :
                  nudge.type === "motivation" ? "text-green-500" :
                  "text-blue-500"
                }`} />
              </div>
              <p className="flex-1 text-sm">{nudge.message}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Tasks */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today's Tasks</CardTitle>
              <Button size="sm" variant="outline" className="gap-2">
                <Plus className="size-4" />
                Add Task
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {tasks.filter(t => !t.completed).map((task) => (
              <div
                key={task.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border"
              >
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="mt-1"
                />
                <div className="flex-1 space-y-1">
                  <h4>{task.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{task.course}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {task.duration}
                    </div>
                  </div>
                </div>
                <Badge variant={task.priority === "high" ? "destructive" : "secondary"}>
                  {task.priority}
                </Badge>
              </div>
            ))}
            
            {tasks.filter(t => t.completed).length > 0 && (
              <div className="pt-3 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Completed</p>
                {tasks.filter(t => t.completed).map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 p-2 opacity-60"
                  >
                    <Checkbox checked disabled />
                    <span className="text-sm line-through">{task.title}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="size-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="p-4 rounded-lg bg-muted/30 border border-border"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="mb-1">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {event.date} at {event.time}
                    </p>
                  </div>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {event.daysUntil} {event.daysUntil === 1 ? "day" : "days"} until
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Study Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>This Week's Study Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <h3 className="text-primary">14</h3>
              <p className="text-sm text-muted-foreground">Hours Studied</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <h3 className="text-primary">8</h3>
              <p className="text-sm text-muted-foreground">Tasks Completed</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <h3 className="text-primary">5</h3>
              <p className="text-sm text-muted-foreground">Study Sessions</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/30">
              <h3 className="text-primary">92%</h3>
              <p className="text-sm text-muted-foreground">Goal Achievement</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
