document.addEventListener('DOMContentLoaded', () => {
    const calculatorGrid = document.getElementById('calculator-grid');
    if (!calculatorGrid) return; // Sadece hesaplama sayfasında çalışmasını sağla

    const formulas = [
    {
      title: 'Poisson\'s Ratio (General)',
      inputs: ['Transverse Strain', 'Axial Strain'],
      calculate: (inputs) => {
        const [transverse, axial] = inputs.map(parseFloat);
        if (axial === 0) return 'Axial Strain cannot be zero.';
        return -transverse / axial;
      },
      formulaText: 'ν = -ε_trans / ε_axial'
    },
    {
      title: 'Young\'s Modulus (Elasticity)',
      inputs: ['Stress (σ)', 'Strain (ε)'],
      calculate: (inputs) => {
        const [stress, strain] = inputs.map(parseFloat);
        if (strain === 0) return 'Strain cannot be zero.';
        return stress / strain;
      },
      formulaText: 'E = σ / ε'
    },
    {
        title: 'Shear Modulus (Rigidity)',
        inputs: ['Shear Stress (τ)', 'Shear Strain (γ)'],
        calculate: (inputs) => {
            const [stress, strain] = inputs.map(parseFloat);
            if (strain === 0) return 'Shear Strain cannot be zero.';
            return stress / strain;
        },
        formulaText: 'G = τ / γ'
    },
    {
        title: 'Bulk Modulus',
        inputs: ['Pressure (P)', 'Volumetric Strain (ΔV/V)'],
        calculate: (inputs) => {
            const [pressure, volStrain] = inputs.map(parseFloat);
            if (volStrain === 0) return 'Volumetric Strain cannot be zero.';
            return pressure / volStrain;
        },
        formulaText: 'K = P / (ΔV/V)'
    },
    {
        title: 'Strain (ε)',
        inputs: ['Change in Length (ΔL)', 'Original Length (L₀)'],
        calculate: (inputs) => {
            const [deltaL, initialL] = inputs.map(parseFloat);
            if (initialL === 0) return 'Original Length cannot be zero.';
            return deltaL / initialL;
        },
        formulaText: 'ε = ΔL / L₀'
    },
    {
        title: 'Stress (σ)',
        inputs: ['Force (F)', 'Area (A)'],
        calculate: (inputs) => {
            const [force, area] = inputs.map(parseFloat);
            if (area === 0) return 'Area cannot be zero.';
            return force / area;
        },
        formulaText: 'σ = F / A'
    },
    {
        title: 'Relation 1: E, G, ν',
        inputs: ['Shear Modulus (G)', 'Poisson\'s Ratio (ν)'],
        calculate: (inputs) => {
            const [g, v] = inputs.map(parseFloat);
            return 2 * g * (1 + v);
        },
        formulaText: 'E = 2G(1 + ν)'
    },
    {
        title: 'Relation 2: E, K, ν',
        inputs: ['Bulk Modulus (K)', 'Poisson\'s Ratio (ν)'],
        calculate: (inputs) => {
            const [k, v] = inputs.map(parseFloat);
            return 3 * k * (1 - 2 * v);
        },
        formulaText: 'E = 3K(1 - 2ν)'
    },
    {
        title: 'Re-entrant Honeycomb Poisson\'s Ratio',
        inputs: ['h/l ratio', 'Angle θ (degrees)'],
        calculate: (inputs) => {
            const [h_l_ratio, theta_deg] = inputs.map(parseFloat);
            const theta_rad = theta_deg * (Math.PI / 180);
            const sin_theta = Math.sin(theta_rad);
            const cos_theta = Math.cos(theta_rad);
            if (sin_theta === 0) return 'Sine of the angle cannot be zero.';
            return (h_l_ratio + sin_theta) * sin_theta / (cos_theta * cos_theta);
        },
        formulaText: 'ν_yx = (h/l + sinθ)sinθ / cos²θ'
    },
    {
        title: 'Re-entrant Honeycomb Young\'s Modulus',
        inputs: ['h/l ratio', 'Angle θ (degrees)', 'Solid Modulus (Es)', 't/l ratio'],
        calculate: (inputs) => {
            const [h_l_ratio, theta_deg, es, t_l_ratio] = inputs.map(parseFloat);
            const theta_rad = theta_deg * (Math.PI / 180);
            const sin_theta = Math.sin(theta_rad);
            const cos_theta = Math.cos(theta_rad);
            if(cos_theta === 0 || sin_theta === 0) return 'Angle cannot be 0 or 90 degrees.';
            return (es * Math.pow(t_l_ratio, 3) * cos_theta) / ((h_l_ratio + sin_theta) * sin_theta * sin_theta);
        },
        formulaText: 'E_y = E_s(t/l)³ cosθ / [(h/l + sinθ)sin²θ]'
    }
    ];

    formulas.forEach((formula, i) => {
        const card = document.createElement('div');
        card.className = 'card';

        let inputHTML = '';
        formula.inputs.forEach((label, j) => {
            const inputId = `input-${i}-${j}`;
            inputHTML += `
                <div class="input-group">
                    <label for="${inputId}">${label}:</label>
                    <input type="number" id="${inputId}" placeholder="Enter ${label}">
                </div>
            `;
        });

        card.innerHTML = `
            <h3>${formula.title}</h3>
            <p class="formula-text"><i>${formula.formulaText}</i></p>
            <div class="inputs-container">${inputHTML}</div>
            <button id="btn-${i}">Calculate</button>
            <p class="error" id="error-${i}"></p>
            <p class="result" id="result-${i}"></p>
        `;

        calculatorGrid.appendChild(card);

        const calculateButton = document.getElementById(`btn-${i}`);
        calculateButton.addEventListener('click', () => {
            const inputValues = formula.inputs.map((_, j) => {
                return document.getElementById(`input-${i}-${j}`).value;
            });

            const errorP = document.getElementById(`error-${i}`);
            const resultP = document.getElementById(`result-${i}`);
            errorP.textContent = '';
            resultP.textContent = '';

            if (inputValues.some(val => val === '')) {
                errorP.textContent = 'Please fill in all input fields.';
                return;
            }
            if (inputValues.some(val => isNaN(parseFloat(val)))) {
                errorP.textContent = 'Please enter valid numbers.';
                return;
            }

            const calculationResult = formula.calculate(inputValues);

            if (typeof calculationResult === 'string') {
                errorP.textContent = calculationResult;
            } else {
                resultP.textContent = `Result: ${calculationResult.toFixed(4)}`;
            }
        });
    });
});
