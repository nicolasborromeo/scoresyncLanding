import { useEffect } from 'react'

const SCORESYNC_WAITLIST_URL = import.meta.env.VITE_SCORESYNC_WAITLIST_URL as string | undefined

const valuePoints = [
  {
    title: 'Audio-first by design',
    body: 'Give people one polished link where your music can actually be heard quickly.'
  },
  {
    title: 'Tailored pitch cards',
    body: 'Build different cards for different styles, genres, buyers, and opportunities.'
  },
  {
    title: 'No subscription tax',
    body: 'Create for free, then pay once only when you are ready to publish.'
  }
]

const workflowSteps = [
  'Upload tracks and build a focused playlist',
  'Customize the card to fit the tone of the pitch',
  'Preview it, publish it, and send one clean link'
]

const fitList = [
  'composers pitching for film, TV, games, trailers, or ads',
  'producers sharing selected work',
  'session musicians presenting themselves professionally',
  'artists who want a cleaner music-first portfolio'
]

const pricingList = [
  'Create drafts for free',
  '$19 for one live pitch card',
  '$39 for a 3-card pack',
  'Optional setup help if you want a faster path'
]

const researchQuestions = [
  'How do you currently present your work?',
  'What feels messy or weak about that setup?',
  'Would one polished audio-first card actually help?',
  'Does free-to-create / pay-once-to-publish feel fair?'
]

