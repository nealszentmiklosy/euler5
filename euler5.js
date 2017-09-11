let n = 6;
function isDivisible(numerator){
	let d = 2
	while(d<=3){
		while(numerator%d==0){
			d++
		}
		return false
	}
	return true
}
console.log(isDivisible(n))