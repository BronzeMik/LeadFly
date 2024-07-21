import Head from 'next/head';
import { Bot, Mail, List, Filter, BarChart, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>LeadFly - Elevate Your Business</title>
        <meta name="description" content="LeadFly - Soar Above with Smarter Leads" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="w-full bg-primary text-white px-6 py-2 fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Image src='/leadflylogo.png' alt='LeadFly Logo' width={250} height={50} />
          <nav className="flex items-center space-x-6">
            <a href="#features" className="text-white hover:text-black">Features</a>
            <a href="#pricing" className="text-white hover:text-black">Pricing</a>
            <a href="#testimonials" className="text-white hover:text-black">Testimonials</a>
            <a href="#faq" className="text-white hover:text-black">FAQ</a>
            <a href="http://app.leadflyapp.com" target='_blank' className="bg-white text-primary px-4 py-2 rounded-md hover:bg-black hover:text-white">Start Free Trial</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto pt-12 relative">
        <section className="text-center pt-28 bg-primary">
          <h1 className="text-5xl font-bold text-white mb-6">Transform Your Sales Strategy</h1>
          <p className="text-lg text-white mb-8">LeadFly offers comprehensive lead generation solutions designed to elevate your business.</p>
          <a href="http://app.leadflyapp.com" target='_blank' className="bg-white text-primary px-6 py-3 rounded-md hover:bg-black hover:text-white">Start Free Trial</a>
          <Image src='/hero-img.png' alt="LeadFly dashboard" width={700} height={500} className="mx-auto mt-12" />
        </section>

        <section id="features" className="py-12 bg-gray-50 px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-accent mb-4">LinkedIn Marketing Automation</h3>
              <p className="text-gray-700">Automate your LinkedIn outreach to connect with potential leads effortlessly and grow your network.</p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-accent mb-4">Email Marketing Automation</h3>
              <p className="text-gray-700">Streamline your email campaigns and nurture leads through targeted communication and follow-ups.</p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <List className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-accent mb-4">Lead List Generation</h3>
              <p className="text-gray-700">Generate high-quality lead lists with precision to boost your sales pipeline and improve conversion rates.</p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <Filter className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-accent mb-4">Sales Funnel</h3>
              <p className="text-gray-700">Visualize and optimize your sales funnel to better manage and convert leads into loyal customers.</p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-accent mb-4">Lead Tracking</h3>
              <p className="text-gray-700">Keep track of your leads journey and monitor their interactions to tailor your follow-ups effectively.</p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-accent mb-4">Website Chat App</h3>
              <p className="text-gray-700">Engage with visitors in real-time through our integrated chat application to increase engagement and conversions.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <h3 className="text-2xl font-bold text-accent mb-4">Basic Plan</h3>
              <p className="text-lg text-gray-700 mb-4">$29/month</p>
              <p className="text-gray-700 mb-4">Perfect for small teams starting out with lead generation.</p>
              <a href="http://app.leadflyapp.com" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-black">Get Started</a>
            </div>
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <h3 className="text-2xl font-bold text-accent mb-4">Professional Plan</h3>
              <p className="text-lg text-gray-700 mb-4">$79/month</p>
              <p className="text-gray-700 mb-4">Advanced features for growing businesses looking to scale.</p>
              <a href="http://app.leadflyapp.com" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-black">Get Started</a>
            </div>
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <h3 className="text-2xl font-bold text-accent mb-4">Enterprise Plan</h3>
              <p className="text-lg text-gray-700 mb-4">Custom Pricing</p>
              <p className="text-gray-700 mb-4">Tailored solutions for large organizations with complex needs.</p>
              <a href="http://app.leadflyapp.com" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-black">Contact Us</a>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 bg-gray-50 px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <p className="text-gray-700 mb-4">LeadFly has transformed our lead generation strategy. The automation tools are incredibly effective, and our conversion rates have improved significantly!</p>
              <p className="font-semibold">Alex Johnson</p>
              <p className="text-gray-500">Marketing Director, TechCo</p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <p className="text-gray-700 mb-4">The LeadFly platform is user-friendly and packed with features that have streamlined our sales process. Highly recommend it to any business looking to grow.</p>
              <p className="font-semibold">Sara Lee</p>
              <p className="text-gray-500">CEO, Innovate LLC</p>
            </div>
            <div className="p-6 bg-white rounded-lg text-center shadow">
              <p className="text-gray-700 mb-4">Excellent customer support and a powerful set of tools. LeadFly has been a game-changer for our marketing efforts.</p>
              <p className="font-semibold">James Smith</p>
              <p className="text-gray-500">Sales Manager, MarketMakers</p>
            </div>
          </div>
        </section>

        <section id="faq" className="py-12 px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Frequently Asked Questions</h2>
          <div className="container mx-auto px-4">
            <div className="border-b mb-6">
              <h3 className="text-xl font-bold text-accent mb-2">What is LeadFly?</h3>
              <p className="text-gray-700">LeadFly is a comprehensive lead generation SaaS platform designed to automate and optimize your marketing efforts across various channels.</p>
            </div>
            <div className="border-b mb-6">
              <h3 className="text-xl font-bold text-accent mb-2">How does LeadFly&apos;s LinkedIn automation work?</h3>
              <p className="text-gray-700">Our LinkedIn automation tool helps you connect with potential leads automatically by sending personalized connection requests and follow-ups.</p>
            </div>
            <div className="border-b mb-6">
              <h3 className="text-xl font-bold text-accent mb-2">What types of email marketing automation do you offer?</h3>
              <p className="text-gray-700">LeadFly offers a variety of email marketing automation features, including drip campaigns, segmentation, and analytics to ensure your messages reach the right audience.</p>
            </div>
            <div className="border-b mb-6">
              <h3 className="text-xl font-bold text-accent mb-2">Can I customize my sales funnel?</h3>
              <p className="text-gray-700">Yes, you can customize your sales funnel to fit your business model and track the progress of leads through each stage of the funnel.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center py-12 bg-gray-100 px-6">
          <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4">Ready to take your lead generation to the next level? Start your free trial today!</p>
          <a href="http://app.leadflyapp.com" target='_blank' className="bg-primary border-2 text-white px-4 py-2 rounded hover:bg-white hover:text-primary hover:border-primary">START FREE TRIAL</a>
        </section>
      </main>

      <footer className="bg-primary text-white py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} LeadFly. All rights reserved.</p>
        </div>
      </footer>
      <script src='/background.js'></script>
    </div>
  );
}
