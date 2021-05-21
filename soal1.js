const generate = (limit) => {
    let diamond = "";
    // ===== atas =====
    for (let i=1; i <= limit/2 ; i++) {
        // segitiga 1
        for (let j=1; j <= limit/2-i+1; j++) {
            diamond += "-";
        }
        // segitiga 2
        for (let k=1; k <= 2*i-1; k++) {
            if (k == 1 || k == 2*i-1) {
                diamond += "=";
            } else {
                diamond += "-";
            }
        }
        // segitiga 3
        for (let l=1; l <= limit/2-i+1; l++) {
            diamond += "-";
        }

        diamond += "\n";
    }
    // ===== bawah =====
    for (let i = limit/2+1; i>1 ; i--) {
        // segitiga 1
        for (j=1; j <= limit/2-i+1; j++) {
            diamond += "-";
        }
        // segitiga 2
        for (let k=1; k <= 2*i-2; k++) {
            if (k == 1 || k == 2*i-2) {
                diamond += "=";
            } else {
                diamond += "-";
            }
        }
        // segitiga 3
        for (let l=1; l <= limit/2-i+1; l++) {
            diamond += "-";
        }
        
        diamond += "\n";
    }
    
    return diamond;
}

console.log(generate(11));