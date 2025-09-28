// Marvel Zombies Level Devil - Engine Principal
class MarvelZombiesGame {
  constructor() {
      this.canvas = document.getElementById('game-canvas');
      this.ctx = this.canvas.getContext('2d');
      
      // Configurações do jogo
      this.gameState = 'menu'; // menu, playing, paused, gameover, victory
      this.currentLevel = 0;
      this.lives = 3;
      this.score = 0;
      this.soundEnabled = true;
      
      // Controles
      this.keys = {};
      this.setupEventListeners();
      this.setupMobileControls();
      // Sistema de salvamento
      this.loadGame();
      
      // Inicialização
      this.resizeCanvas();
      this.setupScreens();
      this.createLevelButtons();
      
      // Loop do jogo
      this.lastTime = 0;
      this.gameLoop = this.gameLoop.bind(this);
      requestAnimationFrame(this.gameLoop);
  }
  
  setupEventListeners() {
      // Teclado
      window.addEventListener('keydown', (e) => {
          this.keys[e.key] = true;
          
          // Atalhos globais
          if (e.key === 'r' || e.key === 'R') {
              this.restartLevel();
          }
          if (e.key === 'm' || e.key === 'M') {
              this.toggleSound();
          }
          if (e.key === 'Escape') {
              this.togglePause();
          }
      });
      
      window.addEventListener('keyup', (e) => {
          this.keys[e.key] = false;
      });
      
      // Redimensionamento
      window.addEventListener('resize', () => {
          this.resizeCanvas();
      });
  }
  
  setupScreens() {
      // Menu principal
      document.getElementById('start-game').addEventListener('click', () => {
          this.startGame();
      });
      
      document.getElementById('level-select').addEventListener('click', () => {
          this.showLevelSelect();
      });
      
      document.getElementById('toggle-sound').addEventListener('click', () => {
          this.toggleSound();
      });
      
      // Seleção de nível
      document.getElementById('back-to-menu').addEventListener('click', () => {
          this.showMenu();
      });
      
      // Jogo
      document.getElementById('restart-level').addEventListener('click', () => {
          this.restartLevel();
      });
      
      document.getElementById('pause-game').addEventListener('click', () => {
          this.togglePause();
      });
      
      // Pausa
      document.getElementById('resume-game').addEventListener('click', () => {
          this.togglePause();
      });
      
      document.getElementById('menu-from-pause').addEventListener('click', () => {
          this.showMenu();
      });
      
      // Game Over
      document.getElementById('restart-after-gameover').addEventListener('click', () => {
          this.restartGame();
      });
      
      document.getElementById('menu-after-gameover').addEventListener('click', () => {
          this.showMenu();
      });
      
      // Vitória
      document.getElementById('restart-after-victory').addEventListener('click', () => {
          this.restartGame();
      });
      
      document.getElementById('menu-after-victory').addEventListener('click', () => {
          this.showMenu();
      });
  }

  setupMobileControls() {
    // Elementos dos botões
    this.leftBtn = document.getElementById('left-btn');
    this.rightBtn = document.getElementById('right-btn');
    this.jumpBtn = document.getElementById('jump-btn');
    
    // Eventos para botão esquerdo
    this.leftBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.keys['ArrowLeft'] = true;
    });
    
    this.leftBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        this.keys['ArrowLeft'] = false;
    });
    
    // Eventos para botão direito
    this.rightBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.keys['ArrowRight'] = true;
    });
    
    this.rightBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        this.keys['ArrowRight'] = false;
    });
    
    // Eventos para botão de pulo
    this.jumpBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.keys['ArrowUp'] = true;
    });
    
    this.jumpBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        this.keys['ArrowUp'] = false;
    });
    
    // Prevenir comportamento padrão do navegador
    document.addEventListener('touchmove', (e) => {
        if (e.target.classList.contains('control-btn')) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Detectar se é dispositivo mobile
    this.isMobile = this.detectMobile();
}

detectMobile() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}
  
  createLevelButtons() {
      const container = document.getElementById('level-buttons');
      container.innerHTML = '';
      
      for (let i = 0; i < LEVELS.length; i++) {
          const button = document.createElement('button');
          button.className = 'level-btn';
          button.textContent = i + 1;
          
          // Verificar se o nível está desbloqueado
          const completedLevels = this.getCompletedLevels();
          if (i === 0 || completedLevels.includes(i - 1)) {
              button.classList.add('unlocked');
          }
          
          if (completedLevels.includes(i)) {
              button.classList.add('completed');
          }
          
          button.addEventListener('click', () => {
              if (button.classList.contains('unlocked')) {
                  this.startLevel(i);
              }
          });
          
          container.appendChild(button);
      }
  }
  
  resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      
      if (this.player) {
          this.camera.x = this.player.x - this.canvas.width / 2;
      }
  }
  
  showScreen(screenName) {
    // Esconder todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostrar tela específica
    document.getElementById(screenName).classList.add('active');
    this.gameState = screenName.replace('-screen', '');
    
    // Mostrar/ocultar controles mobile
    this.toggleMobileControls();
}

