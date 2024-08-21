if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function (searchElement) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === searchElement) {
          return true;
        }
      }

      return false;
    };
  }

  const names = ["manik", "suman", "malati"];
  const nums = [4, 6, 5, 44, 55];

  console.log(names.includes("manik")); // true
  console.log(names.includes("vivek")); // false
  console.log(nums.includes(3)); // false
  console.log(nums.includes(44)); // true



