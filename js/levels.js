// Sistema de Níveis - Marvel Zombies Level Devil
const LEVELS = [
  // Nível 1: Tutorial
  {
      name: "Tutorial - Ruínas da Cidade",
      width: 2000,
      height: 600,
      spawn: { x: 100, y: 450 },
      goal: { x: 1800, y: 450, width: 50, height: 100 },
      platforms: [
          // Chão principal
          { x: 0, y: 550, width: 2000, height: 50, type: 'ground' },
          // Plataformas básicas para tutorial
          { x: 300, y: 450, width: 100, height: 20, type: 'platform' },
          { x: 500, y: 400, width: 100, height: 20, type: 'platform' },
          { x: 700, y: 350, width: 100, height: 20, type: 'platform' },
          { x: 900, y: 400, width: 100, height: 20, type: 'platform' },
          { x: 1100, y: 450, width: 100, height: 20, type: 'platform' },
          { x: 1300, y: 400, width: 100, height: 20, type: 'platform' },
          { x: 1500, y: 350, width: 100, height: 20, type: 'platform' }
      ],
      traps: [
          // Primeira armadilha simples
          { x: 400, y: 530, width: 50, height: 20, type: 'falling' },
          // Segunda armadilha
          { x: 800, y: 530, width: 50, height: 20, type: 'falling' }
      ],
      enemies: [
          // Zumbi básico para tutorial
          { x: 600, y: 500, type: 'zombie', speed: 1, patrol: { start: 550, end: 650 } }
      ],
      decorations: [
          { x: 200, y: 500, width: 50, height: 50, type: 'building' },
          { x: 1600, y: 500, width: 50, height: 50, type: 'building' }
      ]
  },

  // Nível 2: Introdução às Armadilhas
  {
      name: "Avenida dos Perigos",
      width: 2200,
      height: 600,
      spawn: { x: 100, y: 450 },
      goal: { x: 2000, y: 450, width: 50, height: 100 },
      platforms: [
          { x: 0, y: 550, width: 2200, height: 50, type: 'ground' },
          { x: 300, y: 450, width: 80, height: 20, type: 'platform' },
          { x: 500, y: 400, width: 80, height: 20, type: 'platform' },
          { x: 700, y: 350, width: 80, height: 20, type: 'platform' },
          { x: 1000, y: 400, width: 80, height: 20, type: 'platform' },
          { x: 1300, y: 350, width: 80, height: 20, type: 'platform' },
          { x: 1600, y: 400, width: 80, height: 20, type: 'platform' }
      ],
      traps: [
          { x: 350, y: 530, width: 40, height: 20, type: 'falling' },
          { x: 750, y: 530, width: 40, height: 20, type: 'falling' },
          { x: 1150, y: 530, width: 40, height: 20, type: 'falling' },
          { x: 1550, y: 530, width: 40, height: 20, type: 'falling' },
          // Primeiros espinhos
          { x: 900, y: 530, width: 100, height: 20, type: 'spikes' }
      ],
      enemies: [
          { x: 400, y: 500, type: 'zombie', speed: 1.2, patrol: { start: 350, end: 450 } },
          { x: 1200, y: 500, type: 'zombie', speed: 1.2, patrol: { start: 1150, end: 1250 } }
      ],
      decorations: [
          { x: 150, y: 500, width: 60, height: 50, type: 'building' },
          { x: 800, y: 500, width: 60, height: 50, type: 'building' },
          { x: 1400, y: 500, width: 60, height: 50, type: 'building' }
      ]
  },

  // Nível 3: Plataformas Móveis
  {
      name: "Plataformas Instáveis",
      width: 2400,
      height: 600,
      spawn: { x: 100, y: 450 },
      goal: { x: 2200, y: 450, width: 50, height: 100 },
      platforms: [
          { x: 0, y: 550, width: 2400, height: 50, type: 'ground' },
          // Plataformas móveis
          { x: 300, y: 450, width: 80, height: 20, type: 'moving', move: { start: 300, end: 500, axis: 'x', speed: 2 } },
          { x: 600, y: 400, width: 80, height: 20, type: 'moving', move: { start: 400, end: 600, axis: 'x', speed: 2 } },
          { x: 900, y: 350, width: 80, height: 20, type: 'moving', move: { start: 800, end: 1000, axis: 'x', speed: 2 } },
          { x: 1200, y: 400, width: 80, height: 20, type: 'moving', move: { start: 1100, end: 1300, axis: 'x', speed: 2 } },
          { x: 1500, y: 450, width: 80, height: 20, type: 'moving', move: { start: 1400, end: 1600, axis: 'x', speed: 2 } }
      ],
      traps: [
          { x: 200, y: 530, width: 50, height: 20, type: 'falling' },
          { x: 700, y: 530, width: 50, height: 20, type: 'falling' },
          { x: 1100, y: 530, width: 50, height: 20, type: 'falling' },
          { x: 1700, y: 530, width: 50, height: 20, type: 'falling' },
          { x: 500, y: 530, width: 100, height: 20, type: 'spikes' },
          { x: 1300, y: 530, width: 100, height: 20, type: 'spikes' }
      ],
      enemies: [
          { x: 400, y: 500, type: 'zombie', speed: 1.5, patrol: { start: 350, end: 450 } },
          { x: 800, y: 500, type: 'zombie', speed: 1.5, patrol: { start: 750, end: 850 } },
          { x: 1400, y: 500, type: 'zombie', speed: 1.5, patrol: { start: 1350, end: 1450 } }
      ],
      decorations: [
          { x: 100, y: 500, width: 70, height: 50, type: 'building' },
          { x: 1000, y: 500, width: 70, height: 50, type: 'building' },
          { x: 1800, y: 500, width: 70, height: 50, type: 'building' }
      ]
  },

  // Nível 4: Paredes Falsas
  {
      name: "Ilusões Mortais",
      width: 2600,
      height: 600,
      spawn: { x: 100, y: 450 },
      goal: { x: 2400, y: 450, width: 50, height: 100 },
      platforms: [
          { x: 0, y: 550, width: 2600, height: 50, type: 'ground' },
          { x: 300, y: 450, width: 100, height: 20, type: 'platform' },
          { x: 600, y: 400, width: 100, height: 20, type: 'platform' },
          { x: 900, y: 350, width: 100, height: 20, type: 'platform' },
          { x: 1200, y: 400, width: 100, height: 20, type: 'platform' },
          { x: 1500, y: 450, width: 100, height: 20, type: 'platform' },
          // Paredes falsas (visíveis mas não sólidas)
          { x: 400, y: 300, width: 50, height: 250, type: 'fake' },
          { x: 1000, y: 300, width: 50, height: 250, type: 'fake' },
          { x: 1600, y: 300, width: 50, height: 250, type: 'fake' }
      ],
      traps: [
          { x: 350, y: 530, width: 60, height: 20, type: 'falling' },
          { x: 750, y: 530, width: 60, height: 20, type: 'falling' },
          { x: 1150, y: 530, width: 60, height: 20, type: 'falling' },
          { x: 1550, y: 530, width: 60, height: 20, type: 'falling' },
          { x: 1950, y: 530, width: 60, height: 20, type: 'falling' },
          { x: 500, y: 530, width: 120, height: 20, type: 'spikes' },
          { x: 1300, y: 530, width: 120, height: 20, type: 'spikes' }
      ],
      enemies: [
          { x: 500, y: 500, type: 'zombie', speed: 1.8, patrol: { start: 450, end: 550 } },
          { x: 1100, y: 500, type: 'zombie', speed: 1.8, patrol: { start: 1050, end: 1150 } },
          { x: 1700, y: 500, type: 'zombie', speed: 1.8, patrol: { start: 1650, end: 1750 } }
      ],
      decorations: [
          { x: 200, y: 500, width: 80, height: 50, type: 'building' },
          { x: 800, y: 500, width: 80, height: 50, type: 'building' },
          { x: 1400, y: 500, width: 80, height: 50, type: 'building' },
          { x: 2000, y: 500, width: 80, height: 50, type: 'building' }
      ]
  },

  // Nível 5: Combinação de Mecânicas
  {
      name: "Cruzamento Caótico",
      width: 2800,
      height: 600,
      spawn: { x: 100, y: 450 },
      goal: { x: 2600, y: 450, width: 50, height: 100 },
      platforms: [
          { x: 0, y: 550, width: 2800, height: 50, type: 'ground' },
          // Plataformas móveis e normais combinadas
          { x: 300, y: 450, width: 80, height: 20, type: 'moving', move: { start: 300, end: 500, axis: 'x', speed: 2.5 } },
          { x: 600, y: 400, width: 80, height: 20, type: 'platform' },
          { x: 900, y: 350, width: 80, height: 20, type: 'moving', move: { start: 800, end: 1000, axis: 'x', speed: 2.5 } },
          { x: 1200, y: 400, width: 80, height: 20, type: 'platform' },
          { x: 1500, y: 450, width: 80, height: 20, type: 'moving', move: { start: 1400, end: 1600, axis: 'x', speed: 2.5 } },
          { x: 1800, y: 400, width: 80, height: 20, type: 'platform' },
          { x: 2100, y: 350, width: 80, height: 20, type: 'moving', move: { start: 2000, end: 2200, axis: 'x', speed: 2.5 } }
      ],
      traps: [
          { x: 250, y: 530, width: 70, height: 20, type: 'falling' },
          { x: 650, y: 530, width: 70, height: 20, type: 'falling' },
          { x: 1050, y: 530, width: 70, height: 20, type: 'falling' },
          { x: 1450, y: 530, width: 70, height: 20, type: 'falling' },
          { x: 1850, y: 530, width: 70, height: 20, type: 'falling' },
          { x: 2250, y: 530, width: 70, height: 20, type: 'falling' },
          { x: 450, y: 530, width: 150, height: 20, type: 'spikes' },
          { x: 1250, y: 530, width: 150, height: 20, type: 'spikes' },
          { x: 2050, y: 530, width: 150, height: 20, type: 'spikes' }
      ],
      enemies: [
          { x: 400, y: 500, type: 'zombie', speed: 2, patrol: { start: 350, end: 450 } },
          { x: 800, y: 500, type: 'zombie', speed: 2, patrol: { start: 750, end: 850 } },
          { x: 1200, y: 500, type: 'zombie', speed: 2, patrol: { start: 1150, end: 1250 } },
          { x: 1600, y: 500, type: 'zombie', speed: 2, patrol: { start: 1550, end: 1650 } },
          { x: 2000, y: 500, type: 'zombie', speed: 2, patrol: { start: 1950, end: 2050 } }
      ],
      decorations: [
          { x: 150, y: 500, width: 90, height: 50, type: 'building' },
          { x: 700, y: 500, width: 90, height: 50, type: 'building' },
          { x: 1300, y: 500, width: 90, height: 50, type: 'building' },
          { x: 1900, y: 500, width: 90, height: 50, type: 'building' }
      ]
  },

  // Níveis 6-10 continuariam com dificuldade crescente...
  // Por questões de espaço, vou incluir apenas estruturas básicas

  // Nível 6
  {
      name: "Precisão Mortal",
      width: 3000,
      height: 600,
      spawn: { x: 100, y: 450 },
      goal: { x: 2800, y: 450, width: 50, height: 100 },
      platforms: [
          { x: 0, y: 550, width: 3000, height: 50, type: 'ground' },
          // Plataformas menores para precisão
          { x: 300, y: 450, width: 60, height: 20, type: 'platform' },
          { x: 500, y: 400, width: 60, height: 20, type: 'platform' },
          { x: 700, y: 350, width: 60, height: 20, type: 'platform' },
          { x: 1000, y: 400, width: 60, height: 20, type: 'platform' },
          { x: 1300, y: 350, width: 60, height: 20, type: 'platform' },
          { x: 1600, y: 400, width: 60, height: 20, type: 'platform' },
          { x: 1900, y: 350, width: 60, height: 20, type: 'platform' },
          { x: 2200, y: 400, width: 60, height: 20, type: 'platform' },
          { x: 2500, y: 450, width: 60, height: 20, type: 'platform' }
      ],
      traps: [
          // Muitas armadilhas para precisão
          { x: 200, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 400, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 600, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 800, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 1000, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 1200, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 1400, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 1600, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 1800, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 2000, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 2200, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 2400, y: 530, width: 80, height: 20, type: 'falling' },
          { x: 2600, y: 530, width: 80, height: 20, type: 'falling' }
      ],
      enemies: [
          { x: 350, y: 500, type: 'zombie', speed: 2.2, patrol: { start: 300, end: 400 } },
          { x: 750, y: 500, type: 'zombie', speed: 2.2, patrol: { start: 700, end: 800 } },
          { x: 1150, y: 500, type: 'zombie', speed: 2.2, patrol: { start: 1100, end: 1200 } },
          { x: 1550, y: 500, type: 'zombie', speed: 2.2, patrol: { start: 1500, end: 1600 } },
          { x: 1950, y: 500, type: 'zombie', speed: 2.2, patrol: { start: 1900, end: 2000 } },
          { x: 2350, y: 500, type: 'zombie', speed: 2.2, patrol: { start: 2300, end: 2400 } }
      ],
      decorations: [
          { x: 100, y: 500, width: 100, height: 50, type: 'building' },
          { x: 900, y: 500, width: 100, height: 50, type: 'building' },
          { x: 1700, y: 500, width: 100, height: 50, type: 'building' },
          { x: 2500, y: 500, width: 100, height: 50, type: 'building' }
      ]
  },

  // Nível 7
  {
      name: "Labirinto de Armadilhas",
      width: 3200,
      height: 600,
      spawn: { x: 100, y: 450 },
      goal: { x: 3000, y: 450, width: 50, height: 100 },
      platforms: [
          { x: 0, y: 550, width: 3200, height: 50, type: 'ground' },
          // Plataformas em padrão complexo
          { x: 300, y: 450, width: 70, height: 20, type: 'moving', move: { start: 300, end: 500, axis: 'x', speed: 3 } },
          { x: 600, y: 400, width: 70, height: 20, type: 'moving', move: { start: 500, end: 700, axis: 'x', speed: 3 } },
          { x: 900, y: 350, width: 70, height: 20, type: 'moving', move: { start: 800, end: 1000, axis: 'x', speed: 3 } },
          { x: 1200, y: 400, width: 70, height: 20, type: 'moving', move: { start: 1100, end: 1300, axis: 'x', speed: 3 } },
          { x: 1500, y: 450, width: 70, height: 20, type: 'moving', move: { start: 1400, end: 1600, axis: 'x', speed: 3 } },
          { x: 1800, y: 400, width: 70, height: 20, type: 'moving', move: { start: 1700, end: 1900, axis: 'x', speed: 3 } },
          { x: 2100, y: 350, width: 70, height: 20, type: 'moving', move: { start: 2000, end: 2200, axis: 'x', speed: 3 } },
          { x: 2400, y: 400, width: 70, height: 20, type: 'moving', move: { start: 2300, end: 2500, axis: 'x', speed: 3 } },
          { x: 2700, y: 450, width: 70, height: 20, type: 'moving', move: { start: 2600, end: 2800, axis: 'x', speed: 3 } }
      ],
      traps: [
          // Armadilhas em padrão complexo
          { x: 200, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 400, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 600, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 800, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 1000, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 1200, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 1400, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 1600, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 1800, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 2000, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 2200, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 2400, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 2600, y: 530, width: 90, height: 20, type: 'falling' },
          { x: 2800, y: 530, width: 90, height: 20, type: 'falling' },
          // Muitos espinhos
          { x: 300, y: 530, width: 200, height: 20, type: 'spikes' },
          { x: 700, y: 530, width: 200, height: 20, type: 'spikes' },
          { x: 1100, y: 530, width: 200, height: 20, type: 'spikes' },
          { x: 1500, y: 530, width: 200, height: 20, type: 'spikes' },
          { x: 1900, y: 530, width: 200, height: 20, type: 'spikes' },
          { x: 2300, y: 530, width: 200, height: 20, type: 'spikes' },
          { x: 2700, y: 530, width: 200, height: 20, type: 'spikes' }
      ],
      enemies: [
          { x: 350, y: 500, type: 'zombie', speed: 2.5, patrol: { start: 300, end: 400 } },
          { x: 650, y: 500, type: 'zombie', speed: 2.5, patrol: { start: 600, end: 700 } },
          { x: 950, y: 500, type: 'zombie', speed: 2.5, patrol: { start: 900, end: 1000 } },
          { x: 1250, y: 500, type: 'zombie', speed: 2.5, patrol: { start: 1200, end: 1300 } },
          { x: 1550, y: 500, type: 'zombie', speed: 2.5, patrol: { start: 1500, end: 1600 } },
          { x: 1850, y: 500, type: 'zombie', speed: 2.5, patrol: { start: 1800, end: 1900 } },
          { x: 2150, y: 500, type: 'zombie', speed: 2.5, patrol: { start: 2100, end: 2200 } },
          { x: 2450, y: 500, type: 'zombie', speed: 2.5, patrol: { start: 2400, end: 2500 } },
          { x: 2750, y: 500, type: 'zombie', speed: 2.5, patrol: { start: 2700, end: 2800 } }
      ],
      decorations: [
          { x: 50, y: 500, width: 110, height: 50, type: 'building' },
          { x: 850, y: 500, width: 110, height: 50, type: 'building' },
          { x: 1650, y: 500, width: 110, height: 50, type: 'building' },
          { x: 2450, y: 500, width: 110, height: 50, type: 'building' }
      ]
  },

  // Nível 8: Precisão Extrema
  {
      name: "Precisão Extrema",
      width: 3400,
      height: 600,
      spawn: { x: 100, y: 450 },
      goal: { x: 3200, y: 450, width: 50, height: 100 },
      platforms: [
          { x: 0, y: 550, width: 3400, height: 50, type: 'ground' },
          // Plataformas muito pequenas para precisão extrema
          { x: 300, y: 450, width: 40, height: 20, type: 'platform' },
          { x: 500, y: 400, width: 40, height: 20, type: 'platform' },
          { x: 700, y: 350, width: 40, height: 20, type: 'platform' },
          { x: 900, y: 300, width: 40, height: 20, type: 'platform' },
          { x: 1100, y: 350, width: 40, height: 20, type: 'platform' },
          { x: 1300, y: 400, width: 40, height: 20, type: 'platform' },
          { x: 1500, y: 450, width: 40, height: 20, type: 'platform' },
          { x: 1700, y: 400, width: 40, height: 20, type: 'platform' },
          { x: 1900, y: 350, width: 40, height: 20, type: 'platform' },
          { x: 2100, y: 300, width: 40, height: 20, type: 'platform' },
          { x: 2300, y: 350, width: 40, height: 20, type: 'platform' },
          { x: 2500, y: 400, width: 40, height: 20, type: 'platform' },
          { x: 2700, y: 450, width: 40, height: 20, type: 'platform' },
          { x: 2900, y: 400, width: 40, height: 20, type: 'platform' },
          { x: 3100, y: 350, width: 40, height: 20, type: 'platform' }
      ],
      traps: [
          // Quase todo o chão é perigoso
          { x: 0, y: 530, width: 3400, height: 20, type: 'spikes' },
          // Plataformas que caem
          { x: 400, y: 450, width: 40, height: 20, type: 'falling' },
          { x: 800, y: 400, width: 40, height: 20, type: 'falling' },
          { x: 1200, y: 350, width: 40, height: 20, type: 'falling' },
          { x: 1600, y: 400, width: 40, height: 20, type: 'falling' },
          { x: 2000, y: 350, width: 40, height: 20, type: 'falling' },
          { x: 2400, y: 400, width: 40, height: 20, type: 'falling' },
          { x: 2800, y: 450, width: 40, height: 20, type: 'falling' },
          { x: 3200, y: 400, width: 40, height: 20, type: 'falling' }
      ],
      enemies: [
          { x: 350, y: 500, type: 'zombie', speed: 2.8, patrol: { start: 300, end: 400 } },
          { x: 750, y: 500, type: 'zombie', speed: 2.8, patrol: { start: 700, end: 800 } },
          { x: 1150, y: 500, type: 'zombie', speed: 2.8, patrol: { start: 1100, end: 1200 } },
          { x: 1550, y: 500, type: 'zombie', speed: 2.8, patrol: { start: 1500, end: 1600 } },
          { x: 1950, y: 500, type: 'zombie', speed: 2.8, patrol: { start: 1900, end: 2000 } },
          { x: 2350, y: 500, type: 'zombie', speed: 2.8, patrol: { start: 2300, end: 2400 } },
          { x: 2750, y: 500, type: 'zombie', speed: 2.8, patrol: { start: 2700, end: 2800 } },
          { x: 3150, y: 500, type: 'zombie', speed: 2.8, patrol: { start: 3100, end: 3200 } }
      ],
      decorations: [
          { x: 0, y: 500, width: 120, height: 50, type: 'building' },
          { x: 1000, y: 500, width: 120, height: 50, type: 'building' },
          { x: 2000, y: 500, width: 120, height: 50, type: 'building' },
          { x: 3000, y: 500, width: 120, height: 50, type: 'building' }
      ]
  },

  // Nível 9: Quebra-Cabeças de Timing
  {
      name: "Timing Perfeito",
      width: 3600,
      height: 600,
      spawn: { x: 100, y: 450 },
      goal: { x: 3400, y: 450, width: 50, height: 100 },
      platforms: [
          { x: 0, y: 550, width: 3600, height: 50, type: 'ground' },
          // Plataformas com timing complexo
          { x: 300, y: 450, width: 60, height: 20, type: 'moving', move: { start: 300, end: 500, axis: 'x', speed: 3.5 } },
          { x: 600, y: 400, width: 60, height: 20, type: 'moving', move: { start: 500, end: 700, axis: 'x', speed: 3.5 } },
          { x: 900, y: 350, width: 60, height: 20, type: 'moving', move: { start: 800, end: 1000, axis: 'x', speed: 3.5 } },
          { x: 1200, y: 300, width: 60, height: 20, type: 'moving', move: { start: 1100, end: 1300, axis: 'x', speed: 3.5 } },
          { x: 1500, y: 350, width: 60, height: 20, type: 'moving', move: { start: 1400, end: 1600, axis: 'x', speed: 3.5 } },
          { x: 1800, y: 400, width: 60, height: 20, type: 'moving', move: { start: 1700, end: 1900, axis: 'x', speed: 3.5 } },
          { x: 2100, y: 450, width: 60, height: 20, type: 'moving', move: { start: 2000, end: 2200, axis: 'x', speed: 3.5 } },
          { x: 2400, y: 400, width: 60, height: 20, type: 'moving', move: { start: 2300, end: 2500, axis: 'x', speed: 3.5 } },
          { x: 2700, y: 350, width: 60, height: 20, type: 'moving', move: { start: 2600, end: 2800, axis: 'x', speed: 3.5 } },
          { x: 3000, y: 300, width: 60, height: 20, type: 'moving', move: { start: 2900, end: 3100, axis: 'x', speed: 3.5 } },
          { x: 3300, y: 350, width: 60, height: 20, type: 'moving', move: { start: 3200, end: 3400, axis: 'x', speed: 3.5 } }
      ],
      traps: [
          // Armadilhas sincronizadas
          { x: 200, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 400, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 600, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 800, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 1000, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 1200, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 1400, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 1600, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 1800, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 2000, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 2200, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 2400, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 2600, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 2800, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 3000, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 3200, y: 530, width: 100, height: 20, type: 'falling' },
          { x: 3400, y: 530, width: 100, height: 20, type: 'falling' },
          // Espinhos em padrão
          { x: 250, y: 530, width: 250, height: 20, type: 'spikes' },
          { x: 650, y: 530, width: 250, height: 20, type: 'spikes' },
          { x: 1050, y: 530, width: 250, height: 20, type: 'spikes' },
          { x: 1450, y: 530, width: 250, height: 20, type: 'spikes' },
          { x: 1850, y: 530, width: 250, height: 20, type: 'spikes' },
          { x: 2250, y: 530, width: 250, height: 20, type: 'spikes' },
          { x: 2650, y: 530, width: 250, height: 20, type: 'spikes' },
          { x: 3050, y: 530, width: 250, height: 20, type: 'spikes' },
          { x: 3450, y: 530, width: 250, height: 20, type: 'spikes' }
      ],
      enemies: [
          { x: 350, y: 500, type: 'zombie', speed: 3, patrol: { start: 300, end: 400 } },
          { x: 650, y: 500, type: 'zombie', speed: 3, patrol: { start: 600, end: 700 } },
          { x: 950, y: 500, type: 'zombie', speed: 3, patrol: { start: 900, end: 1000 } },
          { x: 1250, y: 500, type: 'zombie', speed: 3, patrol: { start: 1200, end: 1300 } },
          { x: 1550, y: 500, type: 'zombie', speed: 3, patrol: { start: 1500, end: 1600 } },
          { x: 1850, y: 500, type: 'zombie', speed: 3, patrol: { start: 1800, end: 1900 } },
          { x: 2150, y: 500, type: 'zombie', speed: 3, patrol: { start: 2100, end: 2200 } },
          { x: 2450, y: 500, type: 'zombie', speed: 3, patrol: { start: 2400, end: 2500 } },
          { x: 2750, y: 500, type: 'zombie', speed: 3, patrol: { start: 2700, end: 2800 } },
          { x: 3050, y: 500, type: 'zombie', speed: 3, patrol: { start: 3000, end: 3100 } },
          { x: 3350, y: 500, type: 'zombie', speed: 3, patrol: { start: 3300, end: 3400 } }
      ],
      decorations: [
          { x: 0, y: 500, width: 130, height: 50, type: 'building' },
          { x: 1000, y: 500, width: 130, height: 50, type: 'building' },
          { x: 2000, y: 500, width: 130, height: 50, type: 'building' },
          { x: 3000, y: 500, width: 130, height: 50, type: 'building' }
      ]
  },

  // Nível 10: Boss Final
  {
      name: "Confronto Final - Zumbi Hulk",
      width: 4000,
      height: 600,
      spawn: { x: 100, y: 450 },
      goal: { x: 3800, y: 450, width: 50, height: 100 },
      platforms: [
          { x: 0, y: 550, width: 4000, height: 50, type: 'ground' },
          // Plataformas para a batalha final
          { x: 300, y: 450, width: 100, height: 20, type: 'platform' },
          { x: 600, y: 400, width: 100, height: 20, type: 'platform' },
          { x: 900, y: 350, width: 100, height: 20, type: 'platform' },
          { x: 1200, y: 400, width: 100, height: 20, type: 'platform' },
          { x: 1500, y: 450, width: 100, height: 20, type: 'platform' },
          { x: 1800, y: 400, width: 100, height: 20, type: 'platform' },
          { x: 2100, y: 350, width: 100, height: 20, type: 'platform' },
          { x: 2400, y: 400, width: 100, height: 20, type: 'platform' },
          { x: 2700, y: 450, width: 100, height: 20, type: 'platform' },
          { x: 3000, y: 400, width: 100, height: 20, type: 'platform' },
          { x: 3300, y: 350, width: 100, height: 20, type: 'platform' },
          { x: 3600, y: 400, width: 100, height: 20, type: 'platform' }
      ],
      traps: [
          // Armadilhas finais
          { x: 200, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 400, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 600, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 800, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 1000, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 1200, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 1400, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 1600, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 1800, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 2000, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 2200, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 2400, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 2600, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 2800, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 3000, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 3200, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 3400, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 3600, y: 530, width: 120, height: 20, type: 'falling' },
          { x: 3800, y: 530, width: 120, height: 20, type: 'falling' },
          // Espinhos por toda parte
          { x: 0, y: 530, width: 4000, height: 20, type: 'spikes' }
      ],
      enemies: [
          // Boss final - Zumbi Hulk
          { x: 2000, y: 500, type: 'boss', speed: 1.5, patrol: { start: 1500, end: 2500 }, health: 5 },
          // Zumbis normais em maior número
          { x: 500, y: 500, type: 'zombie', speed: 3.5, patrol: { start: 450, end: 550 } },
          { x: 1000, y: 500, type: 'zombie', speed: 3.5, patrol: { start: 950, end: 1050 } },
          { x: 1500, y: 500, type: 'zombie', speed: 3.5, patrol: { start: 1450, end: 1550 } },
          { x: 2500, y: 500, type: 'zombie', speed: 3.5, patrol: { start: 2450, end: 2550 } },
          { x: 3000, y: 500, type: 'zombie', speed: 3.5, patrol: { start: 2950, end: 3050 } },
          { x: 3500, y: 500, type: 'zombie', speed: 3.5, patrol: { start: 3450, end: 3550 } }
      ],
      decorations: [
          { x: 0, y: 500, width: 150, height: 50, type: 'building' },
          { x: 1000, y: 500, width: 150, height: 50, type: 'building' },
          { x: 2000, y: 500, width: 150, height: 50, type: 'building' },
          { x: 3000, y: 500, width: 150, height: 50, type: 'building' }
      ]
  }
];

