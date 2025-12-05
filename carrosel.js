// Seleciona todas as setas (tanto esquerda quanto direita)
const setas = document.querySelectorAll('.seta');

setas.forEach(seta => {
    seta.addEventListener('click', () => {
        
        // 1. Acha o container "pai" dessa seta específica
        const wrapper = seta.closest('.carrossel-wrapper');
        
        // 2. Dentro desse pai, acha o slider (a lista de cards)
        const slider = wrapper.querySelector('.slider-container');
        
        // 3. Define o tamanho do pulo (tamanho do card + gap)
        const scrollAmount = 270; 

        // 4. Verifica se é botão de voltar ou avançar
        if (seta.classList.contains('seta-esquerda')) {
            slider.scrollLeft -= scrollAmount;
        } else {
            slider.scrollLeft += scrollAmount;
        }
    });
});