import { BetterButton } from "@/components/ui/betterbutton"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import {
    ArrowRight,
    BookOpen,
    Brain,
    ChartLine,
    Clock,
    GraduationCap,
    MessageSquare,
    Sparkles,
    Star,
    Target,
    Trophy,
    Users
} from 'lucide-react'

const StudentPage = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Your Learning Journey!</h1>
        <p className="text-muted-foreground text-lg">
          Your personalized learning platform designed to help you succeed. Join thousands of students 
          who have improved their grades and confidence through our structured learning approach.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">
          <GraduationCap className="mr-2 h-5 w-5" />
          Start Learning Now
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2">
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
          </div>
          <CardHeader className="flex flex-row items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Personalized Learning Path</h2>
              <CardDescription>Tailored to your pace and style</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-primary" />
                <p className="text-sm">Adaptive learning technology</p>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <p className="text-sm">Progress tracking & goal setting</p>
              </div>
              <div className="flex items-center gap-2">
                <ChartLine className="h-4 w-4 text-primary" />
                <p className="text-sm">Performance analytics</p>
              </div>
            </div>
            <Button variant="outline" className="w-full group">
              Explore Your Courses
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2">
            <Users className="h-5 w-5 text-blue-500 animate-pulse" />
          </div>
          <CardHeader className="flex flex-row items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Expert Tutoring Support</h2>
              <CardDescription>Get help when you need it</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Connect with qualified tutors who can help you overcome challenges and master difficult concepts.
              Available 24/7 for your learning needs.
            </p>
            <div className="flex gap-3">
              <BetterButton href="/student/request-tutor" variant="default" className="w-full group">
                Request a Tutor
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </BetterButton>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Why Students Love Our Platform</h2>
              <CardDescription>Join thousands of successful learners</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <Star className="h-6 w-6 text-yellow-500 mx-auto" />
                    <h3 className="font-semibold">95% Success Rate</h3>
                    <p className="text-sm text-muted-foreground">
                      Students report grade improvements
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <Clock className="h-6 w-6 text-blue-500 mx-auto" />
                    <h3 className="font-semibold">24/7 Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Always here when you need help
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <Users className="h-6 w-6 text-green-500 mx-auto" />
                    <h3 className="font-semibold">10,000+ Students</h3>
                    <p className="text-sm text-muted-foreground">
                      Join our growing community
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">📈 Student Success Stories</h3>
              <p className="text-sm text-muted-foreground">
                &quot;I improved my grades from C to A- in just one semester using this platform. 
                The personalized learning path and tutor support made all the difference!&quot; 
                - Sarah K., Grade 11
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default StudentPage
