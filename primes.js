var v = 3;
var a = [2];
function prime(n) {
	let isprime = true;
	for (let i = 0; i < a.length; i++) {
		if (n % a[i] == 0 && n != a[i]) {
			isprime = false;
			break;
		}
	}
	if (isprime && !a.includes(n)) {
		a = a.concat(n);
	}
	return isprime;
}
for (let j = 3; j < 10000000; j++) {
	prime(j);
}
