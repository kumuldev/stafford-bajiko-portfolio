const work = [
  {
    number: "01",
    title: "Assessment that creates clarity",
    label: "School systems",
    description:
      "Designing assessment, reporting, and quality-assurance structures that make information useful for teachers, learners, and school leaders.",
    detail: "From data entry to meaningful feedback",
  },
  {
    number: "02",
    title: "Mathematics as a language of thought",
    label: "Learning design",
    description:
      "Teaching mathematics as structure, relationship, and reasoning—so learners can move beyond procedures into understanding.",
    detail: "General Mathematics · Mathematical communication",
  },
  {
    number: "03",
    title: "Technology that serves schools",
    label: "Digital systems",
    description:
      "Developing practical ideas for school software, reporting automation, and digital workflows that reduce friction and strengthen accountability.",
    detail: "School operations · Reporting automation · Platform concepts",
  },
];

const principles = [
  ["Observe", "Start with the real conditions, people, and patterns—not assumptions."],
  ["Map", "Make the relationships visible: information, decisions, roles, and gaps."],
  ["Design", "Build structures that are simple enough to use and strong enough to last."],
  ["Evolve", "Test, learn, and improve without losing sight of the human purpose."],
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Stafford Bajiko home">
          <span className="brand-mark" aria-hidden="true">
            SB
          </span>
          <span className="brand-name">Stafford Bajiko</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#method">Method</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#connect">
            Connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <div id="top" className="hero-wrap">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Education · Mathematics · Systems</p>
            <h1 id="hero-title">
              Build the structures that let learning <em>move.</em>
            </h1>
            <p className="hero-intro">
              I work with schools and education leaders to turn complex
              problems—assessment, communication, and systems—into practical
              structures that help people see clearly and act well.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#about">
                The person behind the work <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" aria-hidden="true" />
            <div className="portrait-card">
              <img
                className="portrait-image"
                src="/images/stafford-bajiko-portrait.png"
                alt="Stafford Bajiko Koki"
              />
              <div className="portrait-caption">
                <span>Educator · Systems thinker</span>
                <span>Stafford Bajiko</span>
              </div>
            </div>
            <div className="visual-note note-top">Structure is care.</div>
            <div className="visual-note note-bottom">
              Kimbe · Papua New Guinea
            </div>
            <div className="visual-axis axis-one" aria-hidden="true" />
            <div className="visual-axis axis-two" aria-hidden="true" />
          </div>
        </section>

        <section className="signal-bar" aria-label="Portfolio themes">
          <p>
            <span>01</span> Education first
          </p>
          <p>
            <span>02</span> Mathematical clarity
          </p>
          <p>
            <span>03</span> Systems that last
          </p>
        </section>
      </div>

      <div id="main-content">
        <section
          className="manifesto section-shell"
          aria-labelledby="manifesto-title"
        >
          <p className="section-index">A considered practice</p>
          <div>
            <h2 id="manifesto-title">
              Education is not only a service. It is a society&apos;s{" "}
              <em>cognitive infrastructure.</em>
            </h2>
            <p>
              When its systems are clear, people can give their energy to
              learning, teaching, and growth—not to navigating disorder. My
              work sits where rigorous thinking meets the daily reality of a
              school.
            </p>
          </div>
        </section>

        <section
          id="work"
          className="work-section section-shell"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-index">Selected work</p>
              <h2 id="work-title">Work with a practical purpose.</h2>
            </div>
            <p>
              A portfolio of ongoing educational practice, system design, and
              ideas being shaped for stronger schools.
            </p>
          </div>

          <div className="work-grid">
            {work.map((item) => (
              <article className="work-card" key={item.number}>
                <div className="card-topline">
                  <span>{item.number}</span>
                  <span>{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-detail">
                  <span aria-hidden="true">↗</span>
                  {item.detail}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="method"
          className="method-section"
          aria-labelledby="method-title"
        >
          <div className="section-shell method-inner">
            <div className="method-intro">
              <p className="section-index">How I work</p>
              <h2 id="method-title">
                Complexity becomes useful when we can <em>see its shape.</em>
              </h2>
              <p>
                Whether I am designing a lesson, a reporting workflow, or a
                broader school process, I work from first principles and stay
                close to the people who will live with the result.
              </p>
            </div>
            <ol className="principles-list">
              {principles.map(([title, description], index) => (
                <li key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="about"
          className="about-section section-shell"
          aria-labelledby="about-title"
        >
          <div className="about-identity">
            <p className="section-index">About Stafford</p>
            <h2 id="about-title">
              Teacher. Mathematical thinker. Builder of better conditions.
            </h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I am Stafford Bajiko Koki, a Papua New Guinean educator and a
              Mathematics &amp; Computing Science graduate. I care about the
              systems beneath education: the structures that shape how people
              learn, communicate, decide, and grow.
            </p>
            <p>
              My practice brings together classroom teaching, assessment
              design, school operations, technology concepts, and public
              communication. I am most interested in work that helps schools
              become more coherent, more humane, and more capable of carrying
              their learners forward.
            </p>
            <div className="focus-list" aria-label="Focus areas">
              <span>Educational leadership</span>
              <span>Mathematical communication</span>
              <span>Assessment systems</span>
              <span>Digital transformation</span>
            </div>
          </div>
        </section>

        <section
          className="quote-section section-shell"
          aria-label="Personal statement"
        >
          <p className="quote-mark" aria-hidden="true">
            “
          </p>
          <blockquote>
            The task is not merely to make a system work. It is to build a
            structure in which people can become more capable.
          </blockquote>
          <p className="quote-attribution">— Stafford Bajiko</p>
        </section>

        <section
          id="connect"
          className="connect-section"
          aria-labelledby="connect-title"
        >
          <div className="section-shell connect-inner">
            <p className="section-index">Let&apos;s connect</p>
            <h2 id="connect-title">
              Building stronger learning systems starts with a real
              conversation.
            </h2>
            <p>
              I welcome conversations with education leaders, schools, and
              mission-aligned partners who are working toward clearer, more
              capable institutions.
            </p>
            <a className="button button-light" href="#top">
              Start at the beginning <span aria-hidden="true">↑</span>
            </a>
            <p className="contact-note">
              Direct contact details will be added with the final profile
              information.
            </p>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <p>© 2026 Stafford Bajiko Koki</p>
        <p>Built for the work ahead.</p>
      </footer>
    </main>
  );
}
