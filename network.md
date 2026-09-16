---
layout: page
title: Our Network
permalink: /network/
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&display=swap');

  .network-page {
    font-family: 'DM Sans', sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 0 4rem;
  }

  .network-intro {
    margin-bottom: 3rem;
  }

  .network-intro h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 2.2rem;
    color: #111;
    margin: 0 0 0.75rem;
    line-height: 1.2;
  }

  .network-intro h2 em {
    font-style: italic;
    color: #1a73e8;
  }

  .network-intro p {
    font-size: 1rem;
    color: #555;
    line-height: 1.7;
    max-width: 560px;
    margin: 0;
  }

  .network-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  .network-card {
    position: relative;
    border-radius: 12px;
    padding: 2rem 1.75rem;
    text-decoration: none;
    display: block;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    border: 1px solid transparent;
  }

  .network-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.12);
    text-decoration: none;
  }

  /* ParallTec — core, featured card spans full width */
  .network-card.card-core {
    grid-column: 1 / -1;
    background: #0a0f1e;
    border-color: #1a73e8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .network-card.card-creative {
    background: #fafaf7;
    border-color: #e0ddd5;
  }

  .network-card.card-living {
    background: #f0f7f2;
    border-color: #c3dfc9;
  }

  .network-card.card-ubipanas {
    grid-column: 1 / -1;
    background: linear-gradient(135deg, #fff8f0 0%, #fff3e8 100%);
    border-color: #f5c894;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  /* Card accent bar */
  .network-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 4px;
    height: 100%;
    border-radius: 12px 0 0 12px;
  }

  .card-core::before    { background: #1a73e8; }
  .card-creative::before { background: #6b5ce7; }
  .card-living::before  { background: #2d9e5f; }
  .card-ubipanas::before { background: #e87c1a; }

  .card-body { flex: 1; }

  .card-tag {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
  }

  .card-core .card-tag    { background: rgba(26,115,232,0.15); color: #6ba8f7; }
  .card-creative .card-tag { background: rgba(107,92,231,0.1); color: #6b5ce7; }
  .card-living .card-tag  { background: rgba(45,158,95,0.12); color: #2d9e5f; }
  .card-ubipanas .card-tag { background: rgba(232,124,26,0.12); color: #c45e00; }

  .card-title {
    font-family: 'DM Serif Display', serif;
    font-size: 1.5rem;
    margin: 0 0 0.5rem;
    line-height: 1.2;
  }

  .card-core .card-title    { color: #fff; }
  .card-creative .card-title { color: #1a1a2e; }
  .card-living .card-title  { color: #1a2e1e; }
  .card-ubipanas .card-title { color: #2e1a00; }

  .card-desc {
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0 0 1.25rem;
  }

  .card-core .card-desc    { color: #8ca0c4; }
  .card-creative .card-desc { color: #666; }
  .card-living .card-desc  { color: #3d5c45; }
  .card-ubipanas .card-desc { color: #7a4a10; }

  .card-url {
    font-family: 'DM Mono', monospace;
    font-size: 0.78rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  .card-url::after {
    content: '→';
    font-family: sans-serif;
    transition: transform 0.2s;
  }

  .network-card:hover .card-url::after {
    transform: translateX(4px);
  }

  .card-core .card-url    { color: #1a73e8; }
  .card-creative .card-url { color: #6b5ce7; }
  .card-living .card-url  { color: #2d9e5f; }
  .card-ubipanas .card-url { color: #e87c1a; }

  /* Icon badge on wide cards */
  .card-icon {
    font-size: 3.5rem;
    opacity: 0.18;
    flex-shrink: 0;
    line-height: 1;
    user-select: none;
  }

  .card-core .card-icon    { opacity: 0.22; }
  .card-ubipanas .card-icon { opacity: 0.25; }

  /* Topics chips */
  .card-topics {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.75rem;
  }

  .card-topic {
    font-size: 0.72rem;
    padding: 0.2rem 0.55rem;
    border-radius: 20px;
    font-weight: 500;
  }

  .card-core .card-topic    { background: rgba(255,255,255,0.08); color: #8ca0c4; }
  .card-creative .card-topic { background: rgba(107,92,231,0.08); color: #6b5ce7; }
  .card-living .card-topic  { background: rgba(45,158,95,0.1); color: #2d7a4f; }
  .card-ubipanas .card-topic { background: rgba(232,124,26,0.1); color: #b85a00; }

  @media (max-width: 600px) {
    .network-grid { grid-template-columns: 1fr; }
    .network-card.card-core,
    .network-card.card-ubipanas { flex-direction: column; gap: 1rem; }
    .card-icon { font-size: 2.5rem; opacity: 0.15; }
    .network-intro h2 { font-size: 1.6rem; }
  }
</style>

<div class="network-page">

  <div class="network-intro">
    <h2>One Network.<br><em>Many Voices.</em></h2>
    <p>ParallTec is more than a blog — it's a growing network of sites built around curiosity, craft, and community. Each property has its own focus, its own voice, and its own audience.</p>
  </div>

  <div class="network-grid">

    <!-- ParallTec Core -->
    <a href="https://paralltec.com" class="network-card card-core" target="_blank" rel="noopener">
      <div class="card-body">
        <span class="card-tag">Core · IT & Homelab</span>
        <h3 class="card-title">ParallTec</h3>
        <p class="card-desc">The mothership. Deep dives into homelabbing, self-hosting, networking, and the real-world grind of breaking into IT. Built by someone learning in public.</p>
        <div class="card-topics">
          <span class="card-topic">Homelab</span>
          <span class="card-topic">Self-Hosting</span>
          <span class="card-topic">Networking</span>
          <span class="card-topic">Linux</span>
          <span class="card-topic">Career in IT</span>
        </div>
        <div style="margin-top:1.25rem">
          <span class="card-url">paralltec.com</span>
        </div>
      </div>
      <div class="card-icon">⚙️</div>
    </a>

    <!-- Creative -->
    <a href="https://creative.thelastoak.com" class="network-card card-creative" target="_blank" rel="noopener">
      <div class="card-body">
        <span class="card-tag">Writing Portfolio</span>
        <h3 class="card-title">Creative Oak</h3>
        <p class="card-desc">Essays, long-form writing, and the craft behind the words. A space for storytelling beyond the technical.</p>
        <div class="card-topics">
          <span class="card-topic">Essays</span>
          <span class="card-topic">Long-form</span>
          <span class="card-topic">Portfolio</span>
        </div>
        <div style="margin-top:1.25rem">
          <span class="card-url">creative.thelastoak.com</span>
        </div>
      </div>
    </a>

    <!-- Living -->
    <a href="https://thelastoak.com" class="network-card card-living" target="_blank" rel="noopener">
      <div class="card-body">
        <span class="card-tag">Lifestyle & Home</span>
        <h3 class="card-title">The Last Oak</h3>
        <p class="card-desc">Slow living, home decor, and the quotes that keep you grounded. Life beyond the terminal.</p>
        <div class="card-topics">
          <span class="card-topic">Lifestyle</span>
          <span class="card-topic">Home Decor</span>
          <span class="card-topic">Quotes</span>
        </div>
        <div style="margin-top:1.25rem">
          <span class="card-url">thelastoak.com</span>
        </div>
      </div>
    </a>

    <!-- Ubipanas -->
    <a href="https://ubipanas.com" class="network-card card-ubipanas" target="_blank" rel="noopener">
      <div class="card-body">
        <span class="card-tag">Regional · Bahasa Melayu</span>
        <h3 class="card-title">Ubipanas</h3>
        <p class="card-desc">Blog hiburan dan gaya hidup dalam Bahasa Melayu. Dari cerita jenama tempatan hingga fakta menarik — untuk pembaca Malaysia.</p>
        <div class="card-topics">
          <span class="card-topic">Hiburan</span>
          <span class="card-topic">Gaya Hidup</span>
          <span class="card-topic">Fakta Menarik</span>
          <span class="card-topic">Malaysia</span>
        </div>
        <div style="margin-top:1.25rem">
          <span class="card-url">ubipanas.com</span>
        </div>
      </div>
      <div class="card-icon">🌶️</div>
    </a>

  </div>
</div>
