import React from 'react';
import { RevealSection } from './RevealSection';

export const Navbar = () => (
  <nav>
    <span className="nav-logo">LLM Wiki · v1.0</span>
    <div className="nav-links">
      <a href="#how">How it works</a>
      <a href="#compare">vs RAG</a>
      <a href="#demo">Demo</a>
      <a href="#architecture">Architecture</a>
      <a href="#paper">The Pattern</a>
      <a href="#cases">Use cases</a>
    </div>
  </nav>
);

export const Band = () => (
  <RevealSection className="band">
    <div className="band-label">The core insight</div>
    <h2>RAG re-discovers knowledge on every query.<br />LLM Wiki <em>accumulates it</em> permanently.</h2>
  </RevealSection>
);

export const HowItWorks = () => (
  <section className="how" id="how">
    <RevealSection className="section-header">
      <span className="section-num">01</span>
      <h2 className="section-title">Three operations</h2>
    </RevealSection>
    <RevealSection className="steps">
      <div className="step">
        <span className="step-num">01 / Ingest</span>
        <div className="step-icon">📥</div>
        <h3>Add a source</h3>
        <p>Drop a document into your raw collection. The LLM reads it, extracts key information, and integrates it into the wiki — updating entity pages, flagging contradictions, strengthening the synthesis. One source may touch 10–15 wiki pages.</p>
      </div>
      <div className="step">
        <span className="step-num">02 / Query</span>
        <div className="step-icon">🔍</div>
        <h3>Ask anything</h3>
        <p>Questions are answered against the pre-built wiki, not raw documents. The synthesis is already there. Good answers get filed back as new pages — so your explorations compound just like ingested sources do.</p>
      </div>
      <div className="step">
        <span className="step-num">03 / Lint</span>
        <div className="step-icon">🔧</div>
        <h3>Keep it healthy</h3>
        <p>Periodically ask the LLM to health-check the wiki: find contradictions, stale claims, orphan pages, missing cross-references, and data gaps. The LLM suggests new questions to investigate and sources to look for.</p>
      </div>
    </RevealSection>
  </section>
);

export const Comparison = () => (
  <section className="compare" id="compare">
    <RevealSection className="section-header">
      <span className="section-num">02</span>
      <h2 className="section-title">LLM Wiki vs RAG</h2>
    </RevealSection>
    <RevealSection className="compare-grid">
      <div className="compare-col">
        <div className="compare-label">Standard RAG / NotebookLM</div>
        <div className="compare-heading">Retrieval every time</div>
        <ul className="compare-list">
          <li><span className="icon">↩️</span>Re-derives insights from scratch on every query</li>
          <li><span className="icon">🧩</span>Must piece together 5+ documents for synthesis questions</li>
          <li><span className="icon">📭</span>No accumulation — asks leave no trace</li>
          <li><span className="icon">🔗</span>Cross-references not pre-built — rediscovered ad hoc</li>
          <li><span className="icon">⚠️</span>Contradictions not flagged ahead of time</li>
          <li><span className="icon">📉</span>Value stays flat as sources grow</li>
        </ul>
      </div>
      <div className="compare-col alt">
        <div className="compare-label">LLM Wiki</div>
        <div className="compare-heading">Compounding knowledge</div>
        <ul className="compare-list">
          <li><span className="icon">✅</span>Synthesis compiled once and kept current</li>
          <li><span className="icon">✅</span>Cross-references already built when you ask</li>
          <li><span className="icon">✅</span>Questions file back as new wiki pages</li>
          <li><span className="icon">✅</span>Contradictions flagged on ingest, not at query time</li>
          <li><span className="icon">✅</span>Orphan pages and gaps found proactively</li>
          <li><span className="icon">✅</span>Value compounds — richer with every source added</li>
        </ul>
      </div>
    </RevealSection>
  </section>
);

