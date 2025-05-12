<script>
    document.addEventListener('DOMContentLoaded', () => {
        const quantityControls = document.querySelectorAll('.quantity-controls');
        
        quantityControls.forEach(control => {
            const decreaseBtn = control.querySelector('.decrease');
            const increaseBtn = control.querySelector('.increase');
            const quantityDisplay = control.querySelector('.quantity');
            
            decreaseBtn.addEventListener('click', () => {
                let currentQuantity = parseInt(quantityDisplay.textContent);
                if (currentQuantity > 1) {
                    quantityDisplay.textContent = currentQuantity - 1;
                }
            });

            increaseBtn.addEventListener('click', () => {
                let currentQuantity = parseInt(quantityDisplay.textContent);
                quantityDisplay.textContent = currentQuantity + 1;
            });
        });
    });
</script>