toggleMobileControls() {
    const mobileControls = document.getElementById('mobile-controls');
    if (this.gameState === 'playing' && this.isMobile) {
        mobileControls.style.display = 'flex';
    } else {
        mobileControls.style.display = 'none';
    }
}
  
  showMenu() {
      this.showScreen('menu');
      this.createLevelButtons();
  }
  
  showLevelSelect() {
      this.showScreen('level-select-screen');
  }
  
  startGame() {
      this.currentLevel = 0;
      this.lives = 3;
      this.score = 0;
      this.startLevel(this.currentLevel);
  }
  
  startLevel(levelIndex) {
      this.currentLevel = levelIndex;
      this.loadLevel(LEVELS[levelIndex]);
      this.showScreen('game-screen');
      this.gameState = 'playing';
      this.updateHUD();
      this.toggleMobileControls();
  }
  
  loadLevel(levelData) {
      this.level = JSON.parse(JSON.stringify(levelData)); // Deep copy
      this.player = new Player(this.level.spawn.x, this.level.spawn.y);
      this.camera = { x: 0, y: 0 };
      this.enemies = [];
      this.traps = [];
      this.platforms = [];
      
      // Processar elementos do nível
      this.level.platforms.forEach(platform => {
          this.platforms.push(new Platform(platform));
      });
      
      this.level.traps.forEach(trap => {
          this.traps.push(new Trap(trap));
      });
      
      this.level.enemies.forEach(enemy => {
          this.enemies.push(new Enemy(enemy));
      });
  }
  
  gameLoop(timestamp) {
      const deltaTime = timestamp - this.lastTime;
      this.lastTime = timestamp;
      
      // Limpar canvas
      this.ctx.fillStyle = '#1a1a2e';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      
      if (this.gameState === 'playing') {
          this.update(deltaTime);
          this.render();
      }
      
      requestAnimationFrame(this.gameLoop);
  }
  
  update(deltaTime) {
      if (!this.player) return;
      
      // Atualizar jogador
      this.player.update(deltaTime, this.keys, this.platforms);
      
      // Atualizar câmera
      this.camera.x = this.player.x - this.canvas.width / 2;
      this.camera.y = 0; // Câmera fixa no eixo Y para plataforma 2D
      
      // Limitar câmera aos limites do nível
      this.camera.x = Math.max(0, Math.min(this.camera.x, this.level.width - this.canvas.width));
      
      // Atualizar inimigos
      this.enemies.forEach(enemy => {
          enemy.update(deltaTime, this.player, this.platforms);
          
          // Verificar colisão com jogador
          if (this.checkCollision(this.player, enemy)) {
              this.playerTakeDamage();
          }
      });
      
      // Atualizar armadilhas
      this.traps.forEach(trap => {
          trap.update(deltaTime);
          
          // Verificar colisão com jogador
          if (this.checkCollision(this.player, trap) && trap.isActive) {
              this.playerTakeDamage();
          }
      });
      
      // Verificar se caiu no vazio
      if (this.player.y > this.level.height) {
          this.playerDie();
      }
      
      // Verificar objetivo
      if (this.checkCollision(this.player, this.level.goal)) {
          this.levelComplete();
      }
  }
  
  render() {
      if (!this.player) return;
      
      // Aplicar transformação da câmera
      this.ctx.save();
      this.ctx.translate(-this.camera.x, -this.camera.y);
      
      // Renderizar fundo (céu noturno com estrelas)
      this.renderBackground();
      
      // Renderizar plataformas
      this.platforms.forEach(platform => {
          platform.render(this.ctx);
      });
      
      // Renderizar armadilhas
      this.traps.forEach(trap => {
          trap.render(this.ctx);
      });
      
      // Renderizar inimigos
      this.enemies.forEach(enemy => {
          enemy.render(this.ctx);
      });
      
      // Renderizar jogador
      this.player.render(this.ctx);
      
      // Renderizar objetivo
      this.renderGoal();
      
      // Renderizar decorações
      this.renderDecorations();
      
      this.ctx.restore();
      
      // Renderizar HUD (sobre a câmera)
      this.renderHUD();
  }
  
  renderBackground() {
      // Céu gradiente
      const gradient = this.ctx.createLinearGradient(0, 0, 0, this.level.height);
      gradient.addColorStop(0, '#0c1445');
      gradient.addColorStop(1, '#1a1a2e');
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.level.width, this.level.height);
      
      // Estrelas (simples)
      this.ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 100; i++) {
          const x = (i * 123) % this.level.width;
          const y = (i * 57) % (this.level.height / 2);
          const size = Math.random() * 1.5;
          this.ctx.fillRect(x, y, size, size);
      }
      
      // Lua
      this.ctx.fillStyle = '#cccccc';
      this.ctx.beginPath();
      this.ctx.arc(this.level.width - 100, 80, 40, 0, Math.PI * 2);
      this.ctx.fill();
  }
  
  renderGoal() {
      const goal = this.level.goal;
      this.ctx.fillStyle = '#00ff00';
      this.ctx.fillRect(goal.x, goal.y, goal.width, goal.height);
      
      // Bandeira
      this.ctx.fillStyle = '#ff0000';
      this.ctx.beginPath();
      this.ctx.moveTo(goal.x + goal.width, goal.y);
      this.ctx.lineTo(goal.x + goal.width, goal.y - 30);
      this.ctx.lineTo(goal.x + goal.width - 20, goal.y - 15);
      this.ctx.closePath();
      this.ctx.fill();
  }
  
  renderDecorations() {
      if (!this.level.decorations) return;
      
      this.level.decorations.forEach(decoration => {
          this.ctx.fillStyle = '#333333';
          this.ctx.fillRect(decoration.x, decoration.y, decoration.width, decoration.height);
          
          // Janelas
          this.ctx.fillStyle = '#ffff00';
          for (let i = 0; i < 3; i++) {
              for (let j = 0; j < 2; j++) {
                  this.ctx.fillRect(
                      decoration.x + 10 + i * 15,
                      decoration.y + 10 + j * 15,
                      8, 8
                  );
              }
          }
      });
  }
  
  renderHUD() {
      // Fundo do HUD
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      this.ctx.fillRect(10, 10, 200, 80);
      this.ctx.strokeStyle = '#ff0000';
      this.ctx.strokeRect(10, 10, 200, 80);
      
      // Texto do HUD
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = '16px Arial';
      this.ctx.fillText(`Nível: ${this.currentLevel + 1}`, 20, 30);
      this.ctx.fillText(`Vidas: ${this.lives}`, 20, 50);
      this.ctx.fillText(`Pontuação: ${this.score}`, 20, 70);
  }
  
  updateHUD() {
      document.getElementById('current-level').textContent = this.currentLevel + 1;
      document.getElementById('lives').textContent = this.lives;
      document.getElementById('score').textContent = this.score;
  }
  
  checkCollision(obj1, obj2) {
      return obj1.x < obj2.x + obj2.width &&
             obj1.x + obj1.width > obj2.x &&
             obj1.y < obj2.y + obj2.height &&
             obj1.y + obj1.height > obj2.y;
  }
  
  playerTakeDamage() {
      if (this.player.isInvulnerable) return;
      
      this.lives--;
      this.updateHUD();
      
      if (this.lives <= 0) {
          this.playerDie();
      } else {
          this.player.respawn(this.level.spawn.x, this.level.spawn.y);
          // Efeito de invulnerabilidade temporária
          this.player.isInvulnerable = true;
          setTimeout(() => {
              this.player.isInvulnerable = false;
          }, 2000);
      }
  }
  
  playerDie() {
      this.lives = 0;
      this.updateHUD();
      this.showGameOver();
  }
  
  levelComplete() {
      this.score += (this.currentLevel + 1) * 100;
      this.updateHUD();
      
      // Salvar progresso
      this.saveProgress();
      
      if (this.currentLevel < LEVELS.length - 1) {
          this.currentLevel++;
          this.startLevel(this.currentLevel);
      } else {
          this.showVictory();
      }
  }
  
  showGameOver() {
      document.getElementById('final-score').textContent = this.score;
      this.showScreen('game-over-screen');
  }
  
  showVictory() {
      document.getElementById('victory-score').textContent = this.score;
      this.showScreen('victory-screen');
  }
  
  restartLevel() {
      this.lives = Math.max(this.lives, 1); // Garantir pelo menos 1 vida
      this.startLevel(this.currentLevel);
  }
  
  restartGame() {
      this.currentLevel = 0;
      this.lives = 3;
      this.score = 0;
      this.startLevel(this.currentLevel);
  }
  
  togglePause() {
      if (this.gameState === 'playing') {
          this.showScreen('pause-screen');
      } else if (this.gameState === 'paused') {
          this.showScreen('game-screen');
          this.gameState = 'playing';
      }
  }
  
  toggleSound() {
      this.soundEnabled = !this.soundEnabled;
      const button = document.getElementById('toggle-sound');
      button.textContent = this.soundEnabled ? '🔊 Som Ligado' : '🔇 Som Desligado';
  }
  
  // Sistema de salvamento
  saveProgress() {
      const progress = {
          currentLevel: this.currentLevel,
          lives: this.lives,
          score: this.score,
          completedLevels: this.getCompletedLevels()
      };
      
      if (!progress.completedLevels.includes(this.currentLevel)) {
          progress.completedLevels.push(this.currentLevel);
      }
      
      localStorage.setItem('marvelZombiesProgress', JSON.stringify(progress));
  }
  
  loadGame() {
      const saved = localStorage.getItem('marvelZombiesProgress');
      if (saved) {
          const progress = JSON.parse(saved);
          this.currentLevel = progress.currentLevel || 0;
          this.lives = progress.lives || 3;
          this.score = progress.score || 0;
      }
  }
  
  getCompletedLevels() {
      const saved = localStorage.getItem('marvelZombiesProgress');
      if (saved) {
          const progress = JSON.parse(saved);
          return progress.completedLevels || [];
      }
      return [];
  }
}

