module.exports = [
    // Menentukan jenis file dan sumber tipe CommonJS
    {
      files: ["**/*.js"],
      languageOptions: { sourceType: "commonjs" },
    },
  
    // Menambahkan variabel global untuk browser
    {
      languageOptions: { globals: require("globals").browser },
    },
  
    // Menyertakan aturan dari plugin @eslint/js
    require("@eslint/js").configs.recommended,
  
    // Menambahkan konfigurasi dari Airbnb
    {
      extends: ["airbnb-base"],
      env: {
        browser: true,
        node: true,
      },
      rules: {
      },
    },
  ];
  