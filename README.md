# LLM Wiki: Interactive Visualizer & Architecture Pattern 🕸️

An interactive, front-end visualizer demonstrating the **LLM Wiki Pattern**—a methodology for building compounding, structured knowledge bases using Large Language Models rather than traditional RAG (Retrieval-Augmented Generation) setups. 

This project breathes visual life into the core concept: instead of asking an LLM to generate transient answers from scratch using raw documents, we build a persistent, living graph of information where contradictions are resolved, entities are enriched, and semantic connections are automatically mapped.

> **Origin:** This pattern and web-app are heavily inspired by [@karpathy's LLM Wiki concept](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f). <br/>
> **Interactive UI built by:** [shivamprasad1001](https://github.com/shivamprasad1001)

---

## 🚀 Quickstart for Developers

The codebase is a modern standard React + Vite stack relying on **D3.js** for the complex physics simulations.

```bash
# Clone the repository
git clone https://github.com/shivamprasad1001/karpathy-llm-wiki.git
cd karpathy-llm-wiki

# Install dependencies
npm install

# Start the local development server
npm run dev
```

### The Tech Stack
- **Framework:** React + Vite
- **Styling:** CSS Grid, Custom Variables, Dark Mode Obsidian-style theming
- **Simulation:** `d3-force` for deterministic, cross-linked collision modeling
- **State Management:** React hooks tied strictly to deterministic graph states

---

## 🎓 How to Use the LLM Wiki Pattern

Traditional RAG creates transient answers that leave no trace. The **LLM Wiki Pattern** is different: the AI builds an interconnected web of Markdown files that compile your knowledge permanently. 

Depending on your discipline, this repository and its implementation pattern can supercharge your learning and development:

### 🔬 For Researchers
Stop losing track of how multi-agent reinforcement learning papers cross-reference each other. When conducting a dense literature review, you can pipe your sources through an LLM agent to:
- Dynamically extract algorithmic methodologies, flags, and assumptions.
- Automatically construct *contradiction edges* (e.g., mapping where the MADDPG paper criticizes the MAPPO benchmark).
- Trace historical academic lineages by converting author mentions into enriched network entities.

### 📚 For Students
When studying complex subjects (like Reinforcement Learning, Biology, or History), standard notes often fail to capture the "big picture". By adopting the LLM Wiki file structure and visualizations:
- You construct your own personal "Tolkien Gateway" for your college courses.
- The physics graph will visually cluster related concepts together (e.g., `TD-Learning`, `SARSA`, and `Q-Learning` automatically bridging together under `Bellman`).
- You can instantly see orphan knowledge gaps that require further study.

### 💻 For Developers
This repo serves as a boilerplate for a dual-pane UI often required in complex AI enterprise applications:
- **Modular Data Simulation**: Review `src/data/graphFactory.js` for an example of mapping strict JSON ingest payloads into scalable D3 nodes and links.
- **Dynamic D3 Highlights**: Check `src/components/ObsidianGraph.jsx` to see how to execute low-latency hover effects, click isolations, and path-tracing within React component structures.

---

## 🧠 Features

- **Live Ingestion Simulation**: Watch standard source material iteratively digest into an active wiki output panel.
- **D3 Force Knowledge Graph**: Fully draggable physics nodes mapped to specific styles (`Concepts`, `Entities`, `Sources`).
- **Semantic Link Mapping**: Click on any node in the graph to dim the noise and highlight its direct relationship edges. 
- **Deterministic Truth Resolving**: Demo visualizes conflicting documents initially tethered by a dashed red edge, and turning into a solid gold connection once the paradox is formally resolved by the AI.

## License
MIT License. Feel free to clone, hack, and deploy this visualizer to accompany your own AI agent setups!
