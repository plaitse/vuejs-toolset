new Vue ({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack() {
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits monster for ${damage}`
      });
      if (this.checkWin()) return;
      this.monsterAttacks();
    },
    specialAttack() {
      let damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits monster hard for ${damage}`
      });
      if (this.checkWin()) return;
      this.monsterAttacks();
    },
    heal() {
      this.playerHealth <= 90 ? this.playerHealth += 10 : this.playerHealth = 100;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });
      this.monsterAttacks();
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    monsterAttacks() {
      let damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits player for ${damage}`
      });
      this.checkWin();
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        confirm('You won! New game?') ? this.startGame() : this.gameIsRunning = false;
        return true;
      } else if (this.playerHealth <= 0) {
        confirm('You lost! New game?') ? this.startGame() : this.gameIsRunning = false;
        return true;
      }
      return false;
    }
  }
});