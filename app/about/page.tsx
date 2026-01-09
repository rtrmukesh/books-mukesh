// app/about/page.tsx
import React from 'react';
import './style.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Mukesh Murugaiyan - Free E-Books Library',
  description: 'Learn about our mission to provide free knowledge. Founded by Mukesh Murugaiyan - Full Stack Developer making education accessible to all.',
  keywords: 'free ebooks, open source library, public domain books, education for all, Mukesh Murugaiyan, web development, programming books',
  authors: [{ name: 'Mukesh Murugaiyan' }],
  openGraph: {
    title: 'About Our Free E-Books Library',
    description: 'Knowledge for Everyone, Forever Free - Founded by Mukesh Murugaiyan',
    type: 'website',
    url: 'https://books.themukesh.com/about',
    images: [
      {
        url: 'https://books.themukesh.com/mukesh-mg.png',
        width: 1200,
        height: 630,
        alt: 'About Our Free E-Books Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Our Free E-Books Library',
    description: 'Knowledge for Everyone, Forever Free - Founded by Mukesh Murugaiyan',
    images: ['https://books.themukesh.com/mukesh-mg.png'],
    creator: '@rtr_mukesh_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Our Free E-Books Library",
  "description": "Knowledge for Everyone, Forever Free - Founded by Mukesh Murugaiyan",
  "publisher": {
    "@type": "Organization",
    "name": "Free E-Books Library",
    "url": "https://books.themukesh.com"
  },
  "author": {
    "@type": "Person",
    "name": "Mukesh Murugaiyan",
    "jobTitle": "Full Stack Developer",
    "url": "https://books.themukesh.com",
    "sameAs": [
      "https://github.com/rtrmukesh",
      "https://www.linkedin.com/in/mukesh-murugaiyan",
      "https://www.instagram.com/rtr_mukesh_/",
      "https://twitter.com/yourusername"
    ]
  }
};

// Developer profile data
const developer = {
  name: "Mukesh Murugaiyan",
  title: "Full Stack Developer",
  bio: "I build Web, Android, iOS & Desktop applications with modern tech stacks. Passionate about open-source and making education accessible to all.",
  portfolio: "https://books.themukesh.com",
  mainSite: "https://books.themukesh.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/rtrmukesh",
      icon: "🐙",
      username: "@rtrmukesh"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/mukesh-murugaiyan",
      icon: "💼",
      username: "mukesh-murugaiyan"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/rtr_mukesh_/",
      icon: "📸",
      username: "@rtr_mukesh_"
    },
    {
      platform: "Portfolio",
      url: "https://books.themukesh.com",
      icon: "🌐",
      username: "themukesh.com"
    }
  ],
  expertise: [
    "Web Development (React, Next.js, Node.js)",
    "Mobile Apps (React Native, Flutter)",
    "Cloud & DevOps",
    "UI/UX Design",
    "Open Source Advocacy"
  ]
};

