import styles from "./FunMarquee.module.css";

const items = ["Clear Strategy", "Meta Ads", "Useful Content", "Smart Websites", "AI Automation", "Better Follow-Up"];

export function FunMarquee() {
  return <div className={styles.wrap} aria-label="Digital marketing capabilities">
    <div className={styles.track}>
      {[0, 1].map((copy) => <div className={styles.group} aria-hidden={copy === 1} key={copy}>
        {items.map((item) => <span key={`${copy}-${item}`}>{item}<b>✦</b></span>)}
      </div>)}
    </div>
  </div>;
}
