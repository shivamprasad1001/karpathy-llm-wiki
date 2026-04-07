import React, { useState, useEffect } from 'react';
import { sourcesData } from '../data/sourcesData';
import { wikiPagesData } from '../data/wikiContent';
import { getGraphState } from '../data/graphFactory';
import { ObsidianGraph } from './ObsidianGraph';
import { RevealSection } from './RevealSection';

export const InteractiveDemo = () => {
  const [selectedSource, setSelectedSource] = useState(null);
  const [activeTab, setActiveTab] = useState('summary');
  const [ingested, setIngested] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStatus, setProcessStatus] = useState("");
  
  // Graph state: starts with base nodes computed from empty ingested map
  const initialState = getGraphState({});
  const [allNodes, setAllNodes] = useState(initialState.nodes);
  const [allLinks, setAllLinks] = useState(initialState.links);

  const handleIngest = () => {
    if (!selectedSource || ingested[selectedSource]) return;
    
    setActiveTab('summary');

    setIsProcessing(true);
    const statuses = [
      "Uploading document chunks (pg 1-28)...",
      "Scanning for entities & concepts...",
      "Resolving cross-references...",
      "Updating wiki pages & index.md...",
      "Finalizing knowledge synthesis..."
    ];

    let step = 0;
    const interval = setInterval(() => {
      setProcessStatus(statuses[step]);
      step++;
      if (step >= statuses.length) {
        clearInterval(interval);
        
        setIngested(prev => {
          const newIngested = { ...prev, [selectedSource]: true };
          // Calculate exact structural state based on newly ingested sources
          const newState = getGraphState(newIngested);
          setAllNodes(newState.nodes);
          setAllLinks(newState.links);
          return newIngested;
        });

        setIsProcessing(false);
        setProcessStatus("");
      }
    }, 800);

  };

  const renderContent = () => {
    if (!selectedSource) {
      return <div className="demo-placeholder">← Select a source and click Ingest to see the wiki update.</div>;
    }
    if (!ingested[selectedSource] && !isProcessing) {
      const source = sourcesData.find(s => s.id === selectedSource);
      return (
        <div className="demo-placeholder">
          Selected: <strong>{source.title}</strong><br />Click "Ingest →" to process this source into the wiki.
        </div>
      );
    }
    
    if (isProcessing) {
      return (
        <div className="processing-overlay">
          <div className="spinner"></div>
          <p>{processStatus}</p>
        </div>
      );
    }

    return wikiPagesData[selectedSource][activeTab] || wikiPagesData[selectedSource]['summary'];

  };


  return (
    <section className="demo" id="demo">
      <RevealSection className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">See it in action</h2>
      </RevealSection>
      <RevealSection>
        <p className="demo-subtitle">Simulate AI knowledge accumulation from long-form documents.</p>
      </RevealSection>

      <RevealSection className="demo-container">
        <div className="demo-sidebar">
          <div className="demo-sidebar-header">📁 raw sources</div>
          <div className="source-list">
            {sourcesData.map(s => (
              <div
                key={s.id}
                className={`source-item ${selectedSource === s.id ? 'active' : ''} ${ingested[s.id] ? 'ingested' : ''}`}
                onClick={() => setSelectedSource(s.id)}
              >
                <span className="s-icon">{s.icon}</span>
                <div>
                  <div className="s-title">{s.title} {ingested[s.id] && '✓'}</div>
                  <div className="s-meta">{s.meta}</div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="ingest-btn"
            disabled={!selectedSource || isProcessing || ingested[selectedSource]}
            onClick={handleIngest}
          >
            {isProcessing ? '⚙️ Processing...' : (ingested[selectedSource] ? 'Ingested' : '⚡ Ingest →')}
          </button>
        </div>
        <div className="demo-main">
          <div className="demo-main-header">
            <span className="demo-main-title">wiki output</span>
            <div className="demo-tabs">
              {['summary', 'entity', 'index'].map(tab => (
                <div
                  key={tab}
                  className={`demo-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </div>
              ))}
            </div>
          </div>

          <div className="demo-content">
            {renderContent()}
          </div>
        </div>
        <div style={{ height: '100%', width: '100%', background: '#0a0908', borderLeft: '1px solid var(--border)' }}>
          <ObsidianGraph initialNodes={allNodes} links={allLinks} />
        </div>
      </RevealSection>
    </section>
  );
};

