let n = 2520;
let d = 2;
while(d<=20){
if(n%d==0){
	d++
} else{
	d=2
	n++
}
}
console.log(n)
console.log(d-1)