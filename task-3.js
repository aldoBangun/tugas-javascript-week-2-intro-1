const printSegitiga = panjang => {
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

printSegitiga(5)