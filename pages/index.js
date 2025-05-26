import Head from "next/head";
import ProudStories from "./components/ProudStories.js";
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Cetal Deve Solutions - Expert Consulting Services</title>
        <meta name="description" content="Transform your business with expert consulting services. We provide staff augmentation, HR solutions, application development, and project management." />
        <meta name="keywords" content="consulting, staff augmentation, application development, project management, HR solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Main About Section with Hero */}
        <About />
        
        {/* Success Stories Section */}
        <section className="section-padding bg-white">
          <div className="modern-container">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Success Stories</h2>
              <p className="section-subtitle">
                Discover how we&apos;ve helped organizations achieve remarkable results 
                through strategic consulting and innovative solutions.
              </p>
            </div>
            <ProudStories />
          </div>
        </section>
      </main>
    </div>
  );
}
