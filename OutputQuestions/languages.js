const config = {
    languages: [],
    set language(lang) {
      return this.languages.push(lang);
    },
  };
  
  console.log(config.language);

    // A: function language(lang) { this.languages.push(lang }
    // B: 0
    // C: []
    // D: undefined
    // Answer
    
    // Answer: D
    // The language method is a setter. Setters don't hold an actual value, their purpose is to modify properties. When calling a setter method, undefined gets returned.