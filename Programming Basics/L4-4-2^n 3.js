function evenOf2(input) {
    let n = Number(input[0]);
    for (let i = 0; i <= n; i += 2) {
      let a = Math.pow(2,i);
      console.log(a);
    }
}

evenOf2(["10"]);
