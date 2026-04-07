import React from 'react';

export const wikiPagesData = {
  sb: {
    summary: (
      <>
        <div className="md-frontmatter">
          <span className="fm-key">source:</span> Sutton & Barto, Reinforcement Learning (2018), Ch. 6<br />
          <span className="fm-key">ingested:</span> 2026-04-07<br />
          <span className="fm-key">tags:</span> rl, td-learning, q-learning<br />
          <span className="fm-key">links:</span> [[TD-Learning]], [[Q-Learning]], [[Bellman]]
        </div>
        <div className="md-h1">Summary · Ch. 6: Temporal-Difference Learning</div>
        <div className="md-p">Chapter 6 introduces TD learning as the combination of Monte Carlo methods and dynamic programming — updating estimates based on other estimates without waiting for a final outcome.</div>
        <div className="md-h2">Key claims</div>
        <div className="md-p">TD(0) converges to the correct predictions under standard conditions. The TD error drives learning and is central to neuroscience models of dopamine signaling.</div>
        <div className="md-h2">Links updated</div>
        <div className="md-p">
          → <a className="md-link" href="#">[[Q-Learning]]</a> page updated with derivation context<br />
          → <a className="md-link" href="#">[[Bellman Equation]]</a> cross-reference added<br />
          → <a className="md-link" href="#">[[SARSA]]</a> entity created
        </div>
      </>
    ),
    entity: (
      <>
        <div className="md-h1">Entity · Temporal-Difference Learning</div>
        <div className="md-p"><span className="md-tag">concept</span><span className="md-tag">rl-foundations</span></div>
        <div className="md-p">TD learning estimates value functions by bootstrapping from current estimates, combining the sample efficiency of MC with the online nature of DP.</div>
        <div className="md-h2">Mentioned in</div>
        <div className="md-p">
          → <a className="md-link" href="#">Sutton & Barto Ch. 6</a> (primary definition)<br />
          → <a className="md-link" href="#">David Silver Lecture 4</a> (examples)<br />
          → <a className="md-link" href="#">Lex × Sutton transcript</a> (intuition)
        </div>
      </>
    ),
    index: (
      <>
        <div className="md-h1">index.md — updated</div>
        <div className="md-h2">Sources (1 new)</div>
        <div className="md-p">📄 <a className="md-link" href="#">Sutton & Barto Ch. 6</a> — TD learning, Q-learning, SARSA · <span style={{ color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--mono)' }}>ingested 2026-04-07</span></div>
        <div className="md-h2">New pages created (3)</div>
        <div className="md-p">
          • <a className="md-link" href="#">concepts/td-learning.md</a><br />
          • <a className="md-link" href="#">concepts/sarsa.md</a><br />
          • <a className="md-link" href="#">entities/bellman-equation.md</a>
        </div>
        <div className="md-h2">Pages updated (4)</div>
        <div className="md-p">
          • <a className="md-link" href="#">concepts/q-learning.md</a> — added derivation context<br />
          • <a className="md-link" href="#">entities/richard-sutton.md</a> — added source reference<br />
          • <a className="md-link" href="#">log.md</a> — ingest entry appended<br />
          • <a className="md-link" href="#">index.md</a> — this file
        </div>
      </>
    )
  },
  maddpg: {
    summary: (
      <>
        <div className="md-frontmatter"><span className="fm-key">source:</span> Lowe et al., Multi-Agent Actor-Critic (2017)<br /><span className="fm-key">ingested:</span> 2026-04-07<br /><span className="fm-key">tags:</span> marl, actor-critic, cooperation<br /><span className="fm-key">links:</span> [[MADDPG]], [[DDPG]], [[Cooperation]]</div>
        <div className="md-h1">Summary · MADDPG Paper</div>
        <div className="md-p">MADDPG extends DDPG to cooperative and competitive multi-agent settings using centralized training with decentralized execution (CTDE). Agents share global state only during training.</div>
        <div className="md-h2">Contradiction flagged ⚠️</div>
        <div className="md-p">MADDPG assumes agents can observe others' actions during training. <a className="md-link" href="#">[[MAPPO]]</a> (added 2026-03-12) assumes only local observations — this is a fundamental design difference. <strong>Review needed.</strong></div>
      </>
    ),
    entity: (
      <>
        <div className="md-h1">Entity · MADDPG</div>
        <div className="md-p"><span className="md-tag">algorithm</span><span className="md-tag">marl</span><span className="md-tag">2017</span></div>
        <div className="md-p">Multi-Agent Deep Deterministic Policy Gradient. Centralized critic, decentralized actors. Works in continuous action spaces. Standard baseline for cooperative MARL.</div>
        <div className="md-h2">Contrast with</div>
        <div className="md-p">→ <a className="md-link" href="#">[[MAPPO]]</a> — on-policy alternative, often stronger empirically<br />→ <a className="md-link" href="#">[[QMIX]]</a> — value decomposition approach</div>
      </>
    ),
    index: (
      <>
        <div className="md-h1">index.md — updated</div>
        <div className="md-h2">Contradiction log (1 new)</div>
        <div className="md-p">⚠️ MADDPG vs MAPPO: observation assumptions differ. See <a className="md-link" href="#">concepts/ctde.md</a></div>
        <div className="md-h2">New pages created (2)</div>
        <div className="md-p">• <a className="md-link" href="#">concepts/ctde.md</a><br />• <a className="md-link" href="#">entities/maddpg.md</a></div>
        <div className="md-h2">Pages updated (5)</div>
        <div className="md-p">• <a className="md-link" href="#">entities/mappo.md</a> — contrast section added<br />• <a className="md-link" href="#">concepts/cooperation.md</a><br />• <a className="md-link" href="#">entities/ddpg.md</a><br />• <a className="md-link" href="#">index.md</a> · <a className="md-link" href="#">log.md</a></div>
      </>
    )
  },
  lex: {
    summary: (
      <>
        <div className="md-frontmatter"><span className="fm-key">source:</span> Lex Fridman Podcast #317 — Richard Sutton<br /><span className="fm-key">ingested:</span> 2026-04-07<br /><span className="fm-key">tags:</span> interview, rl-philosophy, agi<br /><span className="fm-key">links:</span> [[Richard Sutton]], [[Reward Hypothesis]], [[AGI]]</div>
        <div className="md-h1">Summary · Lex × Sutton Transcript</div>
        <div className="md-p">Wide-ranging conversation covering the reward hypothesis ("all of what we mean by goals and purposes can be thought of as maximization of expected cumulative reward"), Sutton's bet on scaling RL, and his views on the path to AGI via general value functions.</div>
        <div className="md-h2">New entity: Reward Hypothesis</div>
        <div className="md-p">Sutton states it more strongly here than in the textbook — reinforcing the <a className="md-link" href="#">[[Reward Hypothesis]]</a> page with a direct quote context and the debate around it.</div>
      </>
    ),
    entity: (
      <>
        <div className="md-h1">Entity · Richard Sutton</div>
        <div className="md-p"><span className="md-tag">person</span><span className="md-tag">rl-pioneer</span><span className="md-tag">alberta</span></div>
        <div className="md-p">Co-author of the standard RL textbook. Pioneer of TD learning, policy gradient methods. Advocate of the "bitter lesson" — general methods that scale beat hand-coded knowledge.</div>
        <div className="md-h2">Sources</div>
        <div className="md-p">→ <a className="md-link" href="#">Sutton & Barto Ch. 6</a> — primary textbook<br />→ <a className="md-link" href="#">Lex Fridman #317</a> — philosophy & AGI views<br />→ <a className="md-link" href="#">The Bitter Lesson (2019)</a> — blog post</div>
      </>
    ),
    index: (
      <>
        <div className="md-h1">index.md — updated</div>
        <div className="md-h2">New pages created (2)</div>
        <div className="md-p">• <a className="md-link" href="#">concepts/reward-hypothesis.md</a><br />• <a className="md-link" href="#">concepts/bitter-lesson.md</a></div>
        <div className="md-h2">Entity pages enriched (3)</div>
        <div className="md-p">• <a className="md-link" href="#">entities/richard-sutton.md</a> — interview views added<br />• <a className="md-link" href="#">concepts/agi.md</a> — Sutton's perspective<br />• <a className="md-link" href="#">concepts/general-value-functions.md</a></div>
      </>
    )
  },
  mappo: {
    summary: (
      <>
        <div className="md-frontmatter"><span className="fm-key">source:</span> MAPPO Benchmark Results — Yu et al. 2022<br /><span className="fm-key">ingested:</span> 2026-04-07<br /><span className="fm-key">tags:</span> marl, ppo, benchmark, empirical<br /><span className="fm-key">links:</span> [[MAPPO]], [[MADDPG]], [[StarCraft II]]</div>
        <div className="md-h1">Summary · MAPPO Benchmarks</div>
        <div className="md-p">Empirical study showing MAPPO (on-policy) consistently outperforms MADDPG (off-policy) across 8 cooperative environments including SMAC and multi-particle environments, challenging the prevailing off-policy preference in MARL.</div>
        <div className="md-h2">Contradiction resolved ✅</div>
        <div className="md-p">This data closes the open flag from MADDPG ingest: empirically, MAPPO's local-observation assumption is not a disadvantage — it generalizes better. The <a className="md-link" href="#">[[CTDE]]</a> page has been updated.</div>
      </>
    ),
    entity: (
      <>
        <div className="md-h1">Entity · MAPPO</div>
        <div className="md-p"><span className="md-tag">algorithm</span><span className="md-tag">marl</span><span className="md-tag">on-policy</span></div>
        <div className="md-p">Multi-Agent PPO. Centralized critic, decentralized actors. On-policy. Surprisingly competitive with off-policy methods. Strong default baseline for cooperative MARL as of 2022.</div>
        <div className="md-h2">Benchmark results</div>
        <div className="md-p">Wins 6/8 SMAC maps vs MADDPG. Sample efficiency lower but asymptotic performance higher. See <a className="md-link" href="#">data/mappo-benchmark.csv</a>.</div>
      </>
    ),
    index: (
      <>
        <div className="md-h1">index.md — updated</div>
        <div className="md-h2">Contradiction resolved (1)</div>
        <div className="md-p">✅ MADDPG vs MAPPO: closed. Empirical evidence favors MAPPO. <a className="md-link" href="#">concepts/ctde.md</a> updated.</div>
        <div className="md-h2">Data files linked (1)</div>
        <div className="md-p">• <a className="md-link" href="#">data/mappo-benchmark.csv</a> — 8 env results table</div>
        <div className="md-h2">Pages updated (4)</div>
        <div className="md-p">• <a className="md-link" href="#">entities/mappo.md</a> · <a className="md-link" href="#">entities/maddpg.md</a><br />• <a className="md-link" href="#">concepts/ctde.md</a> · <a className="md-link" href="#">index.md</a></div>
      </>
    )
  }
}
