import React, { useEffect, useState } from 'react';

export const WikiGraph = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    // Mock nodes for the hero animation
    const mockNodes = [
      { id: 1, title: 'Temporal Difference', body: 'Learning from incomplete sequences without waiting for final outcomes.', top: '15%', left: '10%' },
      { id: 2, title: 'Q-Learning', body: 'Off-policy TD control for finding optimal action-selection policies.', top: '45%', left: '40%', hub: true },
      { id: 3, title: 'Bellman Equation', body: 'The fundamental recursive relationship in reinforcement learning.', top: '10%', left: '60%' },
      { id: 4, title: 'SARSA', body: 'On-policy alternative focusing on the current policy.', top: '70%', left: '15%' },
      { id: 5, title: 'Actor-Critic', body: 'Combining policy-based and value-based methods.', top: '65%', left: '70%' },
      { id: 6, title: 'Experience Replay', body: 'Breaking correlations between consecutive samples.', top: '35%', left: '75%' }
    ];
    setNodes(mockNodes);
  }, []);

  return (
    <div className="wiki-canvas">
      {/* Background SVG for some connection lines if needed, keeping it simple for now */}
      <svg className="connections-svg">
        <line x1="12%" y1="20%" x2="42%" y2="48%" className="conn-line" style={{ animationDelay: '0.2s' }} />
        <line x1="62%" y1="18%" x2="44%" y2="46%" className="conn-line" style={{ animationDelay: '0.4s' }} />
        <line x1="18%" y1="72%" x2="42%" y2="52%" className="conn-line" style={{ animationDelay: '0.6s' }} />
      </svg>
      {nodes.map((node, index) => (
        <div 
          key={node.id} 
          className={`wiki-node ${node.hub ? 'hub' : ''}`}
          style={{ 
            top: node.top, 
            left: node.left, 
            animationDelay: `${index * 0.15}s` 
          }}
        >
          <div className="node-title">{node.title}</div>
          <div className="node-body">{node.body}</div>
          <div className="node-links">
            <span className="node-link">linked-node</span>
            <span className="node-link">ref-id</span>
          </div>
        </div>
      ))}
    </div>
  );
};
