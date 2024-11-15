// // scripts.js

// function toggleNavbar() {
//     const navbarLinks = document.getElementById('navbarLinks');
//     navbarLinks.classList.toggle('active');
// }

// document.addEventListener('DOMContentLoaded', function() {
//     // Grafik awal untuk setiap fungsi
//     const initialLinearData = {
//         labels: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
//         datasets: [{
//             label: 'Fungsi Linear: y = 2x + 3',
//             data: [-7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13],
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 2,
//             fill: false
//         }]
//     };

//     const initialRasionalData = {
//         labels: Array.from({ length: 100 }, (_, i) => i - 50), // x dari -50 sampai 49
//         datasets: [{
//             label: 'Fungsi Rasional',
//             data: Array(100).fill(0),
//             borderColor: 'rgba(75, 192, 192, 1)',
//             fill: false,
//             tension: 0.1
//         }]
//     };
    
//     // Grafik awal untuk fungsi irasional
//     const initialIrasionalData = {
//         labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//         datasets: [{
//             label: 'Fungsi Irasional: y = √(x + 1)',
//             data: [1, 1.41, 1.73, 2, 2.24, 2.45, 2.65, 2.83, 3, 3.16, 3.32],
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 2,
//             fill: false
//         }]
//     };

//     // Fungsi untuk membuat grafik
//     function createChart(ctx, data) {
//         return new Chart(ctx, {
//             type: 'line',
//             data: data,
//             options: {
//                 scales: {
//                     x: {
//                         beginAtZero: true
//                     },
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
//     }

//     // Inisialisasi grafik
//     const ctxLinear = document.getElementById('grafik-linear').getContext('2d');
//     const chartLinear = createChart(ctxLinear, initialLinearData);

//     const ctxRasional = document.getElementById('grafik-rasional').getContext('2d');
//     const chartRasional = createChart(ctxRasional, initialRasionalData);

//     const ctxIrasional = document.getElementById('grafik-irasional').getContext('2d');
//     const chartIrasional = createChart(ctxIrasional, initialIrasionalData);

//     // Fungsi untuk memperbarui grafik linear
//     window.updateLinearGraph = function() {
//         const input = document.getElementById('linear-function').value;
//         if (input) {
//             try {
//                 const newData = initialLinearData.labels.map(x => math.evaluate(input.replace(/x/g, `(${x})`)));
//                 chartLinear.data.datasets[0].data = newData;
//                 chartLinear.data.datasets[0].label = `Fungsi Linear: y = ${input}`;
//                 chartLinear.update();
//             } catch (error) {
//                 alert('Masukkan fungsi yang valid.');
//             }
//         }
//     };

//     // Fungsi untuk memperbarui grafik rasional
//     // Fungsi untuk memperbarui grafik fungsi rasional
//     window.updateRasionalGraph = function() {
//         const a = parseFloat(document.getElementById('a1').value);
//         const b = parseFloat(document.getElementById('b1').value);
//         const c = parseFloat(document.getElementById('c1').value);
//         const d = parseFloat(document.getElementById('d1').value);
//         const e = parseFloat(document.getElementById('e1').value);
//         const f = parseFloat(document.getElementById('f1').value);
    
//         if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f)) {
//             try {
//                 const numerator = `${a}*x^2 + ${b}*x + ${c}`;
//                 const denominator = `${d}*x^2 + ${e}*x + ${f}`;
//                 const newData = initialRasionalData.labels.map(x => {
//                     try {
//                         return math.evaluate(`(${numerator}) / (${denominator})`, { x });
//                     } catch {
//                         return NaN;
//                     }
//                 });
//                 chartRasional.data.datasets[0].data = newData;
//                 chartRasional.data.datasets[0].label = `Fungsi Rasional: (${numerator}) / (${denominator})`;
//                 chartRasional.update();
//             } catch (error) {
//                 console.error(error);
//                 alert('Masukkan fungsi yang valid.');
//             }
//         } else {
//             alert('Masukkan nilai yang valid untuk semua koefisien.');
//         }
//     };