export const Architecture = () => (
  <section className="arch" id="architecture">
    <RevealSection className="section-header">
      <span className="section-num">04</span>
      <h2 className="section-title">Three layers</h2>
    </RevealSection>
    <RevealSection className="arch-diagram">
      <div className="arch-layer">
        <div className="arch-layer-num">Layer 01 · Raw Sources</div>
        <h3>Immutable inputs</h3>
        <p>Your curated collection of source documents. Articles, papers, images, data files. The LLM reads from these but never modifies them. This is your source of truth.</p>
        <div className="layer-badge">
          <span className="layer-tag">PDFs</span>
          <span className="layer-tag">Markdown</span>
          <span className="layer-tag">Images</span>
          <span className="layer-tag">Web clips</span>
          <span className="layer-tag">Transcripts</span>
        </div>
      </div>
      <div className="arch-layer">
        <div className="arch-layer-num">Layer 02 · The Wiki</div>
        <h3>LLM-maintained pages</h3>
        <p>A directory of LLM-generated markdown files. Summaries, entity pages, concept pages, comparisons, synthesis. The LLM owns this layer entirely — creates pages, updates them, maintains cross-references.</p>
        <div className="layer-badge">
          <span className="layer-tag">index.md</span>
          <span className="layer-tag">log.md</span>
          <span className="layer-tag">entities/</span>
          <span className="layer-tag">concepts/</span>
          <span className="layer-tag">sources/</span>
        </div>
      </div>
      <div className="arch-layer">
        <div className="arch-layer-num">Layer 03 · The Schema</div>
        <h3>Configuration file</h3>
        <p>A document (CLAUDE.md or AGENTS.md) that tells the LLM how the wiki is structured, the conventions, and workflows. This is what makes the LLM a disciplined wiki maintainer rather than a generic chatbot.</p>
        <div className="layer-badge">
          <span className="layer-tag">CLAUDE.md</span>
          <span className="layer-tag">AGENTS.md</span>
          <span className="layer-tag">Conventions</span>
          <span className="layer-tag">Workflows</span>
        </div>
      </div>
    </RevealSection>
  </section>
);

export const UseCases = () => (
  <section className="cases" id="cases">
    <RevealSection className="section-header">
      <span className="section-num">05</span>
      <h2 className="section-title">Where it fits</h2>
    </RevealSection>
    <RevealSection className="cases-grid">
      <div className="case-card">
        <span className="case-emoji">🔬</span>
        <h3>Research</h3>
        <p>Go deep on a topic over weeks or months. Reading papers, articles, reports — incrementally building a comprehensive wiki with an evolving thesis. The contradictions are already flagged when you arrive.</p>
      </div>
      <div className="case-card">
        <span className="case-emoji">📚</span>
        <h3>Reading a book</h3>
        <p>File each chapter as you go. Build out pages for characters, themes, plot threads, and how they connect. By the end you have a rich companion wiki — like a personal Tolkien Gateway, built as you read.</p>
      </div>
      <div className="case-card">
        <span className="case-emoji">🏢</span>
        <h3>Business & Teams</h3>
        <p>An internal wiki maintained by LLMs, fed by Slack threads, meeting transcripts, project documents, customer calls. The wiki stays current because the LLM does the maintenance no one on the team wants to do.</p>
      </div>
      <div className="case-card">
        <span className="case-emoji">🧠</span>
        <h3>Personal knowledge</h3>
        <p>Track your own goals, health, psychology, self-improvement. File journal entries, articles, podcast notes, and build up a structured picture of yourself over time. Your personal Memex, finally realized.</p>
      </div>
    </RevealSection>
  </section>
);

export const Quote = () => (
  <RevealSection className="quote-section">
    <span className="quote-decoration">"</span>
    <p className="quote-text">The tedious part of maintaining a knowledge base is not the reading or the thinking — it's the bookkeeping. Humans abandon wikis because the maintenance burden grows faster than the value. LLMs don't get bored.</p>
    <div className="quote-attr">— The LLM Wiki Pattern</div>
  </RevealSection>
);

export const FooterCTA = () => (
  <RevealSection className="footer-cta">
    <h2>Start building<br />your <em>living</em><br />knowledge base.</h2>
    <div className="footer-cta-right">
      <p>Share this pattern document with any LLM agent — Claude Code, OpenAI Codex, or any agentic assistant. Work together to instantiate a version that fits your domain, your tools, and your workflow.</p>
      <p style={{ fontSize: '0.8rem' }}>Works with Obsidian · Git · Marp · Dataview · qmd search</p>
      <a href="#how" className="btn-white">Read the pattern →</a>
    </div>
  </RevealSection>
);

export const Footer = () => (
  <footer>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <span>LLM Wiki Pattern · Inspired by <a href="https://github.com/karpathy/llm-wiki.md" target="_blank" rel="noreferrer">@karpathy</a> </span>
      <span>Reference Gist: <a href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f" target="_blank" rel="noreferrer">442a6bf...</a> · Built by <a href="https://github.com/shivamprasad1001" target="_blank" rel="noreferrer">shivamprasad1001</a></span>
    </div>
    <div style={{ textAlign: 'right' }}>
      <span>Visit <a href="https://x.com/karpathy" target="_blank" rel="noreferrer">@karpathy</a> on X</span>
    </div>
  </footer>
);
