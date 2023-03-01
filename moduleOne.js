export const lowercaseStrings = (str) => {
  const toLC = str.toLowerCase();
  return toLC[0].toUpperCase() + toLC.slice(1);
};

export const spaceBarInstallation = (str) => {
  let proposal = str;

  const assemblyToString = (str, punctuationMarks) => {
    if (punctuationMarks === " ")
      return str
        .split(punctuationMarks)
        .filter((e) => e != false)
        .map((e) => e.trim())
        .join(" ");

    return str
      .split(punctuationMarks)
      .map((e) => e.trim())
      .join(punctuationMarks + " ");
  };

  proposal = assemblyToString(proposal, ",");
  proposal = assemblyToString(proposal, ".");
  return assemblyToString(proposal, " ");
};

export const wordCount = (str) => {
  return str.split(" ").length;
};

export const uniqueWords = (str) => {
  const unicWords = {};
  const arrWords = [];
  const arr = str.split(" ").map((e) => e.toLowerCase().replace(",", "").replace(".", ""));
  arr.forEach((e) => {
    if (e in unicWords) return (unicWords[e] += 1);
    unicWords[e] = 1;
  });

  for (let key in unicWords) {
    arrWords.push(`${key} - ${unicWords[key]} ${unicWords[key] === 1 ? "раз" : "раза"}`);
  }

  return arrWords.join(", ");
};
