const nilaiSiswa = {
   matematika: 80,
   bahasaIndonesia: 94,
   bahasaInggris: 82,
   ipa: 68
}

const validasiInput = (nilaiSiswa) => {
   if (typeof nilaiSiswa !== "object") return false

   const nilaiValid = Object.values(nilaiSiswa).every(nilai => {
      const kondisi = typeof nilai === 'number'
      const kondisi2 = nilai !== null && nilai !== undefined
      const kondisi3 = nilai >= 0

      return kondisi && kondisi2 && kondisi3
   })

   return nilaiValid
}


const cetakHasil = (nilaiSiswa) => {
   const { matematika, bahasaIndonesia, bahasaInggris, ipa } = nilaiSiswa
   const rerata = (matematika + bahasaIndonesia + bahasaInggris + ipa) / 4
   let grade

   if(rerata >= 90) {
      grade = 'A'
   } else if(rerata >= 80) {
      grade = 'B'
   } else if(rerata >= 70) {
      grade = 'C'
   } else if(rerata >= 60) {
      grade = 'D'
   } else {
      grade = 'E'
   }

   console.log(`Rata-rata = ${rerata}\nGrade = ${grade}`)
}

const hitungNilaiRerataUjian = (nilaiSiswa) => {
   const nilaiValid = validasiInput(nilaiSiswa)

   if(!nilaiValid) {
      console.log('Pastikan anda sudah menginput nilai dengan benar')
      return
   }

   cetakHasil(nilaiSiswa)
}

// Test invalid input type
hitungNilaiRerataUjian('ini bukan object')

// Test invalid input type in object
hitungNilaiRerataUjian({ pesan: 'ini bukan nilai angka (invalid)' })

// Test valid input
hitungNilaiRerataUjian(nilaiSiswa)