//     // Fungsi untuk memperbarui grafik irasional
//     window.updateIrasionalGraph = function() {
//         const input = document.getElementById('irasional-function').value;
//         if (input) {
//             try {
//                 const newData = initialIrasionalData.labels.map(x => math.evaluate(input.replace(/x/g, `(${x})`)));
//                 chartIrasional.data.datasets[0].data = newData;
//                 chartIrasional.data.datasets[0].label = `Fungsi Irasional: y = ${input}`;
//                 chartIrasional.update();
//             } catch (error) {
//                 alert('Masukkan fungsi yang valid.');
//             }
//         }
//     };
// });

// // Fungsi untuk menyelesaikan persamaan linear
// // Fungsi untuk menyelesaikan persamaan linear
// window.solveLinear = function() {
//     const a = parseFloat(document.getElementById('linear-a').value);
//     const b = parseFloat(document.getElementById('linear-b').value);
//     if (!isNaN(a) && !isNaN(b)) {
//         // Menghitung x dari persamaan ax + b = 0
//         const x = -b / a;
//         document.getElementById('linear-solution').innerText = `Solusi: x = ${x}`;
//     } else {
//         alert('Masukkan nilai a dan b yang valid.');
//     }
// };

// // Fungsi untuk menyelesaikan persamaan rasional
// window.solveRasional4 = function() {
//     const a = parseFloat(document.getElementById('a4').value);
//     const b = parseFloat(document.getElementById('b4').value);
//     const c = parseFloat(document.getElementById('c4').value);
//     const d = parseFloat(document.getElementById('d4').value);

//     let roots = [];

//     // Menghitung akar untuk pembilang
//     if (a !== 0) {
//         // Jika a tidak 0, hitung akar linear
//         roots = [-b / a];
//     } else {
//         if (b !== 0) {
//             roots = [0]; // Jika pembilang adalah konstanta non-nol
//         } else {
//             alert('Pembilang adalah konstanta nol.');
//             return;
//         }
//     }

//     // Menghitung posisi asimtot
//     let verticalAsymptote = null;
//     if (c !== 0) {
//         verticalAsymptote = -d / c;
//     } else {
//         if (d !== 0) {
//             verticalAsymptote = 0; // Jika penyebut adalah konstanta non-nol
//         } else {
//             alert('Penyebut tidak boleh nol.');
//             return;
//         }
//     }

//     document.getElementById('rasional-solution-4').innerText = `Akar: ${roots.length > 0 ? roots.join(', ') : 'Tidak ada akar'}, Asimtot Vertikal: x = ${verticalAsymptote}`;
// };

// window.solveRasional5 = function() {
//     const a = parseFloat(document.getElementById('a5').value);
//     const b = parseFloat(document.getElementById('b5').value);
//     const c = parseFloat(document.getElementById('c5').value);
//     const d = parseFloat(document.getElementById('d5').value);
//     const e = parseFloat(document.getElementById('e5').value);

//     let roots = [];

//     // Menghitung akar untuk pembilang
//     if (a !== 0) {
//         // Persamaan kuadrat: ax^2 + bx + c = 0
//         const discriminant = b * b - 4 * a * c;
//         if (discriminant > 0) {
//             roots.push((-b + Math.sqrt(discriminant)) / (2 * a));
//             roots.push((-b - Math.sqrt(discriminant)) / (2 * a));
//         } else if (discriminant === 0) {
//             roots.push(-b / (2 * a));
//         } else {
//             roots.push('Akar kompleks');
//         }
//     } else if (b !== 0) {
//         // Persamaan linear: bx + c = 0
//         roots.push(-c / b);
//     } else if (c !== 0) {
//         roots.push('Tidak ada akar'); // Pembilang adalah konstanta non-nol
//     } else {
//         alert('Pembilang adalah konstanta nol.');
//         return;
//     }

//     // Menghitung posisi asimtot
//     let verticalAsymptote = null;
//     if (d !== 0) {
//         verticalAsymptote = -e / d;
//     } else {
//         if (e !== 0) {
//             verticalAsymptote = 0; // Penyebut adalah konstanta non-nol
//         } else {
//             alert('Penyebut tidak boleh nol.');
//             return;
//         }
//     }

//     document.getElementById('rasional-solution-5').innerText = `Akar: ${roots.join(', ')}, Asimtot Vertikal: x = ${verticalAsymptote}`;
// };


