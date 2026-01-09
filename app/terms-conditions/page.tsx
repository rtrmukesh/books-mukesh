// app/terms-conditions/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import './style.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Free PDF Library - Usage Rules & Policies',
  description: 'Terms of service, copyright disclaimers, user responsibilities, and download usage rules for our free PDF library.',
  keywords: 'terms and conditions, copyright disclaimer, fair use, user responsibilities, download rules, PDF usage',
  authors: [{ name: 'Mukesh Murugaiyan' }],
  openGraph: {
    title: 'Terms & Conditions - Free PDF Library',
    description: 'Legal terms, usage rules, and copyright information for our PDF library',
    type: 'website',
    url: 'https://books.themukesh.com/terms-conditions',
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
  "name": "Terms and Conditions",
  "description": "Legal terms and conditions for using the Free PDF Library",
  "publisher": {
    "@type": "Organization",
    "name": "Free PDF Library",
    "url": "https://books.themukesh.com"
  }
};

export default function TermsConditionsPage() {
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

      <div className="terms-container">
        {/* Breadcrumb */}
        <nav className="terms-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">Terms & Conditions</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="terms-header">
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-subtitle">Legal Agreement for Using Our Free PDF Library</p>
          <div className="terms-meta">
            <span className="meta-item">📅 Effective Date: {currentDate}</span>
            <span className="meta-item">📍 Version: 3.0</span>
            <span className="meta-item">🔒 Please Read Carefully</span>
          </div>
        </header>

        <div className="terms-content">
          {/* Important Notice */}
          <div className="terms-notice critical">
            <h2>⚠️ IMPORTANT LEGAL NOTICE</h2>
            <p>
              By accessing or using our Free PDF Library, you agree to be bound by these Terms & Conditions. 
              If you disagree with any part of these terms, you must not use our services. These terms 
              constitute a legally binding agreement between you and the Free PDF Library.
            </p>
          </div>

          {/* Quick Overview */}
          <div className="terms-overview">
            <h2>Quick Overview of Key Points</h2>
            <div className="overview-grid">
              <div className="overview-item">
                <div className="overview-icon">📚</div>
                <div className="overview-text">
                  <h3>Copyright Respect</h3>
                  <p>All content is provided under appropriate licenses</p>
                </div>
              </div>
              <div className="overview-item">
                <div className="overview-icon">👤</div>
                <div className="overview-text">
                  <h3>User Responsibility</h3>
                  <p>You are responsible for how you use downloaded content</p>
                </div>
              </div>
              <div className="overview-item">
                <div className="overview-icon">⚖️</div>
                <div className="overview-text">
                  <h3>Legal Compliance</h3>
                  <p>Must comply with copyright and intellectual property laws</p>
                </div>
              </div>
              <div className="overview-item">
                <div className="overview-icon">🚫</div>
                <div className="overview-text">
                  <h3>Prohibited Uses</h3>
                  <p>No commercial redistribution without permission</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="terms-main">
            {/* Agreement Section */}
            <section id="agreement" className="terms-section">
              <h2>1. Agreement to Terms</h2>
              
              <h3>1.1 Acceptance</h3>
              <p>
                By accessing and using the Free PDF Library (&quot;Service&quot;), you accept and agree to be bound 
                by the terms and provision of this agreement. In addition, when using this Service, you 
                shall be subject to any posted guidelines or rules applicable to such services.
              </p>

              <h3>1.2 Modification of Terms</h3>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any 
                material changes via email (for registered users) or by posting a notice on our website. 
                Your continued use of the Service constitutes acceptance of the revised terms.
              </p>

              <h3>1.3 Eligibility</h3>
              <p>
                You must be at least 13 years old to use this Service. By using this Service, you represent 
                and warrant that you meet all eligibility requirements.
              </p>
            </section>

            {/* Copyright Disclaimer */}
            <section id="copyright" className="terms-section copyright-section">
              <h2>2. Copyright & Intellectual Property</h2>
              
              <div className="section-intro">
                <p>
                  <strong>IMPORTANT:</strong> The Free PDF Library provides access to content under 
                  various copyright statuses. We do not claim ownership of the intellectual property 
                  rights in the content provided.
                </p>
              </div>

              <h3>2.1 Copyright Status of Content</h3>
              <div className="copyright-types">
                <div className="copyright-type">
                  <h4>📜 Public Domain Works</h4>
                  <p>
                    Works whose copyright has expired or were never copyrighted. These may be used freely 
                    without restriction, though attribution is appreciated.
                  </p>
                </div>
                
                <div className="copyright-type">
                  <h4>🌍 Creative Commons Licensed</h4>
                  <p>
                    Works shared by authors under specific Creative Commons licenses. Each work includes 
                    license details. You must comply with the specific license terms (attribution, 
                    non-commercial, share-alike, etc.).
                  </p>
                </div>
                
                <div className="copyright-type">
                  <h4>Educational Fair Use</h4>
                  <p>
                    Some works may be available under educational fair use provisions. These are for 
                    personal, educational, non-commercial use only.
                  </p>
                </div>
              </div>

              <h3>2.2 Copyright Disclaimer</h3>
              <div className="disclaimer-box">
                <h4>🚨 LEGAL DISCLAIMER</h4>
                <p>
                  The Free PDF Library operates as a digital repository and does not claim ownership 
                  or copyright over the content provided. We make every effort to ensure that all 
                  content is either:
                </p>
                <ul>
                  <li>In the public domain</li>
                  <li>Released under appropriate Creative Commons licenses</li>
                  <li>Available for educational fair use</li>
                  <li>Authorized for distribution by the copyright holder</li>
                </ul>
                <p>
                  However, copyright laws vary by country, and it is <strong>YOUR RESPONSIBILITY</strong> 
                  to verify the copyright status of any work before using it.
                </p>
              </div>

              <h3>2.3 DMCA Compliance</h3>
              <p>
                We comply with the Digital Millennium Copyright Act (DMCA). If you believe your 
                copyrighted work has been infringed, please contact us immediately:
              </p>
              <div className="contact-box">
                <p><strong>DMCA Agent:</strong> Mukesh Murugaiyan</p>
                <p><strong>Email:</strong> <a href="mailto:contact@themukesh.com">
                    contact@themukesh.com
                  </a></p>
                <p><strong>Required Information:</strong> Identification of copyrighted work, your contact 
                information, statement of good faith belief, and statement under penalty of perjury.</p>
              </div>
            </section>

            {/* User Responsibilities */}
            <section id="responsibilities" className="terms-section responsibilities-section">
              <h2>3. User Responsibilities & Conduct</h2>
              
              <h3>3.1 General Responsibilities</h3>
              <p>As a user of our Service, you agree to:</p>
              <ul>
                <li>Use the Service only for lawful purposes</li>
                <li>Respect all intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Provide accurate information when required</li>
                <li>Maintain the security of your account credentials</li>
                <li>Report any security vulnerabilities or copyright concerns</li>
              </ul>

              <h3>3.2 Prohibited Activities</h3>
              <p>You must NOT:</p>
              <div className="prohibited-grid">
                <div className="prohibited-item">
                  <div className="prohibited-icon">🚫</div>
                  <div className="prohibited-text">
                    <h4>Copyright Infringement</h4>
                    <p>Use content in violation of copyright laws</p>
                  </div>
                </div>
                
                <div className="prohibited-item">
                  <div className="prohibited-icon">💰</div>
                  <div className="prohibited-text">
                    <h4>Commercial Exploitation</h4>
                    <p>Sell or commercially redistribute content without permission</p>
                  </div>
                </div>
                
                <div className="prohibited-item">
                  <div className="prohibited-icon">🔄</div>
                  <div className="prohibited-text">
                    <h4>Unauthorized Modification</h4>
                    <p>Alter or modify content against license terms</p>
                  </div>
                </div>
                
                <div className="prohibited-item">
                  <div className="prohibited-icon">📢</div>
                  <div className="prohibited-text">
                    <h4>Misrepresentation</h4>
                    <p>Claim authorship or ownership of content</p>
                  </div>
                </div>
                
                <div className="prohibited-item">
                  <div className="prohibited-icon">💻</div>
                  <div className="prohibited-text">
                    <h4>Technical Abuse</h4>
                    <p>Attempt to hack, scrape, or overload our systems</p>
                  </div>
                </div>
                
                <div className="prohibited-item">
                  <div className="prohibited-icon">📧</div>
                  <div className="prohibited-text">
                    <h4>Spam & Harassment</h4>
                    <p>Send unsolicited communications or harass others</p>
                  </div>
                </div>
              </div>

              <h3>3.3 Account Responsibility</h3>
              <p>
                If you create an account, you are responsible for maintaining the confidentiality 
                of your account and password. You agree to accept responsibility for all activities 
                that occur under your account.
              </p>
            </section>

            {/* Download Usage Rules */}
            <section id="download-rules" className="terms-section download-section">
              <h2>4. Download & Usage Rules</h2>
              
              <div className="section-intro">
                <p>
                  These rules govern how you may use downloaded content from our library. Violation 
                  of these rules may result in termination of your access.
                </p>
              </div>

              <h3>4.1 Permitted Uses</h3>
              <div className="permitted-uses">
                <div className="permitted-category">
                  <h4>Personal Use</h4>
                  <ul>
                    <li>Reading and personal education</li>
                    <li>Research and reference</li>
                    <li>Educational assignments (with proper citation)</li>
                    <li>Personal archiving and backup</li>
                  </ul>
                </div>
                
                <div className="permitted-category">
                  <h4>Educational Use</h4>
                  <ul>
                    <li>Classroom teaching (non-commercial)</li>
                    <li>Academic research</li>
                    <li>Student projects (with attribution)</li>
                    <li>Library collections (non-commercial)</li>
                  </ul>
                </div>
                
                <div className="permitted-category">
                  <h4>Creative Use</h4>
                  <ul>
                    <li>Quotations (with proper citation)</li>
                    <li>Analysis and commentary</li>
                    <li>Transformative works (where permitted by license)</li>
                    <li>Non-commercial creative projects</li>
                  </ul>
                </div>
              </div>

              <h3>4.2 Restricted Uses</h3>
              <div className="restricted-uses">
                <div className="restricted-category">
                  <h4>Commercial Redistribution</h4>
                  <p>You may NOT:</p>
                  <ul>
                    <li>Sell or rent downloaded content</li>
                    <li>Include in paid courses or materials without permission</li>
                    <li>Use in commercial software or applications</li>
                    <li>Resell or rebrand content as your own</li>
                  </ul>
                </div>
                
                <div className="restricted-category">
                  <h4>Unauthorized Distribution</h4>
                  <p>You may NOT:</p>
                  <ul>
                    <li>Upload to other websites without permission</li>
                    <li>Share on file-sharing networks</li>
                    <li>Create mirror sites of our content</li>
                    <li>Bulk download for redistribution</li>
                  </ul>
                </div>
              </div>

              <h3>4.3 Attribution Requirements</h3>
              <p>When using content, you must:</p>
              <div className="attribution-rules">
                <div className="attribution-rule">
                  <h4>Proper Citation</h4>
                  <p>Include author name, title, source, and license information</p>
                </div>
                
                <div className="attribution-rule">
                  <h4>🔗 Source Attribution</h4>
                  <p>Credit &quot;Free PDF Library&quot; as the source when appropriate</p>
                </div>
                
                <div className="attribution-rule">
                  <h4>License Compliance</h4>
                  <p>Follow specific license requirements for each work</p>
                </div>
              </div>

              <h3>4.4 Download Limits & Fair Use</h3>
              <p>To ensure fair access for all users:</p>
              <ul>
                <li><strong>Rate Limits:</strong> Maximum 100 downloads per day per user</li>
                <li><strong>Bulk Downloading:</strong> Automated bulk downloading is prohibited</li>
                <li><strong>API Usage:</strong> No unauthorized API access</li>
                <li><strong>Bandwidth:</strong> Excessive bandwidth usage may be restricted</li>
              </ul>
            </section>

            {/* Content Disclaimer */}
            <section id="content-disclaimer" className="terms-section disclaimer-section">
              <h2>5. Content Disclaimer & Limitation of Liability</h2>
              
              <h3>5.1 No Warranty</h3>
              <div className="warranty-disclaimer">
                <p>
                  THE SERVICE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES 
                  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </div>

              <h3>5.2 Accuracy Disclaimer</h3>
              <p>
                We do not guarantee the accuracy, completeness, or usefulness of any content. 
                Content is provided for informational and educational purposes only. You should 
                independently verify any information before relying on it.
              </p>

              <h3>5.3 Limitation of Liability</h3>
              <div className="liability-box">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE FREE PDF LIBRARY, ITS OPERATORS, 
                  AND CONTRIBUTORS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM:
                </p>
                <ul>
                  <li>Your use or inability to use the Service</li>
                  <li>Any content obtained through the Service</li>
                  <li>Unauthorized access to or alteration of your transmissions</li>
                  <li>Statements or conduct of any third party on the Service</li>
                  <li>Any other matter relating to the Service</li>
                </ul>
              </div>

              <h3>5.4 Indemnification</h3>
              <p>
                You agree to defend, indemnify, and hold harmless the Free PDF Library, its 
                operators, and contributors from and against any claims, damages, obligations, 
                losses, liabilities, costs, or debt arising from:
              </p>
              <ul>
                <li>Your use of and access to the Service</li>
                <li>Your violation of any term of these Terms & Conditions</li>
                <li>Your violation of any third-party right, including copyright</li>
                <li>Any claim that your use caused damage to a third party</li>
              </ul>
            </section>

            {/* Termination */}
            <section id="termination" className="terms-section">
              <h2>6. Termination & Suspension</h2>
              
              <h3>6.1 Our Rights</h3>
              <p>
                We may terminate or suspend your access to the Service immediately, without 
                prior notice or liability, for any reason whatsoever, including without 
                limitation if you breach the Terms.
              </p>

              <h3>6.2 Grounds for Termination</h3>
              <p>We may terminate access for:</p>
              <ul>
                <li>Copyright infringement or DMCA violations</li>
                <li>Abuse of download privileges</li>
                <li>Attempts to circumvent technical protections</li>
                <li>Violation of prohibited activities</li>
                <li>Legal or regulatory requirements</li>
              </ul>

              <h3>6.3 Effect of Termination</h3>
              <p>
                Upon termination, your right to use the Service will immediately cease. All 
                provisions of the Terms which by their nature should survive termination shall 
                survive termination, including ownership provisions, warranty disclaimers, 
                indemnity, and limitations of liability.
              </p>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="terms-section">
              <h2>7. Governing Law & Dispute Resolution</h2>
              
              <h3>7.1 Governing Law</h3>
              <p>
                These Terms shall be governed and construed in accordance with the laws of 
                [Your Country/State], without regard to its conflict of law provisions.
              </p>

              <h3>7.2 Dispute Resolution</h3>
              <p>
                Any dispute arising from these Terms shall be resolved through binding 
                arbitration in accordance with the rules of [Arbitration Organization]. 
                The arbitration shall take place in [City, Country].
              </p>

              <h3>7.3 Class Action Waiver</h3>
              <p>
                You agree that any arbitration or proceeding shall be limited to the dispute 
                between us individually. There is no right or authority for any dispute to be 
                brought in a purported representative capacity or as a class action.
              </p>
            </section>

            {/* Miscellaneous */}
            <section id="miscellaneous" className="terms-section">
              <h2>8. Miscellaneous Provisions</h2>
              
              <h3>8.1 Entire Agreement</h3>
              <p>
                These Terms constitute the entire agreement between us regarding our Service, 
                and supersede and replace any prior agreements we might have between us regarding the Service.
              </p>

              <h3>8.2 Severability</h3>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable by a court, 
                the remaining provisions of these Terms will remain in effect.
              </p>

              <h3>8.3 No Waiver</h3>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered 
                a waiver of those rights.
              </p>

              <h3>8.4 Contact Information</h3>
              <div className="contact-information">
                <p><strong>Service Operator:</strong> Mukesh Murugaiyan</p>
                <p><strong>Email:</strong> <a href="mailto:contact@themukesh.com">
                    contact@themukesh.com
                  </a></p>
                <p><strong>Website:</strong> <Link href="https://books.themukesh.com">Contact Page</Link></p>
              </div>
            </section>

            {/* Acceptance */}
            <section id="acceptance" className="terms-section acceptance-section">
              <h2>9. Acceptance of Terms</h2>
              
              <div className="acceptance-box">
                <h3>YOUR AGREEMENT</h3>
                <p>
                  By using the Free PDF Library, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms & Conditions. If you do not agree to these 
                  terms, you must not use our Service.
                </p>
                <div className="acceptance-steps">
                  <div className="acceptance-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Read Carefully</h4>
                      <p>Review all sections of these terms</p>
                    </div>
                  </div>
                  <div className="acceptance-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Understand Responsibilities</h4>
                      <p>Know your obligations and limitations</p>
                    </div>
                  </div>
                  <div className="acceptance-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Comply with Terms</h4>
                      <p>Use the Service only as permitted</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Navigation */}
            <nav className="terms-quicklinks" aria-label="Quick links to terms sections">
              <h3>🔗 Quick Navigation</h3>
              <div className="quicklinks-grid">
                <a href="#copyright">Copyright Disclaimer</a>
                <a href="#responsibilities">User Responsibilities</a>
                <a href="#download-rules">Download Rules</a>
                <a href="#content-disclaimer">Liability Disclaimer</a>
                <a href="#termination">Termination</a>
                <a href="#acceptance">Acceptance</a>
              </div>
            </nav>
          </main>

          {/* Footer */}
          <footer className="terms-footer">
            <div className="footer-content">
              <div className="footer-section">
                <h4>Related Legal Documents</h4>
                <div className="footer-links">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/cookies">Cookie Policy</Link>
                  <Link href="/acceptable-use">Acceptable Use Policy</Link>
                  <Link href="/dmca">DMCA Policy</Link>
                </div>
              </div>
              
              <div className="footer-section">
                <h4>Legal Compliance</h4>
                <p>
                  These terms comply with international laws including copyright regulations, 
                  digital content distribution guidelines, and user protection standards.
                </p>
              </div>
              
              <div className="footer-section">
                <h4>📞 Need Help?</h4>
                <div className="footer-actions">
                  <Link href="https://books.themukesh.com">Legal Questions</Link>
                  <Link href="https://books.themukesh.com">Copyright Issues</Link>
                  <Link href="https://books.themukesh.com">DMCA Reports</Link>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>
                © {new Date().getFullYear()} Free PDF Library. Operated by Mukesh Murugaiyan. 
                All rights reserved.
              </p>
              <p className="footer-note">
                This document is a legal agreement. Last updated: {currentDate}. 
                By using our services, you acknowledge you have read and agreed to these terms.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}