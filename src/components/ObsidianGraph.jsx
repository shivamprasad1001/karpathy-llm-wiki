import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

export const ObsidianGraph = ({ initialNodes, links }) => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    if (!containerRef.current || !initialNodes.length) return;

    // Deep copy data to avoid mutating react props directly
    const nodesData = initialNodes.map(d => ({ ...d }));
    const linksData = links.map(d => ({ ...d }));

    const width = containerRef.current.clientWidth || 800;
    const height = containerRef.current.clientHeight || 520;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous renders

    svg
      .attr("viewBox", [0, 0, width, height])
      .attr("width", "100%")
      .attr("height", "100%");

    // Add glow filter
    const defs = svg.append("defs");
    const filter = defs.append("filter").attr("id", "glow").attr("x", "-50%").attr("y", "-50%").attr("width", "200%").attr("height", "200%");
    filter.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "blur");
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "blur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    const g = svg.append("g");

    // Zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => g.attr("transform", event.transform));
    svg.call(zoom);

    // Initial transform to center nicely
    svg.call(zoom.transform, d3.zoomIdentity.translate(width/2, height/2).scale(1.2).translate(-width/2, -height/2));

    const simulation = d3.forceSimulation(nodesData)
      .force("link", d3.forceLink(linksData).id(d => d.id).distance(d => d.source.type === 'source' ? 100 : 50))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05));

    const getLinkColor = (d) => {
      if (d.style === 'dashed-red') return '#e11d48';
      if (d.style === 'solid-gold') return '#c8922a';
      return 'rgba(255, 255, 255, 0.3)'; // Visible against dark background
    };

    const link = g.append("g")
      .selectAll("line")
      .data(linksData)
      .join("line")
      .attr("stroke", d => getLinkColor(d))
      .attr("stroke-opacity", d => d.style === 'default' ? 0.6 : 0.8)
      .attr("stroke-width", d => d.style === 'default' ? 1 : 2)
      .attr("stroke-dasharray", d => d.style === 'dashed-red' ? "4 4" : "none");

    const getNodeColor = (type) => {
      if (type === 'concept') return '#7eb8f7';
      if (type === 'entity') return '#c8922a';
      if (type === 'source') return '#b5451b';
      return '#d1d1d1';
    };

    const node = g.append("g")
      .attr("class", "graph-node-group")
      .selectAll("g")
      .data(nodesData)
      .join("g")
      .call(drag(simulation));

    // Append circles
    node.append("circle")
      .attr("r", d => d.type === 'source' ? 8 : 4 + (d.degree || 0) * 1.2)
      .attr("fill", d => getNodeColor(d.type))
      .attr("fill-opacity", 0.9)
      .attr("stroke", "rgba(255,255,255,0.2)")
      .attr("stroke-width", 1)
      .style("filter", d => d.type === 'source' || d.enriched ? "url(#glow)" : null)
      // Hover effects
      .on("mouseover", function(event, d) {
        d3.select(this).transition().duration(200).attr("r", (d.type === 'source' ? 12 : 6 + (d.degree || 0) * 1.5));
        d3.select(this.parentNode).select("text")
           .transition().duration(200)
           .style("fill", "#fff")
           .style("font-size", d.type === 'source' ? "10px" : "8px");
      })
      .on("mouseout", function(event, d) {
        d3.select(this).transition().duration(200).attr("r", d.type === 'source' ? 8 : 4 + (d.degree || 0) * 1.2);
        d3.select(this.parentNode).select("text")
           .transition().duration(200)
           .style("fill", "rgba(255,255,255,0.5)")
           .style("font-size", d.type === 'source' ? "8px" : "6px");
      })
      .on("click", (event, d) => {
        // Compute linked pages
        const connectedLinks = linksData.filter(l => l.source.id === d.id || l.target.id === d.id);
        const linkedPages = connectedLinks.map(l => l.source.id === d.id ? l.target.label : l.source.label);
        
        // Highlight logic
        link.attr("stroke-opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1)
            .attr("stroke-width", l => (l.source.id === d.id || l.target.id === d.id) ? 2 : (l.style === 'default' ? 1 : 2));
            
        node.attr("opacity", n => {
          if (n.id === d.id) return 1;
          const isConnected = connectedLinks.some(l => l.source.id === n.id || l.target.id === n.id);
          return isConnected ? 1 : 0.2;
        });

        // Prevent event from bubbling to SVG so click doesn't immediately close
        event.stopPropagation();

        setTooltip({
          x: event.clientX,
          y: event.clientY,
          name: d.label,
          type: d.type,
          links: linkedPages,
          enriched: d.enriched
        });
      });

    // Close tooltip and restore graph visibility when clicking background
    svg.on("click", () => {
      setTooltip(null);
      link.attr("stroke-opacity", d => d.style === 'default' ? 0.6 : 0.8)
          .attr("stroke-width", d => d.style === 'default' ? 1 : 2);
      node.attr("opacity", 1);
    });

    // Append labels
    node.append("text")
      .text(d => d.label)
      .attr("y", d => (8 + (d.degree || 0) * 1.2 + 6))
      .attr("text-anchor", "middle")
      .attr("class", "graph-label")
      .style("font-size", d => d.type === 'source' ? "8px" : "6px")
      .style("font-family", "var(--mono)")
      .style("fill", "rgba(255,255,255,0.5)")
      .style("pointer-events", "none")
      .style("letter-spacing", "0.02em")
      .style("text-shadow", "0px 1px 3px rgba(0,0,0,0.8)");

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Drag interactions
    function drag(simulation) {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }
      
      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
        if(setTooltip) setTooltip(null);
      }
      
      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
      
      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    return () => {
      simulation.stop();
    };
  }, [initialNodes, links]);

  return (
    <div className="obsidian-graph-container" ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <svg ref={svgRef}></svg>
      {tooltip && (
        <div className="graph-tooltip" style={{
          position: 'fixed',
          left: tooltip.x + 15,
          top: tooltip.y + 15,
          background: 'rgba(20, 19, 18, 0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '12px 16px',
          borderRadius: '6px',
          color: '#fff',
          fontFamily: 'var(--sans)',
          pointerEvents: 'none',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          zIndex: 100,
          minWidth: '200px'
        }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
            {tooltip.type} {tooltip.enriched && <span style={{ color: 'var(--gold)' }}>✦ Enriched</span>}
          </div>
          <div style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{tooltip.name}</div>
          <div style={{ fontSize: '0.7rem', color: '#888' }}>Linked Pages ({tooltip.links.length}):</div>
          <ul style={{ paddingLeft: '14px', marginTop: '4px', marginBottom: 0, fontSize: '0.75rem', color: '#ccc' }}>
            {tooltip.links.slice(0, 5).map((l, i) => <li key={i}>{l}</li>)}
            {tooltip.links.length > 5 && <li>+ {tooltip.links.length - 5} more</li>}
          </ul>
        </div>
      )}
    </div>
  );
};
