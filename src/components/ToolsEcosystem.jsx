import React from 'react';
import { RevealSection } from './RevealSection';

export const ToolsEcosystem = () => (
  <section className="tools-ecosystem" id="tools">
    <RevealSection className="section-header">
      <span className="section-num">06</span>
      <h2 className="section-title">The Tool Stack</h2>
    </RevealSection>
    <RevealSection>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#3d3a36', maxWidth: '60ch', marginBottom: '3rem', fontWeight: 300 }}>
        The LLM Wiki pattern thrives on plain-text files. By relying on a markdown directory structure, the knowledge base becomes compatible with an entire ecosystem of powerful developer and note-taking tools.
      </p>
    </RevealSection>
    <RevealSection className="tools-grid">
      <div className="tool-card">
        <div className="tool-header">
          <div className="tool-icon" style={{ background: '#7a52b3' }}>O</div>
          <h3>Obsidian</h3>
        </div>
        <p>Your primary interface for reading, writing, and visualizing connections. Its local-first, markdown-based architecture makes it the perfect UI for an LLM-managed directory.</p>
      </div>

      <div className="tool-card">
        <div className="tool-header">
          <div className="tool-icon" style={{ background: '#24292e' }}>G</div>
          <h3>Git</h3>
        </div>
        <p>Track every hallucination, extraction, and synthesis. By representing knowledge as commits, you can review the LLM's automated bookkeeping before accepting it.</p>
      </div>

      <div className="tool-card">
        <div className="tool-header">
          <div className="tool-icon" style={{ background: '#0284c7' }}>Q</div>
          <h3>qmd (Quick Markdown)</h3>
        </div>
        <p>A fast CLI tool for executing structural searches across your markdown files. Essential for giving the LLM the tools it needs to grep through thousands of pages instantly.</p>
      </div>

      <div className="tool-card">
        <div className="tool-header">
          <div className="tool-icon" style={{ background: '#10b981' }}>D</div>
          <h3>Dataview</h3>
        </div>
        <p>An Obsidian plugin that turns your markdown frontmatter into a queryable database. Perfect for building dynamic tables of literature and automated indexes.</p>
      </div>
      
      <div className="tool-card">
        <div className="tool-header">
          <div className="tool-icon" style={{ background: '#0288d1' }}>M</div>
          <h3>Marp</h3>
        </div>
        <p>Convert your tightly synthesized markdown pages directly into presentation slide decks, zeroing out the friction between research and dissemination.</p>
      </div>
    </RevealSection>
  </section>
);
