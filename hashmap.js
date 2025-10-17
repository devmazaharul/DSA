let arr=new Array(20)

const arrofstring="amr sonar bangla ami tomai vlobashi chirodin tomar akash"
const arr2=arrofstring.split(" ")


for (let i = 0; i < arr.length; i++) {
    arr[i]=arr2[i] ?? "null"+i
}

console.log(arr)