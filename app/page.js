import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Accelio Lab</div>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#expertise">Expertise</a>
            <a href="#contact" className={styles.ctaButton}>Get Started</a>
          </div>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Enterprise AI Infrastructure
            <span className={styles.gradient}> Built for Scale</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We architect and implement cutting-edge AI infrastructures that power innovation for medium to large enterprises
          </p>
          <div className={styles.heroCta}>
            <a href="#contact" className={styles.primaryButton}>Schedule Consultation</a>
            <a href="#expertise" className={styles.secondaryButton}>Our Expertise</a>
          </div>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Enterprise Clients</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>Uptime SLA</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>10x</div>
            <div className={styles.statLabel}>Avg. Performance Gain</div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🏗️</div>
            <h3>Infrastructure Design</h3>
            <p>Custom AI infrastructure architecture tailored to your business needs, scalability requirements, and compliance standards</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🚀</div>
            <h3>Model Deployment</h3>
            <p>Enterprise-grade deployment pipelines for ML models with monitoring, versioning, and automated rollback capabilities</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>⚡</div>
            <h3>Performance Optimization</h3>
            <p>Fine-tuning and optimization of existing AI systems to maximize throughput, reduce latency, and minimize costs</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🔒</div>
            <h3>Security & Compliance</h3>
            <p>Implement robust security measures and ensure compliance with industry standards including SOC 2, GDPR, and HIPAA</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>📊</div>
            <h3>Data Pipeline Engineering</h3>
            <p>Build scalable data pipelines that power your AI models with clean, reliable, and real-time data streams</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🛠️</div>
            <h3>MLOps Implementation</h3>
            <p>End-to-end MLOps solutions including CI/CD, experiment tracking, model registry, and production monitoring</p>
          </div>
        </div>
      </section>

      <section id="expertise" className={styles.expertise}>
        <h2 className={styles.sectionTitle}>Technology Expertise</h2>
        <div className={styles.techGrid}>
          <div className={styles.techCategory}>
            <h3>Cloud Platforms</h3>
            <div className={styles.techTags}>
              <span>AWS</span>
              <span>Google Cloud</span>
              <span>Azure</span>
              <span>Kubernetes</span>
            </div>
          </div>
          <div className={styles.techCategory}>
            <h3>AI/ML Frameworks</h3>
            <div className={styles.techTags}>
              <span>TensorFlow</span>
              <span>PyTorch</span>
              <span>Hugging Face</span>
              <span>LangChain</span>
            </div>
          </div>
          <div className={styles.techCategory}>
            <h3>Infrastructure</h3>
            <div className={styles.techTags}>
              <span>Docker</span>
              <span>Terraform</span>
              <span>Ray</span>
              <span>CUDA</span>
            </div>
          </div>
          <div className={styles.techCategory}>
            <h3>Data Engineering</h3>
            <div className={styles.techTags}>
              <span>Apache Spark</span>
              <span>Airflow</span>
              <span>Kafka</span>
              <span>Snowflake</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <h2 className={styles.sectionTitle}>Our Approach</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <h3>Discovery & Assessment</h3>
            <p>We analyze your current infrastructure, business objectives, and technical requirements</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <h3>Architecture Design</h3>
            <p>Custom infrastructure blueprint with detailed technical specifications and cost projections</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <h3>Implementation</h3>
            <p>Agile development with continuous integration and regular stakeholder updates</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <h3>Optimization & Support</h3>
            <p>Ongoing monitoring, optimization, and dedicated support to ensure peak performance</p>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactContent}>
          <h2>Ready to Transform Your AI Infrastructure?</h2>
          <p>Let's discuss how Accelio Lab can accelerate your AI initiatives</p>
          <div className={styles.contactButtons}>
            <a href="mailto:contact@acceliolab.com" className={styles.primaryButton}>contact@acceliolab.com</a>
            <a href="tel:+1234567890" className={styles.secondaryButton}>Schedule a Call</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>Accelio Lab</div>
            <p>Enterprise AI Infrastructure Consulting</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>Services</h4>
              <a href="#services">Infrastructure Design</a>
              <a href="#services">Model Deployment</a>
              <a href="#services">MLOps</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <a href="#expertise">Expertise</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Accelio Lab. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
