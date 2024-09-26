db.faq_category.updateMany(
  { name: "produk dan stock" },
  {
    $addToSet: {
      faqs: {
        $each: [
          ObjectId(""), 
          ObjectId("")  
        ]
      }
    }
  }
)

db.faq_category.updateMany(
  { name: "Pembayaran dan Keuangan" },
  {
    $addToSet: {
      faqs: {
        $each: [
          ObjectId(""),
          ObjectId("")  
        ]
      }
    }
  }
)

db.faq_category.updateMany(
  { name: "Pengelolaan Karyawan dan Akses" },
  {
    $addToSet: {
      faqs: {
        $each: [
          ObjectId(""), 
          ObjectId("")  
        ]
      }
    }
  }
)

db.faq_category.updateMany(
  { name: "Laporan dan Audit" },
  {
    $addToSet: {
      faqs: {
        $each: [
          ObjectId(""), 
          ObjectId("")  
        ]
      }
    }
  }
)

db.faq_category.updateMany(
  { name: "Pengaturan Akun dan Pengguna" },
  {
    $addToSet: {
      faqs: {
        $each: [
          ObjectId(""), 
          ObjectId("")  
        ]
      }
    }
  }
)

db.faq_category.updateMany(
  { name: "Pengaturan Sistem dan Perangkat" },
  {
    $addToSet: {
      faqs: {
        $each: [
          ObjectId(""), 
          ObjectId("")  
        ]
      }
    }
  }
)

db.faq_category.updateMany(
  { name: "Promosi dan Diskon" },
  {
    $addToSet: {
      faqs: {
        $each: [
          ObjectId(""), 
          ObjectId("")  
        ]
      }
    }
  }
)

db.faq_category.updateMany(
  { name: "CRM dan Aplikasi Mobile" },
  {
    $addToSet: {
      faqs: {
        $each: [
          ObjectId(""), 
          ObjectId("")  
        ]
      }
    }
  }
)

db.faq_category.updateMany(
  { name: "Berlangganan dan Informasi Perusahaan" },
  {
    $addToSet: {
      faqs: {
        $each: [
          ObjectId(""), 
          ObjectId("")  
        ]
      }
    }
  }
)

db.faq_category.updateMany( 
  { name: "Produk dan Stock" }, /* Sesuaikan dengan yang ada di database*/ 
  { $addToSet: { faqs: { $each: [ ObjectId("5e26c9f62da44968cc46444c"), /* cara menambahkan produk*/ 
      ObjectId("5e26c9f62da44968cc464459"), /* cara melakukan retur barang dari supplier*/ 
      "4qjQej547wRyutYJCVlO", /* cara import breakdown sebagai string*/ 
      ObjectId("5e26c9f62da44968cc464455") /* cara menginputkan data pembelian dari supplier (purchasing)*/
  ] } } } )

  db.faq_category.updateMany(
    { name: "Pembayaran dan Keuangan" },
    {
      $addToSet: {
        faqs: {
          $each: [
            "R3Y8wneBvlN8NG6G5w5j",
            ObjectId("5e26c9f62da44968cc464461"),
            ObjectId("5e26c9f62da44968cc464462")
          ]
        }
      }
    }
  )