// Classe do Jogador (Homem-Aranha)
class Player {
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 40;
      this.height = 60;
      this.velocityX = 0;
      this.velocityY = 0;
      this.speed = 5;
      this.jumpForce = -15;
      this.gravity = 0.8;
      this.isOnGround = false;
      this.facing = 'right';
      this.isInvulnerable = false;
      this.invulnerableTimer = 0;
      
      // Estados de animação
      this.state = 'idle';
      this.animationTimer = 0;
  }
  
  update(deltaTime, keys, platforms) {
      // Movimento horizontal
      this.velocityX = 0;
      if (keys['ArrowLeft']) {
          this.velocityX = -this.speed;
          this.facing = 'left';
          this.state = 'running';
      } else if (keys['ArrowRight']) {
          this.velocityX = this.speed;
          this.facing = 'right';
          this.state = 'running';
      } else {
          this.state = 'idle';
      }
      
      // Pulo
      if (keys['ArrowUp'] && this.isOnGround) {
          this.velocityY = this.jumpForce;
          this.isOnGround = false;
          this.state = 'jumping';
      }
      
      // Aplicar gravidade
      this.velocityY += this.gravity;
      
      // Atualizar posição
      this.x += this.velocityX;
      this.y += this.velocityY;
      
      // Verificar colisões com plataformas
      this.isOnGround = false;
      for (const platform of platforms) {
          if (platform.type === 'fake') continue; // Ignorar paredes falsas
          
          if (this.checkPlatformCollision(platform)) {
              // Colisão vertical
              if (this.velocityY > 0 && this.y + this.height > platform.y && this.y < platform.y) {
                  this.y = platform.y - this.height;
                  this.velocityY = 0;
                  this.isOnGround = true;
              }
              // Colisão horizontal
              else if (this.velocityX !== 0) {
                  if (this.velocityX > 0 && this.x + this.width > platform.x && this.x < platform.x) {
                      this.x = platform.x - this.width;
                  } else if (this.velocityX < 0 && this.x < platform.x + platform.width && this.x + this.width > platform.x + platform.width) {
                      this.x = platform.x + platform.width;
                  }
              }
          }
      }
      
      // Atualizar temporizador de invulnerabilidade
      if (this.isInvulnerable) {
          this.invulnerableTimer += deltaTime;
          if (this.invulnerableTimer > 2000) {
              this.isInvulnerable = false;
              this.invulnerableTimer = 0;
          }
      }
      
      // Atualizar animação
      this.animationTimer += deltaTime;
  }
  
  checkPlatformCollision(platform) {
      return this.x < platform.x + platform.width &&
             this.x + this.width > platform.x &&
             this.y < platform.y + platform.height &&
             this.y + this.height > platform.y;
  }
  
  render(ctx) {
      // Efeito de piscar quando invulnerável
      if (this.isInvulnerable && Math.floor(this.invulnerableTimer / 100) % 2 === 0) {
          return;
      }
      
      ctx.save();
      
      // Desenhar Homem-Aranha (simplificado)
      // Corpo (vermelho)
      ctx.fillStyle = '#ff0000';
      ctx.fillRect(this.x, this.y, this.width, this.height);
      
      // Detalhes azuis
      ctx.fillStyle = '#0000ff';
      ctx.fillRect(this.x, this.y, this.width, 10); // Máscara
      ctx.fillRect(this.x, this.y + this.height - 15, this.width, 15); // Calças
      
      // Olhos brancos
      ctx.fillStyle = '#ffffff';
      if (this.facing === 'right') {
          ctx.fillRect(this.x + 25, this.y + 5, 10, 5);
          ctx.fillRect(this.x + 10, this.y + 5, 10, 5);
      } else {
          ctx.fillRect(this.x + 5, this.y + 5, 10, 5);
          ctx.fillRect(this.x + 20, this.y + 5, 10, 5);
      }
      
      // Teias (detalhes)
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(this.x + this.width / 2, this.y + 10);
      ctx.lineTo(this.x + this.width / 2, this.y + this.height - 15);
      ctx.stroke();
      
      ctx.restore();
  }
  
  respawn(x, y) {
      this.x = x;
      this.y = y;
      this.velocityX = 0;
      this.velocityY = 0;
  }
}

