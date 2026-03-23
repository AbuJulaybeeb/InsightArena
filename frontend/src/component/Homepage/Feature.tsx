import {
  TrendingUp,
  Wallet,
  Lock,
  Scale,
  BarChart2,
  Trophy,
} from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Create Custom Markets',
    body: 'Propose new prediction markets on any public event, sports, or crypto price.',
  },
  {
    icon: Wallet,
    title: 'Predict on Anything',
    body: 'Put your XLM where your mouth is. Take positions on your strongest convictions.',
  },
  {
    icon: Trophy,
    title: 'Automated Resolution',
    body: 'Trusted oracles resolve markets automatically when the event concludes.',
  },
  {
    icon: Lock,
    title: 'Non-Custodial Escrow',
    body: 'InsightArena never holds your funds. Smart contracts lock stakes until resolution.',
  },
  {
    icon: Scale,
    title: 'Fair Outcomes',
    body: 'The protocol uses robust dispute resolution mechanisms to guarantee fairness.',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Insights',
    body: 'Analyze historical data, market trends, and top player strategies to improve.',
  },
];

export default function FeatureGrid() {
  return (
    <section
      className="w-full py-20 px-6"
      style={{ background: '#0d1229' }}
      aria-labelledby="feature-grid-title"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h2
          id="feature-grid-title"
          className="text-white font-bold text-center mb-12"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.1rem)' }}
        >
          Everything You Need to Compete On-Chain
        </h2>

        {/* 3×2 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          }}
          role="list"
        >
          {features.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              role="listitem"
              style={{
                background: '#121633',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {/* Icon box */}
              <div
                aria-hidden="true"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '8px',
                  background: '#1a2b5a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Icon size={18} color="#3b82f6" strokeWidth={1.8} />
              </div>

              {/* Text */}
              <h3
                className="text-white font-bold"
                style={{ fontSize: '0.95rem', lineHeight: 1.3 }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: '#8b95a8',
                  fontSize: '0.83rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Responsive: stack to 1 col on mobile, 2 col on tablet */}
      <style>{`
        @media (max-width: 768px) {
          #feature-grid-title + div {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          #feature-grid-title + div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}