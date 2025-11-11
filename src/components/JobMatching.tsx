import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Briefcase, MapPin, Clock, DollarSign, ExternalLink, Heart, Search, Filter } from "lucide-react";

export function JobMatching() {
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const jobs = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      location: "Mountain View, CA",
      type: "Internship",
      duration: "3 months",
      salary: "$8,000/month",
      match: 95,
      posted: "2 days ago",
      skills: ["Python", "JavaScript", "React", "Node.js"],
      description: "Join Google's engineering team to work on cutting-edge projects that impact billions of users."
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Microsoft",
      location: "Redmond, WA",
      type: "Internship",
      duration: "6 months",
      salary: "$7,500/month",
      match: 92,
      posted: "1 week ago",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      description: "Work with data scientists to develop ML models and analyze large-scale datasets."
    },
    {
      id: 3,
      title: "Product Manager Intern",
      company: "Meta",
      location: "Menlo Park, CA",
      type: "Internship",
      duration: "12 weeks",
      salary: "$9,000/month",
      match: 88,
      posted: "3 days ago",
      skills: ["Product Strategy", "User Research", "Data Analysis", "Communication"],
      description: "Shape the future of social technology by working on products used by billions."
    },
    {
      id: 4,
      title: "UX Design Intern",
      company: "Apple",
      location: "Cupertino, CA",
      type: "Internship",
      duration: "4 months",
      salary: "$8,500/month",
      match: 85,
      posted: "5 days ago",
      skills: ["Figma", "User Research", "Prototyping", "UI Design"],
      description: "Design beautiful and intuitive experiences for Apple's ecosystem of products."
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "Stripe",
      location: "San Francisco, CA",
      type: "Full-time",
      duration: "Permanent",
      salary: "$120,000 - $150,000/year",
      match: 82,
      posted: "1 day ago",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description: "Build and scale payment infrastructure for the internet economy."
    },
    {
      id: 6,
      title: "Marketing Analyst",
      company: "Amazon",
      location: "Seattle, WA",
      type: "Full-time",
      duration: "Permanent",
      salary: "$75,000 - $95,000/year",
      match: 78,
      posted: "1 week ago",
      skills: ["Excel", "SQL", "Marketing Analytics", "A/B Testing"],
      description: "Analyze marketing campaigns and provide insights to drive business growth."
    }
  ];

  const toggleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2>Internship & Job Matching</h2>
        <p className="text-muted-foreground">AI-powered opportunities matched to your profile</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, company, or skills..."
                className="pl-10 bg-input-background"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48 bg-input-background">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="match">
              <SelectTrigger className="w-full md:w-48 bg-input-background">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">Best Match</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="salary">Highest Salary</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Filter className="size-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Match Score */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-primary">{job.match}%</div>
                      <div className="text-xs text-muted-foreground">match</div>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="mb-1">{job.title}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleSaveJob(job.id)}
                    >
                      <Heart
                        className={`size-5 ${
                          savedJobs.includes(job.id)
                            ? "fill-red-500 text-red-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="size-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-4" />
                      {job.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="size-4" />
                      {job.salary}
                    </div>
                  </div>

                  <p className="text-sm">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">Posted {job.posted}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm" className="gap-2">
                        Apply Now
                        <ExternalLink className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Opportunities
        </Button>
      </div>
    </div>
  );
}