// Comentários sobre design de nível:
/*
Nível 1 (Tutorial): 
- Introduz mecânicas básicas de movimento e pulo
- Poucas armadilhas e apenas um inimigo
- Plataformas espaçadas para prática

Nível 2 (Avenida dos Perigos):
- Introduz espinhos como nova armadilha
- Mais inimigos para praticar esquiva
- Plataformas um pouco mais desafiadoras

Nível 3 (Plataformas Instáveis):
- Introduz plataformas móveis
- Requer timing para pular entre plataformas
- Velocidade dos inimigos aumenta

Nível 4 (Ilusões Mortais):
- Introduz paredes falsas (visíveis mas não sólidas)
- Testa atenção do jogador
- Mais armadilhas para evitar

Nível 5 (Cruzamento Caótico):
- Combina todas as mecânicas anteriores
- Velocidade aumenta significativamente
- Requer tomada de decisão rápida

Nível 6 (Precisão Mortal):
- Foca em plataformas pequenas
- Requer pulos precisos
- Muitas armadilhas no chão

Nível 7 (Labirinto de Armadilhas):
- Padrão complexo de plataformas móveis
- Quase todo o chão é perigoso
- Muitos inimigos para desviar

Nível 8 (Precisão Extrema):
- Plataformas mínimas para pulos extremos
- Timing perfeito necessário
- Velocidade máxima dos inimigos

Nível 9 (Timing Perfeito):
- Sincronização complexa de plataformas
- Padrões de armadilhas sincronizadas
- Teste final de habilidades

Nível 10 (Confronto Final):
- Boss com mais saúde
- Todas as mecânicas combinadas
- Cenário mais desafiador com muitas armadilhas
*/