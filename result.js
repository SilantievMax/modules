import * as moduleOne from "./moduleOne.js";
import * as moduleTwo from "./moduleTwo.js";

const str1 =
  "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";
const str2 =
  "Вот пример строки, в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.";
const str3 = "Текст, в котором слово текст несколько раз встречается и слово тоже.";

const a =
  "7983577598237509273059298347502798357759823750927305929834750279835345234952394529345238721948571908745082345234523452345234523452934570293452345234577598237509273052345345345929834750279835775982375092730592983475079835775982375092730592983475027983577598237509273059298347502798353452349523945293452387219485719087450823452345234523452345234529345702934523452345775982375092730523453453459298347502798357759823750927305929834750";
const b =
  "92385482375823598236459872635923854823758235982364598726359238548237582323412345293457293745092734509273405972923453872430918723545983452435729752934579238475928345245734523645987268983592385482375823598236459872639";

// const a = '12345678901234567890'
// const b = '98765432109876543210'

console.log("ModuleOne:");
console.log("module 1 result", "_______________");
console.log(moduleOne.lowercaseStrings("maXiM"));
console.log("module 2 result", "_______________");
console.log(moduleOne.spaceBarInstallation(str1));
console.log("module 3 result", "_______________");
console.log(moduleOne.wordCount(str2));
console.log("module 4 result", "_______________");
console.log(moduleOne.uniqueWords(str3))

console.log("\n\n");

console.log("ModuleTwo:");
console.log("module 1 result", "_______________");
console.log(moduleTwo.summation(a, b));
console.log("module 2 result", "_______________");
console.log(moduleTwo.subtraction(a, b));
console.log("module 3 result", "_______________");
console.log(moduleTwo.multiplications(a, b));
console.log("module 4 result", "_______________");
console.log(moduleTwo.division(a, b));