function openWaitlist() {
  if (SCORESYNC_WAITLIST_URL) {
    window.open(SCORESYNC_WAITLIST_URL, '_blank', 'noopener,noreferrer')
  } else {
    const betaSection = document.getElementById('beta')
    betaSection?.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function App() {
  useEffect(() => {
    document.title = 'ScoreSync — Audio-first pitch cards for composers and musicians'
  }, [])

  return (
    <div className="scoresync-page">
      <header className="ss-nav">
        <div className="ss-nav-inner">
          <a href="#top" className="ss-brand">
            <span className="ss-brand-mark">SS</span>
            <span className="ss-brand-text">
              <strong>ScoreSync</strong>
              <span>Audio-first pitch cards for musicians</span>
            </span>
          </a>

          <nav className="ss-nav-links">
            <a href="#product">Product</a>
            <a href="#workflow">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#beta">Beta</a>
          </nav>

          <button type="button" className="ss-btn ss-btn-primary ss-nav-cta" onClick={openWaitlist}>
            Join the beta
          </button>
        </div>
      </header>

      <main id="top">
        <section className="ss-hero">
          <div className="ss-hero-inner">
            <div className="ss-hero-copy">
              <span className="ss-eyebrow">For composers, musicians, and audio professionals</span>
              <h1>Your music deserves a better first impression.</h1>
              <p className="ss-hero-subcopy">
                ScoreSync helps composers and musicians create polished, playable pitch cards they can actually afford to use —
                free to create, pay once when they are ready to publish.
              </p>

              <div className="ss-hero-ctas">
                <button type="button" className="ss-btn ss-btn-primary" onClick={openWaitlist}>
                  Take the beta questionnaire
                </button>
                <a href="#workflow" className="ss-btn ss-btn-secondary">See how it works</a>
              </div>

              <div className="ss-proof-pills">
                <span>One clean link</span>
                <span>Playable tracks</span>
                <span>Tailored pitch cards</span>
                <span>No monthly subscription</span>
              </div>

              <div className="ss-value-grid">
                {valuePoints.map((item) => (
                  <article key={item.title} className="ss-value-card">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="ss-hero-visuals">
              <div className="ss-hero-showcase">
                <div className="ss-card-stack">
                  <img className="ss-stack-card ss-stack-back" src="/landing/bf-card.jpg" alt="ScoreSync card example" />
                  <img className="ss-stack-card ss-stack-front" src="/landing/ae-card.jpg" alt="A&E themed ScoreSync card" />
                  <img className="ss-stack-card ss-stack-accent" src="/landing/published-card.jpg" alt="Published ScoreSync card" />
                </div>
              </div>

              <div className="ss-market-card">
                <span className="ss-market-kicker">Founding-user research</span>
                <h2>We are validating the business model, not just collecting emails.</h2>
                <p>
                  This landing page is meant to qualify real interest and test whether the pay-once publishing model fits how musicians actually pitch their work.
                </p>
                <button type="button" className="ss-btn ss-btn-primary ss-btn-full" onClick={openWaitlist}>
                  Open the Tally questionnaire
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="ss-band">
          <div className="ss-band-inner">
            <span>TAILORED PITCH CARDS</span>
            <span>•</span>
            <span>PLAYABLE TRACKS</span>
            <span>•</span>
            <span>FOUNDING USER BETA</span>
            <span>•</span>
            <span>DIY PRICING MODEL</span>
          </div>
        </section>

        <section id="product" className="ss-section">
          <div className="ss-container">
            <div className="ss-section-header ss-section-header-wide">
              <span>The problem</span>
              <h2>Stop sending a PDF, a Dropbox link, a bio, and a prayer.</h2>
              <p>
                Most musicians still present themselves like it is 2012. A PDF here. A Dropbox link there.
                A website nobody updates. A reel hidden behind three clicks. It works — badly.
              </p>
            </div>

            <div className="ss-story-grid">
              <article className="ss-story-card ss-story-copy">
                <h3>Designed for the moment you need to get hired</h3>
                <ul>
                  {workflowSteps.map((step) => <li key={step}>{step}</li>)}
                </ul>
              </article>

              <article className="ss-story-card ss-story-image">
                <img src="/landing/catalog-waveform.jpg" alt="ScoreSync catalog showing playable waveform track" />
              </article>
            </div>
          </div>
        </section>

        <section id="workflow" className="ss-section ss-section-alt">
          <div className="ss-container">
            <div className="ss-section-header">
              <span>How it works</span>
              <h2>Show the product truth early: it looks good, and it is easy to shape.</h2>
              <p>
                The strongest proof is real product behavior. That is why the landing page leads with the actual editor,
                the waveform player, and the final card output instead of vague promises.
              </p>
            </div>

            <div className="ss-workflow-grid">
              <article className="ss-motion-card">
                <video autoPlay muted loop playsInline controls poster="/landing/color-tool.jpg">
                  <source src="/landing/drag-drop-demo.mp4" type="video/mp4" />
                </video>
              </article>

              <div className="ss-support-stack">
                <article className="ss-support-card">
                  <img src="/landing/color-tool.jpg" alt="ScoreSync customization interface" />
                  <div>
                    <h3>Style the card to match the pitch</h3>
                    <p>Adjust colors, imagery, and tone so the card fits the music and the opportunity.</p>
                  </div>
                </article>

                <article className="ss-support-card">
                  <img src="/landing/published-card.jpg" alt="Published ScoreSync card" />
                  <div>
                    <h3>Publish one polished link</h3>
                    <p>ScoreSync is not trying to replace your whole online presence — just the messy part that matters in the pitch moment.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="ss-section">
          <div className="ss-container">
            <div className="ss-section-header">
              <span>Who it is for</span>
              <h2>Best for music professionals who need to get hired.</h2>
            </div>

            <div className="ss-grid ss-grid-2">
              <article className="ss-panel">
                <h3>Strongest early fit</h3>
                <ul>
                  {fitList.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>

              <article className="ss-panel">
                <h3>What ScoreSync should feel like</h3>
                <ul>
                  <li>fast to understand</li>
                  <li>professional enough to send confidently</li>
                  <li>more focused than a generic portfolio builder</li>
                  <li>cleaner than stitching together scattered assets</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="ss-section ss-section-alt">
          <div className="ss-container ss-pricing-wrap">
            <div className="ss-section-header">
              <span>Pricing model</span>
              <h2>Built for talented musicians, not enterprise budgets.</h2>
              <p>
                The pricing direction matters because the target audience does not need another recurring tool bill.
                We are testing a model that feels lighter, fairer, and closer to how pitching actually happens.
              </p>
            </div>

            <div className="ss-grid ss-grid-2">
              <article className="ss-panel ss-panel-featured">
                <h3>Create for free. Pay once when you are ready to publish.</h3>
                <ul>
                  {pricingList.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>

              <article className="ss-panel">
                <h3>Why this model is worth validating</h3>
                <ul>
                  <li>lower friction than subscription-first</li>
                  <li>better fit for occasional pitching behavior</li>
                  <li>supports multiple cards for different contexts</li>
                  <li>lets users feel value before they pay</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="beta" className="ss-section">
          <div className="ss-container ss-beta-wrap">
            <div className="ss-section-header ss-section-header-wide">
              <span>Founding-user beta</span>
              <h2>Take the short questionnaire and help us test whether this is a real business.</h2>
              <p>
                We are looking for signal, not vanity metrics. The questionnaire is meant to tell us whether the pain is real,
                whether multiple tailored cards matter, and whether the pricing model feels credible.
              </p>
            </div>

            <div className="ss-beta-grid">
              <article className="ss-beta-card">
                <h3>What the questionnaire asks</h3>
                <ul>
                  {researchQuestions.map((question) => <li key={question}>{question}</li>)}
                </ul>
              </article>

              <article className="ss-beta-card ss-beta-card-accent">
                <h3>Ready to weigh in?</h3>
                <p>
                  If ScoreSync looks relevant to how you pitch your work, open the Tally questionnaire and tell us where the current workflow still breaks down.
                </p>
                <button type="button" className="ss-btn ss-btn-primary ss-btn-full" onClick={openWaitlist}>
                  {SCORESYNC_WAITLIST_URL ? 'Open the questionnaire' : 'Set questionnaire URL first'}
                </button>
                {!SCORESYNC_WAITLIST_URL && <p className="ss-config-note">Set <code>VITE_SCORESYNC_WAITLIST_URL</code> before going live.</p>}
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
