  const paragraph = document.getElementById('paragraph');

  const words = paragraph.innerHTML.split(' ');
  const highlightedWords = words.map(word => {
      if (word.length > 8) {
          return `<span class="highlight">${word}</span>`;
      }
      return word; 
  });

  paragraph.innerHTML = highlightedWords.join(' ');