// Classe de Plataforma
class Platform {
  constructor(data) {
      Object.assign(this, data);
      this.originalX = data.x;
      this.originalY = data.y;
      this.moveDirection = 1;
  }
  
  update(deltaTime) {
      if (this.type === 'moving') {
          // Movimento horizontal
          if (this.move.axis === 'x') {
              this.x += this.move.speed * this.moveDirection;
              
              if (this.x >= this.move.end || this.x <= this.move.start) {
                  this.moveDirection *= -1;
              }
          }
      }
  }
  
  render(ctx) {
      if (this.type === 'fake') {
          // Plataforma falsa (semissólida)
          ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      } else {
          // Plataforma normal
          ctx.fillStyle = '#8B4513'; // Marrom
          ctx.strokeStyle = '#654321'; // Marrom escuro
      }
      
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.strokeRect(this.x, this.y, this.width, this.height);
      
      // Textura de madeira
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      for (let i = 1; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y + (this.height / 3) * i);
          ctx.lineTo(this.x + this.width, this.y + (this.height / 3) * i);
          ctx.stroke();
      }
  }
}

// Classe de Armadilha
class Trap {
  constructor(data) {
      Object.assign(this, data);
      this.isActive = true;
      this.fallTimer = 0;
      this.falling = false;
  }
  
