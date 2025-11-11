import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Avatar } from "../ui/avatar";

const testimonials = [
  {
    name: "Amara Okonkwo",
    role: "Computer Science Student",
    university: "ALU",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    quote: "Student Companion has been a game-changer! I get instant answers to my questions about courses, deadlines, and campus resources. It's like having a personal advisor available 24/7.",
    rating: 5
  },
  {
    name: "Kwame Mensah",
    role: "Business Administration Student",
    university: "ALU",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    quote: "The chatbot helped me navigate the scholarship application process seamlessly. I love how it remembers our previous conversations and provides personalized recommendations.",
    rating: 5
  },
  {
    name: "Dr. Sarah Kimani",
    role: "Director of Student Services",
    university: "Partner University",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    quote: "Since implementing Student Companion, we've seen a 60% reduction in repetitive inquiries to our student services office. Our staff can now focus on complex cases that truly need human attention.",
    rating: 5
  },
  {
    name: "Emmanuel Odhiambo",
    role: "Engineering Student",
    university: "ALU",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    quote: "As an international student, I had so many questions about visa processes and campus life. The chatbot provided clear, accurate information instantly. It made my transition so much easier!",
    rating: 5
  },
  {
    name: "Fatima Hassan",
    role: "Medical Student",
    university: "ALU",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    quote: "The career guidance feature is incredible. It helped me discover internship opportunities and connected me with alumni in my field. Student Companion truly supports our professional growth.",
    rating: 5
  },
  {
    name: "Prof. James Adeyemi",
    role: "IT Director",
    university: "Partner University",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    quote: "The integration process was smooth and the security features meet all our institutional requirements. The analytics dashboard gives us valuable insights into student needs and engagement patterns.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-400 mb-4 text-3xl md:text-4xl font-bold">
            What Students & Universities Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Real experiences from students, faculty, and administrators using Student Companion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white/5 border-blue-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:bg-white/10 group"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-400 opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-blue-400 text-xs">{testimonial.university}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
