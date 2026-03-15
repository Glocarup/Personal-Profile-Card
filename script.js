document.addEventListener('DOMContentLoaded', function() {
    
    // 1. FADE-IN DEL CONTENEDOR
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(10px)';
        setTimeout(() => {
            container.style.transition = 'opacity 1s ease, transform 1s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }

    // 2. ENTRADA ESCALONADA DE SECCIONES
    const sections = document.querySelectorAll('.skills-section, .favorites-section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            
            // CRITICO: Después de animar, eliminamos el transform inline 
            // para que no bloquee el :hover del CSS
            setTimeout(() => {
                section.style.transform = '';
            }, 850);
        }, 400 + (index * 200));
    });

    // 3. BIENVENIDA
    function showWelcome() {
        const welcome = document.createElement('div');
        welcome.innerHTML = `<p style="margin:0; font-family:'Montserrat'; font-size:13px;">❊ ¡Bienvenidos a mi perfil! ❊</p>`;
        welcome.style.cssText = `
            position: fixed; bottom: 20px; right: 20px;
            background: #fff; padding: 12px 20px; border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1); border-left: 4px solid #79b4b3;
            transform: translateX(150%); transition: transform 0.5s ease; z-index: 1000;
        `;
        document.body.appendChild(welcome);
        setTimeout(() => welcome.style.transform = 'translateX(0)', 1500);
        setTimeout(() => {
            welcome.style.transform = 'translateX(150%)';
            setTimeout(() => welcome.remove(), 500);
        }, 5000);
    }
    showWelcome();
});