  update(deltaTime) {
      if (this.type === 'falling') {
          this.fallTimer += deltaTime;
          
          // Piscar antes de cair
          if (this.fallTimer > 2000 && !this.falling) {
              this.falling = true;
              this.fallTimer = 0;
          }
          
          // Cair
          if (this.falling) {
              this.y += 5;
              
              // Reset após cair muito
              if (this.y > 600) {
                  this.y = this.originalY || 530;
                  this.falling = false;
                  this.fallTimer = 0;
              }
          }
      }
  }
  
  render(ctx) {
      if (this.type === 'falling') {
          // Plataforma que cai (pisca quando prestes a cair)
          if (this.fallTimer > 1500 && !this.falling && Math.floor(this.fallTimer / 100) % 2 === 0) {
              ctx.fillStyle = '#ff0000';
          } else {
              ctx.fillStyle = '#ff6666';
          }
      } else if (this.type === 'spikes') {
          // Espinhos
          ctx.fillStyle = '#666666';
      }
      
      ctx.fillRect(this.x, this.y, this.width, this.height);
      
      // Desenhar espinhos
      if (this.type === 'spikes') {
          ctx.fillStyle = '#333333';
          const spikeWidth = this.width / 5;
          for (let i = 0; i < 5; i++) {
              ctx.beginPath();
              ctx.moveTo(this.x + i * spikeWidth, this.y + this.height);
              ctx.lineTo(this.x + (i + 0.5) * spikeWidth, this.y);
              ctx.lineTo(this.x + (i + 1) * spikeWidth, this.y + this.height);
              ctx.closePath();
              ctx.fill();
          }
      }
  }
}

