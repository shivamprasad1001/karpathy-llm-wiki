export const getGraphState = (ingested) => {
  // BASE NODES
  const nodesMap = {
    'summary': { id: 'summary', label: 'Summary / Overview', type: 'entity' },
    'rl': { id: 'rl', label: 'Reinforcement Learning', type: 'concept' },
    'marl': { id: 'marl', label: 'Multi-Agent RL', type: 'concept' },
    'ppo': { id: 'ppo', label: 'PPO', type: 'concept' },
    'bellman': { id: 'bellman', label: 'Bellman Equation', type: 'concept' },
    'cooperation': { id: 'cooperation', label: 'Emergent Cooperation', type: 'concept' }
  };

  const links = [
    { source: 'summary', target: 'rl', style: 'default' },
    { source: 'summary', target: 'marl', style: 'default' },
    { source: 'rl', target: 'ppo', style: 'default' },
    { source: 'marl', target: 'cooperation', style: 'default' },
    { source: 'rl', target: 'marl', style: 'default' }, // Cross-link
    { source: 'marl', target: 'ppo', style: 'default' } // Cross-link
  ];

  if (ingested['sb']) {
    nodesMap['sb'] = { id: 'sb', label: 'Sutton & Barto (1998)', type: 'source' };
    nodesMap['td'] = { id: 'td', label: 'TD-Learning', type: 'concept' };
    nodesMap['qlearn'] = { id: 'qlearn', label: 'Q-Learning', type: 'concept' };
    nodesMap['sarsa'] = { id: 'sarsa', label: 'SARSA', type: 'concept' };
    nodesMap['rsutton'] = { id: 'rsutton', label: 'Richard Sutton', type: 'entity' };
    
    links.push({ source: 'sb', target: 'rl', style: 'default' });
    links.push({ source: 'sb', target: 'td', style: 'default' });
    links.push({ source: 'td', target: 'bellman', style: 'default' });
    links.push({ source: 'qlearn', target: 'td', style: 'default' });
    links.push({ source: 'sarsa', target: 'td', style: 'default' });
    links.push({ source: 'sb', target: 'rsutton', style: 'default' });
    links.push({ source: 'rsutton', target: 'rl', style: 'default' });
    // Additional sharing
    links.push({ source: 'qlearn', target: 'rl', style: 'default' });
    links.push({ source: 'bellman', target: 'rl', style: 'default' });
  }

  if (ingested['maddpg']) {
    nodesMap['maddpg_src'] = { id: 'maddpg_src', label: 'MADDPG Paper', type: 'source' };
    nodesMap['maddpg'] = { id: 'maddpg', label: 'MADDPG Algorithm', type: 'concept' };
    nodesMap['ctde'] = { id: 'ctde', label: 'CTDE', type: 'concept' };
    nodesMap['ddpg'] = { id: 'ddpg', label: 'DDPG', type: 'concept' };

    links.push({ source: 'maddpg_src', target: 'marl', style: 'default' });
    links.push({ source: 'maddpg_src', target: 'maddpg', style: 'default' });
    links.push({ source: 'maddpg', target: 'ctde', style: 'default' });
    links.push({ source: 'maddpg', target: 'ddpg', style: 'default' });
    links.push({ source: 'ddpg', target: 'rl', style: 'default' });
    // Additional sharing
    links.push({ source: 'ctde', target: 'marl', style: 'default' });
    links.push({ source: 'ctde', target: 'cooperation', style: 'default' });

    // Contradiction edge MADDPG <-> MAPPO (MAPPO hasn't necessarily been ingested yet, so we have to add MAPPO node prematurely to show contradiction? Or only if both exist?)
    // "flags a contradiction edge (dashed red) between MADDPG↔MAPPO". MAPPO might not be ingested yet. Wait, it implies MADDPG paper criticizes MAPPO, or claims it's better? Let's just create 'mappo' node early if maddpg is ingested to show what it is contrasting against.
    if (!ingested['mappo']) {
      nodesMap['mappo'] = { id: 'mappo', label: 'MAPPO Algorithm', type: 'concept' };
      links.push({ source: 'maddpg', target: 'mappo', style: 'dashed-red', label: 'Contradicts/Fails against' });
    }
  }

  if (ingested['lex']) {
    nodesMap['lex'] = { id: 'lex', label: 'Lex x Sutton Podcast', type: 'source' };
    nodesMap['reward'] = { id: 'reward', label: 'Reward Hypothesis', type: 'concept' };
    nodesMap['bitter'] = { id: 'bitter', label: 'Bitter Lesson', type: 'concept' };
    nodesMap['agi'] = { id: 'agi', label: 'AGI', type: 'concept' };

    links.push({ source: 'lex', target: 'reward', style: 'default' });
    links.push({ source: 'lex', target: 'bitter', style: 'default' });
    links.push({ source: 'lex', target: 'agi', style: 'default' });
    links.push({ source: 'reward', target: 'rl', style: 'default' });
    // Additional sharing
    links.push({ source: 'agi', target: 'summary', style: 'default' });
    links.push({ source: 'bitter', target: 'rl', style: 'default' });

    // Enriches Richard Sutton
    if (!nodesMap['rsutton']) {
      nodesMap['rsutton'] = { id: 'rsutton', label: 'Richard Sutton', type: 'entity' };
    }
    nodesMap['rsutton'].enriched = true; // TRIGGERS GLOW
    links.push({ source: 'lex', target: 'rsutton', style: 'default' });
  }

  if (ingested['mappo']) {
    nodesMap['mappo_src'] = { id: 'mappo_src', label: 'MAPPO Benchmarks', type: 'source' };
    
    // Ensure mappo concept node exists and connects to PPO/MARL
    nodesMap['mappo'] = { id: 'mappo', label: 'MAPPO Algorithm', type: 'concept' };
    links.push({ source: 'mappo_src', target: 'mappo', style: 'default' });
    links.push({ source: 'mappo_src', target: 'marl', style: 'default' });
    links.push({ source: 'mappo', target: 'ppo', style: 'default' });
    // Additional sharing
    links.push({ source: 'mappo', target: 'cooperation', style: 'default' });
    if (nodesMap['ctde']) {
      links.push({ source: 'mappo', target: 'ctde', style: 'default' });
    }

    // Resolves contradiction if MADDPG is also ingested
    if (nodesMap['maddpg']) {
      links.push({ source: 'maddpg', target: 'mappo', style: 'solid-gold', label: 'Resolved (MAPPO scales better)' });
    }
  }

  // Calculate degrees for node sizes
  const nodes = Object.values(nodesMap);
  nodes.forEach(n => {
    n.degree = links.filter(l => l.source === n.id || l.target === n.id).length;
  });

  return { nodes, links };
};
