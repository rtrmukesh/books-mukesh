// app/privacy-policy/page.tsx
import React from "react";
import "./style.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | PDF Library - How We Protect Your Data",
  description:
    "Our comprehensive privacy policy detailing data collection, AdSense advertising, cookie usage, analytics, and your rights regarding personal information.",
  keywords:
    "privacy policy, data protection, AdSense, cookies, GDPR, analytics, user data, privacy",
  authors: [{ name: "Mukesh Murugaiyan" }],
  openGraph: {
    title: "Privacy Policy - PDF Library",
    description:
      "How we protect your data and privacy while using our free PDF library",
    type: "website",
    url: "https://books.themukesh.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description:
    "Privacy policy for the Free PDF Library detailing data protection practices",
  publisher: {
    "@type": "Organization",
    name: "Free PDF Library",
    url: "https://books.themukesh.com",
  },
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="privacy-container">
        {/* Breadcrumb */}
        <nav className="privacy-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Privacy Policy</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="privacy-header">
          <h1 className="privacy-title">🔒 Privacy Policy</h1>
          <p className="privacy-subtitle">
            How we protect your data and privacy
          </p>
          <div className="privacy-meta">
            <span className="meta-item">📅 Effective Date: {currentDate}</span>
            <span className="meta-item">📍 Last Updated: {currentDate}</span>
            <span className="meta-item">⚖️ Version: 2.0</span>
          </div>
        </header>

        <div className="privacy-content">
          {/* Important Notice */}
          <div className="privacy-notice">
            <h2>⚠️ Important Notice</h2>
            <p>
              This Privacy Policy applies to all users of our Free PDF Library.
              By using our service, you consent to the data practices described
              in this policy. We are committed to protecting your privacy and
              being transparent about how we handle your information.
            </p>
          </div>

          {/* Quick Summary */}
          <div className="privacy-summary">
            <h2>📋 At a Glance</h2>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">📊</div>
                <div className="summary-text">
                  <h3>Data We Collect</h3>
                  <p>Basic usage data, analytics, and ad-related information</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🍪</div>
                <div className="summary-text">
                  <h3>Cookie Usage</h3>
                  <p>
                    Essential cookies for functionality and optional analytics
                  </p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">📱</div>
                <div className="summary-text">
                  <h3>Third Parties</h3>
                  <p>Google AdSense and analytics services</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🛡️</div>
                <div className="summary-text">
                  <h3>Your Rights</h3>
                  <p>Control, access, and delete your data anytime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="privacy-main">
            {/* Information Collection */}
            <section id="information-collection" className="privacy-section">
              <h2>📄 Information We Collect</h2>

              <h3>1.1 Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul>
                <li>
                  <strong>Account Information:</strong> Name, email address (if
                  you create an account)
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent,
                  downloads, search queries
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, operating
                  system, IP address (anonymized)
                </li>
                <li>
                  <strong>Location Data:</strong> Country/region (for content
                  localization)
                </li>
              </ul>

              <h3>1.2 Automatic Collection</h3>
              <p>
                We automatically collect certain information when you visit our
                site:
              </p>
              <ul>
                <li>Log files (IP address, browser type, access times)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Device identifiers</li>
                <li>Usage patterns and preferences</li>
              </ul>
            </section>

            {/* Google AdSense */}
            <section id="adsense" className="privacy-section adsense-section">
              <h2>📢 Google AdSense Advertising</h2>

              <div className="section-intro">
                <p>
                  Our website displays advertisements provided by Google AdSense
                  to support our free services. AdSense uses cookies to serve
                  ads based on your prior visits to our website or other
                  websites.
                </p>
              </div>

              <h3>2.1 How AdSense Works</h3>
              <p>Google AdSense may:</p>
              <ul>
                <li>Use cookies to serve personalized ads</li>
                <li>Collect information about your interactions with ads</li>
                <li>Use interest-based advertising</li>
                <li>Show ads based on your browsing history</li>
              </ul>

              <h3>2.2 Data Collected by AdSense</h3>
              <p>Google may collect:</p>
              <ul>
                <li>Browser and device information</li>
                <li>IP address (anonymized)</li>
                <li>Pages visited and interactions</li>
                <li>Demographic information (age, gender, interests)</li>
              </ul>

              <h3>2.3 Your Ad Choices</h3>
              <p>You can control personalized advertising:</p>
              <ul>
                <li>
                  <strong>Opt-out of personalized ads:</strong>{" "}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Ads Settings
                  </a>
                </li>
                <li>
                  <strong>Browser controls:</strong> Manage cookies in your
                  browser settings
                </li>
                <li>
                  <strong>Industry programs:</strong>{" "}
                  <a
                    href="https://optout.aboutads.info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YourAdChoices (Digital Advertising Alliance)
                  </a>
                </li>
                <li>
                  <strong>European users:</strong>{" "}
                  <a
                    href="https://www.youronlinechoices.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Your Online Choices (EU)
                  </a>
                </li>
              </ul>

              <div className="legal-note">
                <h4>⚖️ Legal Compliance</h4>
                <p>
                  We comply with all applicable advertising regulations
                  including GDPR, CCPA, and other privacy laws. Ads are clearly
                  marked as &quot;Advertisements&quot; and are served through Google&apos;s
                  certified ad network.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section id="cookies" className="privacy-section cookies-section">
              <h2>🍪 Cookie Policy</h2>

              <div className="section-intro">
                <p>
                  Cookies are small text files stored on your device. We use
                  different types of cookies for various purposes.
                </p>
              </div>

              <h3>3.1 Types of Cookies We Use</h3>

              <div className="cookie-table">
                <div className="cookie-row header">
                  <div className="cookie-type">Cookie Type</div>
                  <div className="cookie-purpose">Purpose</div>
                  <div className="cookie-duration">Duration</div>
                </div>

                <div className="cookie-row">
                  <div className="cookie-type">
                    <strong>Essential Cookies</strong>
                  </div>
                  <div className="cookie-purpose">
                    Necessary for basic site functionality (login, preferences,
                    security)
                  </div>
                  <div className="cookie-duration">
                    Session or up to 30 days
                  </div>
                </div>

                <div className="cookie-row">
                  <div className="cookie-type">
                    <strong>Analytics Cookies</strong>
                  </div>
                  <div className="cookie-purpose">
                    Help us understand how visitors interact with our website
                  </div>
                  <div className="cookie-duration">Up to 2 years</div>
                </div>

                <div className="cookie-row">
                  <div className="cookie-type">
                    <strong>Advertising Cookies</strong>
                  </div>
                  <div className="cookie-purpose">
                    Used by AdSense to deliver relevant advertisements
                  </div>
                  <div className="cookie-duration">Up to 2 years</div>
                </div>

                <div className="cookie-row">
                  <div className="cookie-type">
                    <strong>Preference Cookies</strong>
                  </div>
                  <div className="cookie-purpose">
                    Remember your settings and preferences
                  </div>
                  <div className="cookie-duration">Up to 1 year</div>
                </div>
              </div>

              <h3>3.2 Managing Cookies</h3>
              <p>You can control cookies through:</p>
              <ul>
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to
                  refuse cookies
                </li>
                <li>
                  <strong>Cookie Consent Banner:</strong> Manage preferences
                  when you first visit
                </li>
                <li>
                  <strong>Third-party Tools:</strong> Browser extensions for
                  cookie management
                </li>
              </ul>

              <div className="important-note">
                <h4>⚠️ Important</h4>
                <p>
                  Disabling essential cookies may affect your ability to use
                  certain features of our website. Advertising and analytics
                  cookies can be disabled without affecting core functionality.
                </p>
              </div>
            </section>

            {/* Analytics */}
            <section
              id="analytics"
              className="privacy-section analytics-section"
            >
              <h2>📈 Analytics & Tracking</h2>

              <div className="section-intro">
                <p>
                  We use analytics services to understand user behavior and
                  improve our services.
                </p>
              </div>

              <h3>4.1 Google Analytics</h3>
              <p>We use Google Analytics to:</p>
              <ul>
                <li>Analyze website traffic and usage patterns</li>
                <li>Understand user demographics and interests</li>
                <li>Measure content performance</li>
                <li>Improve user experience</li>
              </ul>

              <h3>4.2 Data Protection Measures</h3>
              <p>We have implemented:</p>
              <ul>
                <li>IP anonymization (Google Analytics)</li>
                <li>Data retention controls (set to 26 months)</li>
                <li>User ID anonymization</li>
                <li>No sharing of analytics data with third parties</li>
              </ul>

              <h3>4.3 Opting Out of Analytics</h3>
              <p>You can opt-out of analytics tracking:</p>
              <ul>
                <li>
                  <strong>Google Analytics Opt-out:</strong>{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
                <li>
                  <strong>Browser Privacy Settings:</strong> Enable &quot;Do Not
                  Track&quot; in your browser
                </li>
                <li>
                  <strong>Cookie Settings:</strong> Disable analytics cookies
                  through our cookie banner
                </li>
              </ul>
            </section>

            {/* Data Usage & Sharing */}
            <section id="data-usage" className="privacy-section">
              <h2>📤 How We Use Your Information</h2>

              <h3>5.1 Primary Uses</h3>
              <p>We use collected data to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Improve user experience and website functionality</li>
                <li>Process downloads and track usage statistics</li>
                <li>Send important updates and notifications</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3>5.2 Data Sharing</h3>
              <p>We may share information with:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Hosting, analytics, and ad
                  networks
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or
                  legal process
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger or
                  acquisition
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly permit
                  sharing
                </li>
              </ul>

              <h3>5.3 Data Retention</h3>
              <p>We retain data for:</p>
              <ul>
                <li>
                  <strong>Account Data:</strong> Until account deletion request
                </li>
                <li>
                  <strong>Usage Data:</strong> Up to 3 years for analytics
                </li>
                <li>
                  <strong>Log Files:</strong> Up to 1 year for security purposes
                </li>
                <li>
                  <strong>Cookies:</strong> As specified in cookie settings
                </li>
              </ul>
            </section>

            {/* Your Rights */}
            <section
              id="your-rights"
              className="privacy-section rights-section"
            >
              <h2>🛡️ Your Privacy Rights</h2>

              <div className="rights-grid">
                <div className="right-item">
                  <div className="right-icon">👁️</div>
                  <div className="right-content">
                    <h3>Right to Access</h3>
                    <p>Request a copy of your personal data we hold</p>
                  </div>
                </div>

                <div className="right-item">
                  <div className="right-icon">✏️</div>
                  <div className="right-content">
                    <h3>Right to Rectification</h3>
                    <p>Correct inaccurate or incomplete data</p>
                  </div>
                </div>

                <div className="right-item">
                  <div className="right-icon">🗑️</div>
                  <div className="right-content">
                    <h3>Right to Deletion</h3>
                    <p>Request deletion of your personal data</p>
                  </div>
                </div>

                <div className="right-item">
                  <div className="right-icon">⏸️</div>
                  <div className="right-content">
                    <h3>Right to Restrict</h3>
                    <p>Limit how we use your data</p>
                  </div>
                </div>

                <div className="right-item">
                  <div className="right-icon">📤</div>
                  <div className="right-content">
                    <h3>Right to Portability</h3>
                    <p>Receive your data in a portable format</p>
                  </div>
                </div>

                <div className="right-item">
                  <div className="right-icon">🙅‍♂️</div>
                  <div className="right-content">
                    <h3>Right to Object</h3>
                    <p>Object to certain data processing</p>
                  </div>
                </div>
              </div>

              <div className="exercise-rights">
                <h3>How to Exercise Your Rights</h3>
                <p>To exercise any of these rights, please contact us at:</p>
                <div className="contact-info">
                  <p>
                    <strong>Email:</strong> <a href="mailto:contact@themukesh.com">
                    contact@themukesh.com
                  </a>
                  </p>
                  <p>
                    <strong>Subject:</strong> &quot;Privacy Rights Request&quot;
                  </p>
                  <p>
                    <strong>Response Time:</strong> We will respond within 24Hrs
                  </p>
                </div>
              </div>
            </section>

            {/* Security */}
            <section id="security" className="privacy-section security-section">
              <h2>🔐 Data Security</h2>

              <h3>7.1 Security Measures</h3>
              <p>We implement industry-standard security measures:</p>
              <ul>
                <li>SSL/TLS encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Data anonymization where possible</li>
                <li>Secure server infrastructure</li>
              </ul>

              <h3>7.2 Data Breach Protocol</h3>
              <p>In case of a data breach, we will:</p>
              <ul>
                <li>Notify affected users within 72 hours</li>
                <li>Inform relevant authorities as required by law</li>
                <li>Take immediate steps to secure data</li>
                <li>Provide guidance to affected users</li>
              </ul>
            </section>

            {/* International Transfers */}
            <section id="international" className="privacy-section">
              <h2>🌍 International Data Transfers</h2>

              <p>
                Our servers are located in multiple countries. By using our
                services, you acknowledge that your data may be transferred to
                and processed in countries outside your country of residence.
              </p>

              <h3>8.1 GDPR Compliance</h3>
              <p>For EU/UK residents, we comply with GDPR requirements:</p>
              <ul>
                <li>Data Protection Agreements with processors</li>
                <li>Standard Contractual Clauses where applicable</li>
                <li>Adequate safeguards for data transfers</li>
              </ul>

              <h3>8.2 CCPA Compliance</h3>
              <p>For California residents, we comply with CCPA:</p>
              <ul>
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of data sales</li>
                <li>Non-discrimination for exercising rights</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section id="children" className="privacy-section">
              <h2>👶 Children&apos;s Privacy</h2>

              <p>
                Our services are not directed to children under the age of 13.
                We do not knowingly collect personal information from children
                under 13. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us
                immediately.
              </p>
            </section>

            {/* Contact & Updates */}
            <section id="contact" className="privacy-section contact-section">
              <h2>📞 Contact & Updates</h2>

              <h3>10.1 Contact Information</h3>
              <div className="contact-details">
                <p>
                  <strong>Privacy Officer:</strong> Mukesh Murugaiyan
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contact@themukesh.com">
                    contact@themukesh.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <Link href="https://themukesh.com">Contact Page</Link>
                </p>
              </div>

              <h3>10.2 Policy Updates</h3>
              <p>
                We may update this privacy policy periodically. We will notify
                you of significant changes by:
              </p>
              <ul>
                <li>Posting the new policy on this page</li>
                <li>Updating the &quot;Last Updated&quot; date</li>
                <li>Sending email notifications (for account holders)</li>
                <li>Displaying a notice on our website</li>
              </ul>

              <div className="update-notice">
                <h4>📅 Review Schedule</h4>
                <p>
                  This policy is reviewed annually or when significant changes
                  to our data practices occur. You are advised to review this
                  policy periodically for any changes.
                </p>
              </div>
            </section>

            {/* Quick Links */}
            <nav
              className="privacy-quicklinks"
              aria-label="Quick links to policy sections"
            >
              <h3>🔗 Quick Navigation</h3>
              <div className="quicklinks-grid">
                <a href="#adsense">📢 AdSense Policy</a>
                <a href="#cookies">🍪 Cookie Policy</a>
                <a href="#analytics">📈 Analytics</a>
                <a href="#your-rights">🛡️ Your Rights</a>
                <a href="#security">🔐 Security</a>
                <a href="#contact">📞 Contact</a>
              </div>
            </nav>
          </main>

          {/* Footer */}
          <footer className="privacy-footer">
            <div className="footer-content">
              <div className="footer-section">
                <h4>📋 Related Documents</h4>
                <div className="footer-links">
                  <Link href="/terms">Terms of Service</Link>
                  <Link href="/cookies">Cookie Policy</Link>
                  <Link href="/acceptable-use">Acceptable Use Policy</Link>
                  <Link href="/dmca">DMCA Policy</Link>
                </div>
              </div>

              <div className="footer-section">
                <h4>⚖️ Legal Compliance</h4>
                <p>
                  Compliant with: GDPR, CCPA, PIPEDA, LGPD, and other privacy
                  regulations.
                </p>
              </div>

              <div className="footer-section">
                <h4>🔗 Quick Actions</h4>
                <div className="footer-actions">
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Manage Ad Preferences
                  </a>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Opt-out of Analytics
                  </a>
                  <Link href="/contact#privacy">Contact Privacy Officer</Link>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>
                © {new Date().getFullYear()} Free PDF Library. Operated by
                Mukesh Murugaiyan. All rights reserved.
              </p>
              <p className="footer-note">
                This privacy policy is effective as of {currentDate}. By using
                our services, you acknowledge you have read and understood this
                policy.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
