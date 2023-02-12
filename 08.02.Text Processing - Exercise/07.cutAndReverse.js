function cutAndReverse(str) {
    let reversed = str.split('').reverse().join('');
    console.log(reversed.slice(reversed.length / 2));
    console.log(reversed.slice(0, reversed.length / 2));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('_________');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');