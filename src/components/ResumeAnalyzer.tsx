import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Upload, FileText, CheckCircle2, AlertCircle, Lightbulb, Download } from "lucide-react";

export function ResumeAnalyzer() {
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    setAnalyzed(true);
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h2>Resume & Cover Letter Analyzer</h2>
        <p className="text-muted-foreground">Get AI-powered feedback to improve your application materials</p>
      </div>

      {!analyzed ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Resume */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Resume</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="size-12 mx-auto mb-4 text-muted-foreground" />
                <h4 className="mb-2">Drop your resume here</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  or click to browse (PDF, DOCX)
                </p>
                <Button variant="outline">Choose File</Button>
              </div>
            </CardContent>
          </Card>

          {/* Upload Cover Letter */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Cover Letter (Optional)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <FileText className="size-12 mx-auto mb-4 text-muted-foreground" />
                <h4 className="mb-2">Drop your cover letter here</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  or click to browse (PDF, DOCX)
                </p>
                <Button variant="outline">Choose File</Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="mb-1">Ready to analyze?</h4>
                    <p className="text-sm text-muted-foreground">
                      Upload at least a resume to get started
                    </p>
                  </div>
                  <Button onClick={handleAnalyze} size="lg" className="gap-2">
                    <CheckCircle2 className="size-5" />
                    Analyze Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <Tabs defaultValue="resume" className="space-y-6">
          <TabsList>
            <TabsTrigger value="resume">Resume Analysis</TabsTrigger>
            <TabsTrigger value="cover-letter">Cover Letter</TabsTrigger>
          </TabsList>

          <TabsContent value="resume" className="space-y-6">
            {/* Overall Score */}
            <Card>
              <CardHeader>
                <CardTitle>Overall Score</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-primary">78/100</h1>
                    <p className="text-muted-foreground">Good, but room for improvement</p>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Download className="size-4" />
                    Download Report
                  </Button>
                </div>
                <Progress value={78} className="h-3" />
              </CardContent>
            </Card>

            {/* Detailed Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Strengths */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-green-500" />
                    Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <CheckCircle2 className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm">
                          <strong>Clear structure:</strong> Well-organized sections with good visual hierarchy
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm">
                          <strong>Quantifiable achievements:</strong> Good use of metrics and numbers
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="size-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm">
                          <strong>Relevant keywords:</strong> Contains industry-specific terminology
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Areas for Improvement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="size-5 text-orange-500" />
                    Areas for Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <AlertCircle className="size-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm">
                          <strong>Action verbs:</strong> Use stronger action verbs at the start of bullet points
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <AlertCircle className="size-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm">
                          <strong>Skills section:</strong> Add technical skills relevant to target role
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <AlertCircle className="size-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm">
                          <strong>White space:</strong> Increase margins for better readability
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Section Scores */}
            <Card>
              <CardHeader>
                <CardTitle>Section-by-Section Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Contact Information", score: 95, status: "excellent" },
                  { name: "Professional Summary", score: 70, status: "good" },
                  { name: "Work Experience", score: 85, status: "excellent" },
                  { name: "Education", score: 90, status: "excellent" },
                  { name: "Skills", score: 60, status: "needs-work" },
                ].map((section) => (
                  <div key={section.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>{section.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            section.status === "excellent"
                              ? "default"
                              : section.status === "good"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {section.score}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={section.score} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="size-5 text-yellow-500" />
                  AI-Powered Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="mb-2">Optimize for ATS (Applicant Tracking Systems)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your resume should include more keywords from the job description to pass through automated screening systems.
                  </p>
                  <Button size="sm" variant="outline">Apply Suggestion</Button>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="mb-2">Enhance Impact Statements</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Replace "Responsible for team management" with "Led cross-functional team of 8 members, increasing productivity by 25%"
                  </p>
                  <Button size="sm" variant="outline">Apply Suggestion</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cover-letter">
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="size-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="mb-2">No Cover Letter Uploaded</h3>
                <p className="text-muted-foreground mb-4">
                  Upload a cover letter to get personalized feedback
                </p>
                <Button>Upload Cover Letter</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
