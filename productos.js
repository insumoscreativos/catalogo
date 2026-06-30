const myProducts = [

            { 
                sku: "TICA0", 
                name: "Lanyard Porta-Celular corto", 
                price: 790, 
                desc: "Lanyard Porta-Celular corto de poliéster liso negro, con terminación de eco-cuero negro + mosquetón metálico + placa porta-celular de PVC negro.<br><br><strong>Tamaño:</strong> Lanyard: largo total 86 cm (doble * 43 cm) / ancho: 2cm <br><strong>Placa:</strong> 6 x 4 cm / Largo total: 54.7 cm.<br><strong>Peso:</strong> 10g.<br><strong>Colores:</strong> Negro.<br><strong>Sugerencia de Impresión:</strong> Serigrafía sobre el lanyard de poliéster.<br><strong>Ancho Lanyard:</strong> 2 cm.<br><strong>Material:</strong> Poliéster, PU, Acero Inoxidable<br><br><strong class='text-red-600'>𝐌𝐢́𝐧𝐢𝐦𝐨 𝟏𝟐 𝐮𝐧𝐢𝐝𝐚𝐝𝐞𝐬.</strong>", 
                category: ["LANYARDS E IDENTIFICACIÓN", "ACCESORIOS CELULAR"], 
                images: ["A0-001.jpg", "A0-002.jpg", "A0-003.jpg", "A0-004.jpg", "A0-005.jpg", "A0-006.jpg"] 
            },
            { 
                sku: "TICH48", 
                name: "Brasero / Parrilla para Carbón o Leña", 
                price: 74900, 
                desc: "Brasero / Parrilla para Carbón o Leña, de Acero negro.<br><br><strong>Altura para cocinar:</strong> 31cm.<br><strong>Rejilla cromada:</strong> 51 x 51 x 4mm.<br><strong>Rejilla para carbón:</strong> 34 x 34cm x 3.5mm.<br><strong>Tapa con rejilla:</strong> 52 x 52 x 8.5cm.<br><strong>Bowl para fuego:</strong> 57 x 57 x 11.5cm.<br><strong>Patas:</strong> 7 x 7 x 29.5cm.<br><strong>Tamaño total:</strong> 81 x 81 x 44 cm.<br><strong>Peso:</strong> 12.5 kg.<br><strong>Material:</strong> Acero inoxidable.<br><strong>Sugerencia:</strong> Grabado Láser.<br><br>Incluye Manual instructivo de armado en español.", 
                category: ["DESTACADOS", "INVIERNO"], 
                images: ["H48-1.jpeg", "H48-2.jpeg", "H48-3.jpeg", "H48-4.jpeg"] 
            },
            { 
                sku: "TICH49", 
                name: "Chimenea de Exterior para Carbón o Leña", 
                price: 49900, 
                desc: "Chimenea de Exterior, para Carbón o Leña, de Acero negro. Con 3 compartimentos: inferior para almacenaje de leña o carbón, medio para hacer fuego, superior para tiraje de humo. Fácil de armar y transportar.<br><br><strong>Tamaño:</strong> 40 x 40 x 120 cm.<br><strong>Peso:</strong> 10.4 kg.<br><strong>Material:</strong> Acero inoxidable.<br><strong>Sugerencia:</strong> Grabado Láser.<br><br>Incluye Manual instructivo de armado en español.", 
                category: ["DESTACADOS", "INVIERNO"], 
                images:["H49-1-900x900.jpg","H49-2-900x900.jpg","H49-3-900x900.jpg","H49-4-900x900.jpg"] 
            },
            { 
                sku: "TICH39", 
                name: "Chimenea de Exterior para Carbón o Leña", 
                price: 79900, 
                desc: "Chimenea de Exterior, para Carbón o Leña, de Acero negro. Con 3 compartimentos: inferior para almacenaje de leña o carbón, medio para hacer fuego, superior para tiraje de humo. Fácil de armar y transportar.<br><br><strong>Tamaño:</strong> Diámetro 45 x H 134 cm.<br><strong>Peso:</strong> 9.3 kg.<br><strong>Material:</strong> Acero inoxidable.<br><strong>Color:</strong> Negro.<br><br>Fácil de armar y transportar.", 
                category: ["DESTACADOS", "INVIERNO"], 
                images: ["H39-01.jpg", "H39-02.jpg", "H39-03.jpg"] 
            }
];
myProducts.forEach(p=>{p._name=p.name.toLowerCase();p._sku=p.sku.toLowerCase();});
