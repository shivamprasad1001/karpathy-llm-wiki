import React, { useState } from 'react';
import { RevealSection } from './RevealSection';

export const OriginalPaper = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="paper-section" id="paper">
      <RevealSection className="section-header">
        <span className="section-num">06</span>
        <h2 className="section-title">The Original Pattern</h2>
      </RevealSection>
      
      <RevealSection className="paper-content">
        <div className="paper-container">
          <div className="paper-header">
            <h1>LLM Wiki</h1>
            <p className="paper-subtitle">A pattern for building personal knowledge bases using LLMs.</p>
            <div className="paper-credits" style={{ marginTop: '1rem', padding: '0.8rem 1.2rem', background: 'var(--cream)', borderLeft: '3px solid var(--rust)', display: 'inline-block', fontSize: '0.85rem', fontFamily: 'var(--sans)', color: 'var(--muted)' }}>
              Written by <strong><a href="https://github.com/karpathy/llm-wiki.md" target="_blank" rel="noreferrer" style={{color: 'var(--ink)'}}>@karpathy</a></strong>. <br />
              Engineered and constructed by <strong><a href="https://github.com/shivamprasad1001" target="_blank" rel="noreferrer" style={{color: 'var(--ink)'}}>shivamprasad1001</a></strong>.
            </div>
          </div>

          <div 
            className="paper-body" 
            style={{ 
              maxHeight: isExpanded ? '75vh' : '400px', 
              overflowY: isExpanded ? 'auto' : 'hidden', 
              position: 'relative',
              paddingRight: isExpanded ? '1rem' : '0',
              transition: 'max-height 0.3s ease'
            }}
          >
            <p className="paper-lead">This is an idea file, it is designed to be copy pasted to your own LLM Agent (e.g. OpenAI Codex, Claude Code, OpenCode / Pi, or etc.). Its goal is to communicate the high level idea, but your agent will build out the specifics in collaboration with you.</p>
            
            <h2>The core idea</h2>
            <p>Most people's experience with LLMs and documents looks like RAG: you upload a collection of files, the LLM retrieves relevant chunks at query time, and generates an answer. This works, but the LLM is rediscovering knowledge from scratch on every question. There's no accumulation. Ask a subtle question that requires synthesizing five documents, and the LLM has to find and piece together the relevant fragments every time. Nothing is built up. NotebookLM, ChatGPT file uploads, and most RAG systems work this way.</p>
            <p>The idea here is different. Instead of just retrieving from raw documents at query time, the LLM incrementally builds and maintains a persistent wiki — a structured, interlinked collection of markdown files that sits between you and the raw sources. When you add a new source, the LLM doesn't just index it for later retrieval. It reads it, extracts the key information, and integrates it into the existing wiki — updating entity pages, revising topic summaries, noting where new data contradicts old claims, strengthening or challenging the evolving synthesis. The knowledge is compiled once and then kept current, not re-derived on every query.</p>
            <p>This is the key difference: the wiki is a persistent, compounding artifact. The cross-references are already there. The contradictions have already been flagged. The synthesis already reflects everything you've read. The wiki keeps getting richer with every source you add and every question you ask.</p>
            <p>You never (or rarely) write the wiki yourself — the LLM writes and maintains all of it. You're in charge of sourcing, exploration, and asking the right questions. The LLM does all the grunt work — the summarizing, cross-referencing, filing, and bookkeeping that makes a knowledge base actually useful over time. In practice, I have the LLM agent open on one side and Obsidian open on the other. The LLM makes edits based on our conversation, and I browse the results in real time — following links, checking the graph view, reading the updated pages. Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase.</p>
            
            <p>This can apply to a lot of different contexts. A few examples:</p>
            <ul>
              <li><strong>Personal:</strong> tracking your own goals, health, psychology, self-improvement — filing journal entries, articles, podcast notes, and building up a structured picture of yourself over time.</li>
              <li><strong>Research:</strong> going deep on a topic over weeks or months — reading papers, articles, reports, and incrementally building a comprehensive wiki with an evolving thesis.</li>
              <li><strong>Reading a book:</strong> filing each chapter as you go, building out pages for characters, themes, plot threads, and how they connect. By the end you have a rich companion wiki. Think of fan wikis like Tolkien Gateway — thousands of interlinked pages covering characters, places, events, languages, built by a community of volunteers over years. You could build something like that personally as you read, with the LLM doing all the cross-referencing and maintenance.</li>
              <li><strong>Business/team:</strong> an internal wiki maintained by LLMs, fed by Slack threads, meeting transcripts, project documents, customer calls. Possibly with humans in the loop reviewing updates. The wiki stays current because the LLM does the maintenance that no one on the team wants to do.</li>
              <li><strong>General:</strong> Competitive analysis, due diligence, trip planning, course notes, hobby deep-dives — anything where you're accumulating knowledge over time and want it organized rather than scattered.</li>
            </ul>

            <h2>Architecture</h2>
            <p>There are three layers:</p>
            <ul>
              <li><strong>Raw sources</strong> — your curated collection of source documents. Articles, papers, images, data files. These are immutable — the LLM reads from them but never modifies them. This is your source of truth.</li>
              <li><strong>The wiki</strong> — a directory of LLM-generated markdown files. Summaries, entity pages, concept pages, comparisons, an overview, a synthesis. The LLM owns this layer entirely. It creates pages, updates them when new sources arrive, maintains cross-references, and keeps everything consistent. You read it; the LLM writes it.</li>
              <li><strong>The schema</strong> — a document (e.g. CLAUDE.md for Claude Code or AGENTS.md for Codex) that tells the LLM how the wiki is structured, what the conventions are, and what workflows to follow when ingesting sources, answering questions, or maintaining the wiki. This is the key configuration file — it's what makes the LLM a disciplined wiki maintainer rather than a generic chatbot. You and the LLM co-evolve this over time as you figure out what works for your domain.</li>
            </ul>

            <h2>Operations</h2>
            <p><strong>Ingest.</strong> You drop a new source into the raw collection and tell the LLM to process it. An example flow: the LLM reads the source, discusses key takeaways with you, writes a summary page in the wiki, updates the index, updates relevant entity and concept pages across the wiki, and appends an entry to the log. A single source might touch 10-15 wiki pages. Personally I prefer to ingest sources one at a time and stay involved — I read the summaries, check the updates, and guide the LLM on what to emphasize. But you could also batch-ingest many sources at once with less supervision. It's up to you to develop the workflow that fits your style and document it in the schema for future sessions.</p>
            <p><strong>Query.</strong> You ask questions against the wiki. The LLM searches for relevant pages, reads them, and synthesizes an answer with citations. Answers can take different forms depending on the question — a markdown page, a comparison table, a slide deck (Marp), a chart (matplotlib), a canvas. The important insight: good answers can be filed back into the wiki as new pages. A comparison you asked for, an analysis, a connection you discovered — these are valuable and shouldn't disappear into chat history. This way your explorations compound in the knowledge base just like ingested sources do.</p>
            <p><strong>Lint.</strong> Periodically, ask the LLM to health-check the wiki. Look for: contradictions between pages, stale claims that newer sources have superseded, orphan pages with no inbound links, important concepts mentioned but lacking their own page, missing cross-references, data gaps that could be filled with a web search. The LLM is good at suggesting new questions to investigate and new sources to look for. This keeps the wiki healthy as it grows.</p>

            <h2>Indexing and logging</h2>
            <p>Two special files help the LLM (and you) navigate the wiki as it grows. They serve different purposes:</p>
            <p><strong>index.md</strong> is content-oriented. It's a catalog of everything in the wiki — each page listed with a link, a one-line summary, and optionally metadata like date or source count. Organized by category (entities, concepts, sources, etc.). The LLM updates it on every ingest. When answering a query, the LLM reads the index first to find relevant pages, then drills into them. This works surprisingly well at moderate scale (~100 sources, ~hundreds of pages) and avoids the need for embedding-based RAG infrastructure.</p>
            <p><strong>log.md</strong> is chronological. It's an append-only record of what happened and when — ingests, queries, lint passes. A useful tip: if each entry starts with a consistent prefix (e.g. <code>## [2026-04-02] ingest | Article Title</code>), the log becomes parseable with simple unix tools — <code>grep "^## \[" log.md | tail -5</code> gives you the last 5 entries. The log gives you a timeline of the wiki's evolution and helps the LLM understand what's been done recently.</p>

            <h2>Optional: CLI tools</h2>
            <p>At some point you may want to build small tools that help the LLM operate on the wiki more efficiently. A search engine over the wiki pages is the most obvious one — at small scale the index file is enough, but as the wiki grows you want proper search. <strong>qmd</strong> is a good option: it's a local search engine for markdown files with hybrid BM25/vector search and LLM re-ranking, all on-device. It has both a CLI (so the LLM can shell out to it) and an MCP server (so the LLM can use it as a native tool). You could also build something simpler yourself — the LLM can help you vibe-code a naive search script as the need arises.</p>

            <h2>Tips and tricks</h2>
            <ul>
              <li><strong>Obsidian Web Clipper</strong> is a browser extension that converts web articles to markdown. Very useful for quickly getting sources into your raw collection.</li>
              <li><strong>Download images locally.</strong> In Obsidian Settings → Files and links, set "Attachment folder path" to a fixed directory (e.g. <code>raw/assets/</code>). Then in Settings → Hotkeys, search for "Download" to find "Download attachments for current file" and bind it to a hotkey (e.g. Ctrl+Shift+D). After clipping an article, hit the hotkey and all images get downloaded to local disk. This is optional but useful — it lets the LLM view and reference images directly instead of relying on URLs that may break. Note that LLMs can't natively read markdown with inline images in one pass — the workaround is to have the LLM read the text first, then view some or all of the referenced images separately to gain additional context. It's a bit clunky but works well enough.</li>
              <li><strong>Obsidian's graph view</strong> is the best way to see the shape of your wiki — what's connected to what, which pages are hubs, which are orphans.</li>
              <li><strong>Marp</strong> is a markdown-based slide deck format. Obsidian has a plugin for it. Useful for generating presentations directly from wiki content.</li>
              <li><strong>Dataview</strong> is an Obsidian plugin that runs queries over page frontmatter. If your LLM adds YAML frontmatter to wiki pages (tags, dates, source counts), Dataview can generate dynamic tables and lists.</li>
              <li>The wiki is just a <strong>git repo</strong> of markdown files. You get version history, branching, and collaboration for free.</li>
            </ul>

            <h2>Why this works</h2>
            <p>The tedious part of maintaining a knowledge base is not the reading or the thinking — it's the bookkeeping. Updating cross-references, keeping summaries current, noting when new data contradicts old claims, maintaining consistency across dozens of pages. Humans abandon wikis because the maintenance burden grows faster than the value. LLMs don't get bored, don't forget to update a cross-reference, and can touch 15 files in one pass. The wiki stays maintained because the cost of maintenance is near zero.</p>
            <p>The human's job is to curate sources, direct the analysis, ask good questions, and think about what it all means. The LLM's job is everything else.</p>
            <p>The idea is related in spirit to Vannevar Bush's <em>Memex (1945)</em> — a personal, curated knowledge store with associative trails between documents. Bush's vision was closer to this than to what the web became: private, actively curated, with the connections between documents as valuable as the documents themselves. The part he couldn't solve was who does the maintenance. The LLM handles that.</p>

            <div className="paper-note">
              <strong>Note:</strong> This document is intentionally abstract. It describes the idea, not a specific implementation. The exact directory structure, the schema conventions, the page formats, the tooling — all of that will depend on your domain, your preferences, and your LLM of choice. Everything mentioned above is optional and modular — pick what's useful, ignore what isn't. For example: your sources might be text-only, so you don't need image handling at all. Your wiki might be small enough that the index file is all you need, no search engine required. You might not care about slide decks and just want markdown pages. You might want a completely different set of output formats. The right way to use this is to share it with your LLM agent and work together to instantiate a version that fits your needs. The document's only job is to communicate the pattern. Your LLM can figure out the rest.
            </div>

            {!isExpanded && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '150px',
                background: 'linear-gradient(to bottom, rgba(245, 240, 232, 0) 0%, rgba(245, 240, 232, 1) 100%)',
                pointerEvents: 'none'
              }}></div>
            )}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              className="btn-primary" 
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ padding: '0.8rem 2rem', cursor: 'pointer' }}
            >
              {isExpanded ? 'Collapse Paper' : 'Read Full Paper'}
            </button>
          </div>
        </div>
      </RevealSection>
    </section>
  );
};
