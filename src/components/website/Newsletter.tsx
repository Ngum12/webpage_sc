import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { supabase } from "../../lib/supabase";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      // Check if email already exists
      const { data: existing } = await supabase
        .from('newsletter_subscribers')
        .select('email')
        .eq('email', email)
        .single();
      
      if (existing) {
        setError("This email is already subscribed!");
        setIsLoading(false);
        return;
      }
      
      // Insert new subscriber
      const { error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email: email,
            status: 'active'
          }
        ]);
      
      if (insertError) {
        console.error('Error subscribing:', insertError);
        setError("Failed to subscribe. Please try again.");
        setIsLoading(false);
        return;
      }
      
      setSubmitted(true);
      setIsLoading(false);
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Unexpected error:', err);
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
          
          {/* Header - Centered at Top */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
              Stay Updated
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates, features, and insights on AI in education.
            </p>
          </div>

          {/* Form - Centered Below */}
          <div className="max-w-md mx-auto">
            {!submitted ? (
              <div>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 flex-1"
                  />
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
                {error && (
                  <p className="text-red-400 text-sm mt-2 text-center">{error}</p>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 text-green-400 animate-fade-in">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">Successfully subscribed!</span>
              </div>
            )}
          </div>

          {/* Privacy Note */}
          <p className="text-gray-400 text-xs text-center mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