// Classe de Inimigo (Zumbi)
class Enemy {
  constructor(data) {
      Object.assign(this, data);
      this.width = 40;
      this.height = 60;
      this.velocityX = this.speed;
      this.direction = 1;
      this.detectionRange = 200;
      this.attackRange = 50;
      this.health = this.type === 'boss' ? 5 : 1;
      this.isBoss = this.type === 'boss';
  }
  
  update(deltaTime, player, platforms) {
      // IA simples: patrulha ou persegue
      const distanceToPlayer = Math.abs(player.x - this.x);
      
      if (distanceToPlayer < this.detectionRange) {
          // Perseguir jogador
          this.direction = player.x > this.x ? 1 : -1;
          this.velocityX = this.speed * this.direction;
      } else {
          // Patrulha
          if (this.x >= this.patrol.end) {
              this.direction = -1;
          } else if (this.x <= this.patrol.start) {
              this.direction = 1;
          }
          this.velocityX = this.speed * this.direction;
      }
      
      // Aplicar movimento
      this.x += this.velocityX;
      
      // Verificar colisões com plataformas (simplificado)
      for (const platform of platforms) {
          if (this.checkPlatformCollision(platform)) {
              if (this.velocityX > 0) {
                  this.x = platform.x - this.width;
                  this.direction = -1;
              } else if (this.velocityX < 0) {
                  this.x = platform.x + platform.width;
                  this.direction = 1;
              }
          }
      }
  }
  
  checkPlatformCollision(platform) {
      return this.x < platform.x + platform.width &&
             this.x + this.width > platform.x &&
             this.y < platform.y + platform.height &&
             this.y + this.height > platform.y;
  }
  
  render(ctx) {
      // Desenhar zumbi
      if (this.isBoss) {
          // Boss (Zumbi Hulk - verde)
          ctx.fillStyle = '#00ff00';
      } else {
          // Zumbi normal (verde pálido)
          ctx.fillStyle = '#669966';
      }
      
      ctx.fillRect(this.x, this.y, this.width, this.height);
      
      // Detalhes
      ctx.fillStyle = '#000000';
      ctx.fillRect(this.x + 10, this.y + 15, 5, 5); // Olho esquerdo
      ctx.fillRect(this.x + 25, this.y + 15, 5, 5); // Olho direito
      
      // Sangue/boca
      ctx.fillStyle = '#ff0000';
      ctx.fillRect(this.x + 15, this.y + 25, 10, 5);
      
      // Braços estendidos
      ctx.fillStyle = this.isBoss ? '#00ff00' : '#669966';
      ctx.fillRect(this.x - 10, this.y + 10, 10, 10);
      ctx.fillRect(this.x + this.width, this.y + 10, 10, 10);
      
      // Barra de vida (apenas para boss)
      if (this.isBoss) {
          ctx.fillStyle = '#ff0000';
          ctx.fillRect(this.x, this.y - 10, this.width, 5);
          ctx.fillStyle = '#00ff00';
          ctx.fillRect(this.x, this.y - 10, this.width * (this.health / 5), 5);
      }
  }
  
  takeDamage() {
      this.health--;
      return this.health <= 0;
  }
}

// Inicializar o jogo quando a página carregar
window.addEventListener('load', () => {
  new MarvelZombiesGame();
});