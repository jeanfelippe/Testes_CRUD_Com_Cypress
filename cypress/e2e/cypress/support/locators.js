const locators={
    LOGIN:{
        USER:'[data-test=email]',
        PASSWORD:'[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU:{
        SETTINGS:'[data-test="menu-settings"]',
        CONTAS:'[href="/contas"]',
        RESET:'[href="/reset"]',
        EXTRATO:'[data-test="menu-extrato"] > .fas'
    },
    CONTAS:{
        NOME:'[data-test="nome"]',
        BTN_SALVAR: '.btn'
    },
    MOVIMENTACAO:{
        DESCRICAO: '[data-test="descricao"]',
        VALOR:'[data-test="valor"]',
        INTERESSADO:'[data-test="envolvido"]',
        STATUS: '[data-test="status"]',
        BTN_SALVAR:'.btn-primary'
    }   
}

export default locators;