function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // Calcula os ângulos dos ponteiros
    const anguloHora = (horas % 12) * 30 + (minutos / 60) * 30; // 360 graus / 12 horas = 30 graus por hora
    const anguloMinuto = minutos * 6; // 360 graus / 60 minutos = 6 graus por minuto
    const anguloSegundo = segundos * 6; // 360 graus / 60 segundos = 6 graus por segundo

    // Aplica a rotação aos ponteiros
    document.getElementById('ponteiro-hora').style.transform = `translateX(-50%) rotate(${anguloHora}deg)`;
    document.getElementById('ponteiro-minuto').style.transform = `translateX(-50%) rotate(${anguloMinuto}deg)`;
    document.getElementById('ponteiro-segundo').style.transform = `translateX(-50%) rotate(${anguloSegundo}deg)`;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Chama a função uma vez para não esperar 1 segundo para mostrar a hora
atualizarRelogio();