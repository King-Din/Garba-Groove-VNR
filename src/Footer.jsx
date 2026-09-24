import {
  ArrowUpRight,
  Phone,
  Mail
} from 'lucide-react';

const PAYMENT_URL = 'https://rzp.io/rzp/QuJ5l2Gm';

const INSTAGRAM_URL =
  'https://www.instagram.com/streetcausevnrvjiet?stkn=MWVtN2EyOXF5NTFybg==';

const INSTAGRAM_HANDLE = '@streetcausevnrvjiet';

const PHONE_1 = '+91 79014 27617';
const PHONE_2 = '+91 9866543210';
const EMAIL = 'streetcausevnr.hyd@gmail.com';

function Footer() {
  return (
    <footer className="footer section">

      {/* STREET CAUSE BRANDING */}
      <div className="footer-brand">
        <img
          src="/streetcause-logo.jpeg"
          alt="Street Cause VNRVJIET"
          className="streetcause-logo"
        />

        <div className="footer-brand-name">
          <span>STREET CAUSE</span>
          <strong>VNRVJIET</strong>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="footer-links">

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>

          <a href="#journey">
            The Night
          </a>

          <a href="#energy">
            The Energy
          </a>

          <a href="#gallery">
            Gallery
          </a>

          <a href="#impact">
            Impact
          </a>

          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noreferrer"
          >
            Get Pass
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* INSTAGRAM */}
        <div className="footer-column">
          <h3>CONNECT WITH US</h3>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="instagram-link"
          >
            <span className="ig-icon">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </span>

            <span>
              {INSTAGRAM_HANDLE}
            </span>
          </a>

          <p className="footer-note">
            Follow us for event updates,
            announcements and more.
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h3>CONTACT</h3>

          <div className="contact-person">
            <div className="contact-person-info">
              <strong>Nikitha Cherukuri</strong>
              <span> (Human Resources &amp; Treasurer)</span>
            </div>

            <a href="tel:+917901427617">
              <Phone size={18} />
              <span>{PHONE_1}</span>
            </a>
          </div>

          <div className="contact-person">
            <div className="contact-person-info">
              <strong>Dhanasvi</strong>
              <span> (Alumni Relations Head)</span>
            </div>

            <a href="tel:+919866543210">
              <Phone size={18} />
              <span>{PHONE_2}</span>
            </a>
          </div>
          <a href={`mailto:${EMAIL}`} className="footer-email">
            <Mail size={18} />
            <span>{EMAIL}</span>
          </a>
        </div>

      </div>

      {/* FINAL STATEMENT */}
      <div className="footer-closing">
        <p>SEE YOU ON THE</p>

        <h2>
          DANCE FLOOR<span>.</span>
        </h2>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>
          © 2026 Street Cause VNRVJIET
        </span>

        <a
          href={PAYMENT_URL}
          target="_blank"
          rel="noreferrer"
          className="footer-pass"
        >
          GET YOUR PASS
          <ArrowUpRight size={18} />
        </a>

        <span>
          Made to move.
        </span>
      </div>

    </footer>
  );
}

export default Footer;