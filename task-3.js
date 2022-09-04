const validasiInput = input => {
   let error

   if (typeof input !== 'number') return 'Hanya menerima parameter bertipe number'
   if (input <= 0) return 'Angka harus lebih besar dari 0'

   return null
}

const printSegitiga = panjang => {
   const inputError = validasiInput(panjang)

   if (inputError) return console.log(inputError)

   let hasil = ''   

   for(let i=panjang; i>=1; i--) {
      for(let j=1; j<=i; j++) {
         hasil += j
      }

      // Tidak menambahkan baris baru diakhir perulangan
      if(i!=1) {
         hasil += '\n'
      }
   }

   console.log(hasil)
}

// Test invalid input type
printSegitiga('5')

// Test invalid input size
printSegitiga(-1)

// Test valid input
printSegitiga(5)