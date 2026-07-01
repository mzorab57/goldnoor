import { Link } from 'react-router-dom'

function InnerPageHero({
  kicker,
  title,
  accent,
  description,
  metrics = [],
  primaryAction,
  secondaryAction,
}) {
  return (
    <section className="inner-page-hero">
      <div className="site-shell inner-page-shell">
        <div className="inner-page-copy">
          <span className="section-kicker">{kicker}</span>
          <h1 className="inner-page-title">
            {title}
            {accent ? <span>{accent}</span> : null}
          </h1>
          <p className="inner-page-lead">{description}</p>

          <div className="inner-page-actions">
            {primaryAction ? (
              <Link className="primary-button" to={primaryAction.to}>
                {primaryAction.label}
              </Link>
            ) : null}

            {secondaryAction ? (
              <Link className="secondary-button" to={secondaryAction.to}>
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="inner-page-metrics">
          {metrics.map((metric) => (
            <article key={metric.label} className="inner-page-metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InnerPageHero