export default function AboutPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="about-container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">About Us</li>
          </ol>
        </nav>

        <div className="about-header">
          <h1 className="about-title">📚 About Our Library</h1>
          <p className="about-subtitle">Knowledge for Everyone, Forever Free</p>
          <div className="header-meta">
            <span className="meta-item">🕒 Last Updated: {currentDate}</span>
            <span className="meta-item">📍 Operated by: <strong>{developer.name}</strong></span>
          </div>
        </div>

        {/* Developer Profile Section */}
        <section className="developer-profile">
          <div className="profile-header">
            <div className="profile-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initials">MM</span>
              </div>
            </div>
            <div className="profile-info">
              <h2>👨‍💻 About the Founder</h2>
              <h3>{developer.name}</h3>
              <p className="profile-title">{developer.title}</p>
              <p className="profile-bio">{developer.bio}</p>
              
              {/* Social Links */}
              <div className="social-links-grid">
                {developer.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${developer.name}'s ${link.platform}`}
                  >
                    <span className="social-icon">{link.icon}</span>
                    <div className="social-info">
                      <span className="social-platform">{link.platform}</span>
                      <span className="social-username">{link.username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="expertise-section">
            <h4>🔧 Technical Expertise</h4>
            <div className="expertise-tags">
              {developer.expertise.map((skill, index) => (
                <span key={index} className="expertise-tag">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <div className="about-content">
          {/* Who Runs the Site */}
          <section className="about-section" id="who-we-are">
            <div className="section-icon">👥</div>
            <h2>Who Runs This Site?</h2>
            <div className="section-content">
              <p>
                <strong>This digital library is operated by {developer.name}</strong>, 
                a Full Stack Developer passionate about making knowledge accessible to all. 
                Supported by a community of:
              </p>
              <ul>
                <li>📖 <strong>Volunteer Librarians & Curators</strong> who carefully select and organize content</li>
                <li>💻 <strong>Open-Source Developers</strong> who maintain and improve the platform</li>
                <li>🎓 <strong>Educators & Academics</strong> who ensure content quality and educational value</li>
                <li>🌍 <strong>Global Community Members</strong> who contribute translations and local content</li>
              </ul>
              <p>
                We operate on a transparent, community-driven model where all decisions are made 
                publicly, and everyone can contribute to our mission.
              </p>
            </div>
          </section>

          {/* Why Books Are Free */}
          <section className="about-section" id="why-free">
            <div className="section-icon">🆓</div>
            <h2>Why Are All Books Free?</h2>
            <div className="section-content">
              <p>
                <strong>We believe knowledge should be a fundamental right, not a privilege.</strong>
              </p>
              <div className="reasons-grid">
                <div className="reason-card">
                  <div className="reason-icon">🎯</div>
                  <h3>Mission-Driven</h3>
                  <p>Our core mission is to eliminate barriers to education and literacy worldwide.</p>
                </div>
                
                <div className="reason-card">
                  <div className="reason-icon">⚖️</div>
                  <h3>Legal Accessibility</h3>
                  <p>All books are either in the public domain, Creative Commons licensed, or authorized for free distribution.</p>
                </div>
                
                <div className="reason-card">
                  <div className="reason-icon">❤️</div>
                  <h3>Community Supported</h3>
                  <p>We&apos;re funded by donations, grants, and volunteer efforts—never by selling access to knowledge.</p>
                </div>
                
                <div className="reason-card">
                  <div className="reason-icon">🌐</div>
                  <h3>Global Reach</h3>
                  <p>Free access ensures everyone, regardless of economic status, can benefit from these resources.</p>
                </div>
              </div>
              
              <div className="funding-model">
                <h4>💡 Our Sustainable Model:</h4>
                <p>
                  • No ads, no tracking, no paywalls<br/>
                  • Powered by donations and grants<br/>
                  • Volunteer-maintained infrastructure<br/>
                  • Open-source technology stack<br/>
                  • Community partnerships
                </p>
              </div>
            </div>
          </section>

          {/* Open Source & Public Domain */}
          <section className="about-section" id="open-source">
            <div className="section-icon">🔓</div>
            <h2>Open-Source & Public Domain Commitment</h2>
            <div className="section-content">
              <div className="source-types">
                <div className="source-type">
                  <h3>📜 Public Domain Works</h3>
                  <p>
                    Books whose copyright has expired (usually 70+ years after author&apos;s death) 
                    or works never copyrighted. These belong to humanity&apos;s cultural heritage.
                  </p>
                  <ul>
                    <li>Classic literature (Shakespeare, Dickens, Austen)</li>
                    <li>Historical documents and papers</li>
                    <li>Scientific works from pioneering researchers</li>
                    <li>Government publications</li>
                  </ul>
                </div>
                
                <div className="source-type">
                  <h3>🌍 Creative Commons Licensed</h3>
                  <p>
                    Modern works shared by authors under permissive licenses that allow 
                    free distribution and sometimes modification.
                  </p>
                  <ul>
                    <li>CC BY (Attribution)</li>
                    <li>CC BY-SA (ShareAlike)</li>
                    <li>CC BY-NC (NonCommercial)</li>
                    <li>CC0 (Public Domain Dedication)</li>
                  </ul>
                </div>
                
                <div className="source-type">
                  <h3>🔄 Open Source Platform</h3>
                  <p>
                    Our entire website code is open-source! Contribute, fork, or deploy 
                    your own instance.
                  </p>
                  <ul>
                    <li>GitHub repository available to all</li>
                    <li>Transparent development process</li>
                    <li>Community contributions welcome</li>
                    <li>Self-hostable by educational institutions</li>
                  </ul>
                </div>
              </div>
              
              <div className="legal-note">
                <h4>⚖️ Important Legal Note:</h4>
                <p>
                  While we strive to ensure all content is legally shareable, copyright laws vary by country. 
                  Users are responsible for checking their local copyright regulations. 
                  We promptly remove any content upon valid copyright claims.
                </p>
              </div>
            </div>
          </section>

          {/* Tamil Section */}
          <section className="about-section special-section" id="tamil-section">
            <div className="section-icon">🌟</div>
            <h2>தமிழில்: இந்த பக்கம் இப்போது சேர்க்கிறேன்</h2>
            <div className="section-content">
              <p>
                <strong>Special Note from {developer.name}:</strong> &quot;enaku ipa intha page add pannum&quot; 
                translates to &quot;I will add this page now&quot; in Tamil. This reflects our commitment to:
              </p>
              <ul>
                <li>🚀 <strong>Immediate Action:</strong> Building what our community needs, right now</li>
                <li>🌏 <strong>Cultural Inclusion:</strong> Honoring diverse languages and perspectives</li>
                <li>💪 <strong>Community-Driven:</strong> Responding directly to user requests and feedback</li>
                <li>⚡ <strong>Agile Development:</strong> Rapid implementation of valuable features</li>
              </ul>
              <p className="highlight">
                This page exists because our community asked for it! We listen, we build, we share.
              </p>
              <div className="language-note">
                <p>🌍 <strong>Multi-Language Support:</strong> We&apos;re working on adding more language translations. 
                Want to help translate? <a href="/contribute#translations">Join our translation team</a>.</p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="about-section tech-section" id="tech-stack">
            <div className="section-icon">⚙️</div>
            <h2>Built with Modern Technology</h2>
            <div className="section-content">
              <p>This platform is built using cutting-edge technologies for optimal performance:</p>
              <div className="tech-grid">
                <div className="tech-card">
                  <div className="tech-icon">⚛️</div>
                  <h3>React & Next.js</h3>
                  <p>For fast, server-side rendered pages</p>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">🎨</div>
                  <h3>Tailwind CSS</h3>
                  <p>For responsive, modern design</p>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">🗄️</div>
                  <h3>Vercel/PostgreSQL</h3>
                  <p>For scalable hosting & database</p>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">🔍</div>
                  <h3>SEO Optimized</h3>
                  <p>Next.js metadata & Schema.org</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="cta-section" id="join-us">
            <h2>Join Our Mission</h2>
            <p>
              Whether you want to donate, volunteer, contribute content, or just spread the word—every 
              action helps make knowledge more accessible.
            </p>
            <div className="cta-buttons">
              <Link href="/donate" className="cta-button primary">
                <span className="button-icon">💝</span>
                <span>Support Our Mission</span>
              </Link>
              <Link href="/volunteer" className="cta-button secondary">
                <span className="button-icon">🤝</span>
                <span>Volunteer Your Skills</span>
              </Link>
              <Link href="/contribute" className="cta-button tertiary">
                <span className="button-icon">📚</span>
                <span>Contribute Content</span>
              </Link>
              <a 
                href="https://github.com/rtrmukesh" 
                className="cta-button github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-icon">💻</span>
                <span>View Source Code</span>
              </a>
            </div>
          </section>

          {/* Site Map Links */}
          <nav className="sitemap-links" aria-label="Related pages">
            <h3>📋 Explore More</h3>
            <div className="sitemap-grid">
              <Link href="/">🏠 Home</Link>
              <Link href="/library">📚 Library</Link>
              <Link href="/categories">🗂️ Categories</Link>
              <Link href="/contact">📞 Contact</Link>
              <Link href="/privacy">🔒 Privacy Policy</Link>
              <Link href="/terms">📜 Terms of Service</Link>
            </div>
          </nav>

          {/* Last Updated & Contact */}
          <div className="last-updated">
            <p>
              📅 <strong>Page last updated:</strong> {currentDate} | 
              🔗 <strong>Permalink:</strong> <code>/about</code> | 
              📧 <strong>Contact:</strong> <a href="mailto:contact@themukesh.com">contact@themukesh.com</a>
            </p>
            <div className="copyright">
              <p>© {new Date().getFullYear()} Free E-Books Library. Founded by {developer.name}. All rights reserved.</p>
              <p className="license-note">Content under appropriate licenses. Platform code is open-source (MIT License).</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}