// document.addEventListener('DOMContentLoaded', function() {
//     window.solveRasional = function() {
//         // Mengambil nilai dari input
//         const a = parseFloat(document.getElementById('a').value);
//         const b = parseFloat(document.getElementById('b').value);
//         const c = parseFloat(document.getElementById('c').value);
//         const d = parseFloat(document.getElementById('d').value);
//         const e = parseFloat(document.getElementById('e').value);
//         const f = parseFloat(document.getElementById('f').value);

//         // Debugging: Log nilai koefisien
//         console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}, e: ${e}, f: ${f}`);

//         // Memeriksa validitas input
//         if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f)) {
//             try {
//                 // Menghitung akar dari P(x) = ax^2 + bx + c = 0
//                 const discriminant = b * b - 4 * a * c; // Menghitung diskriminan

//                 let roots;
//                 if (discriminant > 0) {
//                     // Dua akar berbeda
//                     const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//                     const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//                     roots = [root1, root2];
//                 } else if (discriminant === 0) {
//                     // Satu akar ganda
//                     const root = -b / (2 * a);
//                     roots = [root];
//                 } else {
//                     // Tidak ada akar real
//                     roots = [];
//                 }

//                 // Memeriksa nilai dari Q(x) pada akar-akar P(x)
//                 const validRoots = roots.filter(root => {
//                     const qValue = d * root * root + e * root + f; // Hitung Q(root)
//                     return qValue !== 0; // Pastikan Q(root) tidak sama dengan nol
//                 });

//                 // Menampilkan solusi
//                 const solution = validRoots.length > 0 ? `x = ${validRoots.join(', ')}` : 'Tidak ada solusi real yang valid (Q(x) = 0).';
//                 document.getElementById('rasional-solution').innerText = `Solusi: ${solution}`;

//                 // Menghitung asimtot
//                 const verticalAsymptotes = calculateVerticalAsymptotes(d, e, f);
//                 const horizontalAsymptote = calculateHorizontalAsymptote(a, d);
//                 document.getElementById('asimtot-solution').innerText = `Asimtot Vertikal: ${verticalAsymptotes.join(', ')}; Asimtot Horizontal: y = ${horizontalAsymptote}`;
//             } catch (error) {
//                 console.error('Error calculating the roots:', error);
//                 alert('Terjadi kesalahan dalam menyelesaikan persamaan.');
//             }
//         } else {
//             alert('Masukkan nilai yang valid untuk semua koefisien.');
//         }
//     };

//     function calculateVerticalAsymptotes(d, e, f) {
//         const roots = [];
//         if (d !== 0) {
//             // Menghitung akar dari Q(x) = dx^2 + ex + f = 0
//             const discriminant = e * e - 4 * d * f;
//             if (discriminant > 0) {
//                 const root1 = (-e + Math.sqrt(discriminant)) / (2 * d);
//                 const root2 = (-e - Math.sqrt(discriminant)) / (2 * d);
//                 roots.push(root1, root2);
//             } else if (discriminant === 0) {
//                 const root = -e / (2 * d);
//                 roots.push(root);
//             }
//         }
//         return roots.length > 0 ? roots : ['Tidak ada asimtot vertikal'];
//     }

//     function calculateHorizontalAsymptote(a, d) {
//         if (a === 0) {
//             return 0; // Asimtot horizontal y = 0
//         } else if (d === 0) {
//             return 'Tidak ada asimtot horizontal'; // Derajat pembilang lebih tinggi
//         } else {
//             return a / d; // y = a / d
//         }
//     }
// });





// // Fungsi untuk menyelesaikan persamaan irasional
// window.solveIrasional = function() {
//     const a = parseFloat(document.getElementById('irasional-a').value);
//     const b = parseFloat(document.getElementById('irasional-b').value);
//     if (!isNaN(a) && !isNaN(b)) {
//         // Menghitung solusi dari √(ax + b) = 0, berarti ax + b = 0
//         const x = -b / a;
//         document.getElementById('irasional-solution').innerText = `Solusi: x = ${x}`;
//     } else {
//         alert('Masukkan nilai a dan b yang valid.');
//     }
// };
