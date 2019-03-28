export const mixin = {
  computed: {
    reverseAndCount() {
      const reversed = this.text.split('').reverse().join('');
      const length = this.text.length;
      return { reversed, length };
    }
  },
}
