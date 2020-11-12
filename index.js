class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-'\s]/gi, '');
  }

  static titleize(string) {
    const ignored = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'and', 'from'];
    return this.capitalize(string)
      .split(' ')
      .map((word) => (ignored.includes(word) ? word : this.capitalize(word)))
      .join(' ');
  }
}
