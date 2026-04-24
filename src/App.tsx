import { type FormEvent, useEffect } from 'react'

const SCORESYNC_WAITLIST_URL = import.meta.env.VITE_SCORESYNC_WAITLIST_URL as string | undefined

export default function App() {
  useEffect(() => {
    document.title = 'ScoreSync — Create your card for free. Pay once to publish.'
  }, [])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (SCORESYNC_WAITLIST_URL) {
      window.open(SCORESYNC_WAITLIST_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="scoresync-page">
      <header className="ss-nav">
        <div className="ss-nav-inner">
          <a href="#" className="ss-brand">
            <span className="ss-brand-mark">SS</span>
            <span className="ss-brand-text">
              <strong>ScoreSync</strong>
              <span>Audio-first pitch cards for musicians</span>
            </span>
          </a>
          <nav className="ss-nav-links">
            <a href="#features">Features</a>
            <a href="#who">Who it’s for</a>
            <a href="#beta">Beta</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="ss-hero">
          <div className="ss-hero-inner">
            <div className="ss-eyebrow">FOR COMPOSERS, MUSICIANS, AND AUDIO PROFESSIONALS</div>
            <h1>Create your card for free. Pay once when you’re ready to publish.</h1>
            <p>
              ScoreSync helps composers and musicians build polished, playable pitch cards without another monthly subscription — a clean DIY tool for different opportunities, styles, and buyers.
            </p>
            <div className="ss-hero-ctas">
              <a
                href={SCORESYNC_WAITLIST_URL || '#beta'}
                target={SCORESYNC_WAITLIST_URL ? '_blank' : undefined}
                rel={SCORESYNC_WAITLIST_URL ? 'noopener noreferrer' : undefined}
                className="ss-btn ss-btn-primary"
              >
                Create for free, pay once to publish
              </a>
              <a href="#features" className="ss-btn ss-btn-secondary">See how it works</a>
            </div>
          </div>
        </section>

        <section className="ss-band">
          <div className="ss-band-inner">
            <span>TAILORED PITCH CARDS</span>
            <span>•</span>
            <span>PLAYABLE TRACKS</span>
            <span>•</span>
            <span>NO SUBSCRIPTION TAX</span>
            <span>•</span>
            <span>FOUNDING USER BETA</span>
          </div>
        </section>

        <section id="features" className="ss-section">
          <div className="ss-container">
            <div className="ss-section-header">
              <span>THE PROBLEM</span>
              <h2>Most musicians still present themselves like it’s 2012.</h2>
              <p>
                A PDF here. A Dropbox link there. A website nobody updates. A reel hidden behind three clicks.
                It works — badly.
              </p>
            </div>

            <div className="ss-grid ss-grid-3">
              <div className="ss-card">
                <h3>Tailored pitch cards</h3>
                <p>Create the right presentation for the right opportunity — different genres, styles, and buyers.</p>
              </div>
              <div className="ss-card">
                <h3>Audio-first by design</h3>
                <p>Your work should be heard quickly, not buried behind generic portfolio templates.</p>
              </div>
              <div className="ss-card">
                <h3>Accessible pricing</h3>
                <p>Free to create. Pay once when you’re ready to publish. Better fit for real musicians than another monthly bill.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="who" className="ss-section ss-section-alt">
          <div className="ss-container">
            <div className="ss-section-header">
              <span>WHO IT’S FOR</span>
              <h2>Best for music professionals who need to get hired.</h2>
            </div>

            <div className="ss-grid ss-grid-2">
              <div className="ss-panel">
                <h3>Strong first niche</h3>
                <ul>
                  <li>composers pitching for film, TV, games, trailers, or ads</li>
                  <li>producers sharing selected work</li>
                  <li>session musicians presenting themselves professionally</li>
                  <li>artists who want a cleaner music-first portfolio</li>
                </ul>
              </div>
              <div className="ss-panel">
                <h3>What ScoreSync should feel like</h3>
                <ul>
                  <li>fast to understand</li>
                  <li>professional enough to send confidently</li>
                  <li>built for the moment you need to pitch</li>
                  <li>simpler than stitching together scattered assets</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="beta" className="ss-section">
          <div className="ss-container ss-beta-wrap">
            <div className="ss-section-header">
              <span>FOUNDING USER BETA</span>
              <h2>Join the early beta.</h2>
              <p>
                We’re keeping the first batch small on purpose so we can learn from real users, sharpen the DIY offer, and figure out what a fair one-time publish fee should actually include.
              </p>
            </div>

            <form className="ss-form" onSubmit={handleSubmit}>
              {!SCORESYNC_WAITLIST_URL && <p className="form-note">Form URL not configured yet. Set <code>VITE_SCORESYNC_WAITLIST_URL</code> before going live.</p>}

              <div className="form-grid">
                <label className="field">
                  <span>Name</span>
                  <input type="text" placeholder="Your name" />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input type="email" placeholder="you@example.com" />
                </label>
              </div>

              <label className="field">
                <span>What best describes you?</span>
                <select defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Composer</option>
                  <option>Producer</option>
                  <option>Session musician</option>
                  <option>Artist</option>
                  <option>Music student</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="field">
                <span>What is most annoying about your current setup?</span>
                <textarea rows={3} placeholder="Tell us where your current presentation feels messy or weak" />
              </label>

              <div className="form-grid">
                <label className="field">
                  <span>Would one polished audio-first pitch card be useful to you?</span>
                  <select defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Yes</option>
                    <option>Maybe</option>
                    <option>No</option>
                  </select>
                </label>
                <label className="field">
                  <span>Would you want separate cards for different styles, genres, or opportunities?</span>
                  <select defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Yes, definitely</option>
                    <option>Probably</option>
                    <option>Maybe occasionally</option>
                    <option>No, one card is enough</option>
                  </select>
                </label>
              </div>

              <label className="field">
                <span>Which pricing model feels best?</span>
                <select defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Free to create, $19 for one live pitch card</option>
                  <option>Free to create, $29 for one live pitch card with a short edit window after publishing</option>
                  <option>$39 for a 3-card pack</option>
                  <option>Monthly subscription</option>
                  <option>I’d need to see the product first</option>
                </select>
              </label>

              <label className="field">
                <span>What feels fairest for a one-time publish fee?</span>
                <select defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>One live pitch card with no edits after publishing</option>
                  <option>One live pitch card with a short edit window after publishing</option>
                  <option>A small pack of pitch cards for different opportunities</option>
                  <option>I’m not sure yet</option>
                </select>
              </label>

              <button className="ss-btn ss-btn-primary ss-btn-full" type="submit">{SCORESYNC_WAITLIST_URL ? 'Open beta form' : 'Join the beta'}</button>
              <p className="guarantee">Wire this to Tally before sharing publicly.</p>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
