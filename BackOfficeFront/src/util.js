import { put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

export const API = process.env.REACT_APP_URL_API;

/**
 * Função para remover caracteres especiais não válidos para mensagem SMS
 * 
 * @export
 * @param {string} mensagem 
 * @return 
 */
export function validarCaracteresEspeciais(mensagem) {
    return mensagem.normalize('NFD').replace(/[\u0300-\u036f]|[^0-9a-zA-Z,.;:/?"'!@#$%&*()-_+=\s]/g, '')
}

/**
 * Função para transformar um objeto em parâmetros de url (var1=valor1)
 * 
 * @export
 * @param {any} obj
 * @returns
 */
export function serializeObjToUrl(obj) {
    return `?${Object.keys(obj).reduce(
        (a, k) => {
            a.push(`${k}=encodeURIComponent(${obj[k]})`);
            return a;
        }, []).join('&')}`;
}

/**
 * Função para transformar apenas a primeira letra de cada palavra em caixa alta
 * 
 * @export
 * @param {any} str
 * @returns
 */
export function toTitleCase(str) {
    return str.replace(/\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

/**
 * Executa uma requisição a uma url usando Fetch.
 * 
 * @export
 * @param {string} url
 * @param {object} [parametros={}]
 * @param {string} returnAction
 * @param {string} [errorAction="FETCH_FAILED"]
 * @param {object} callback
 */
export function* fetchUrl(url, returnAction, errorAction, parametros = {}, callback) {
    try {
        const data = yield fetch(url, parametros);
        const jsonData = yield data.json();

        if (data.status < 200 || data.status >= 300) {
            if (jsonData !== null && typeof jsonData === 'object' && jsonData.StackTraceString && jsonData.Message && jsonData.Message !== 'Unexpected end of JSON input') {
                console.log(jsonData);
            }
            throw new Error(JSON.stringify(jsonData));
        }
        yield put({ type: returnAction, payload: jsonData });

        if (callback) {
            yield put(callback);
        }
    } catch (error) {
        yield put({ type: errorAction, payload: error });
    }
}

/**
 * Retorna uma lista de WorkItems ordenados pela prioridade e pela ordem
 */
export function sortWorkItemsByPriority(workItems, ordemCrescente = true) {
    const workItemsSorted = workItems.sort((a, b) => {
        if (ordemCrescente) {
            return (b.fields.Priority < a.fields.Priority) ? 1 : -1;
        }
        return (a.fields.Priority < b.fields.Priority) ? 1 : -1;
    });

    return workItemsSorted;
}
/**
 * Verifica se o valor passado é numérico.
 * @param {any} value
 * @returns {boolean}
 */
export function isNumber(value) {
    return !isNaN(parseInt(value, 0)) && isFinite(value);
}

/**
 * Retorna texto sem dígitos que não sejam numéricos
 * 
 * @param {string} value 
 */
export function numberOnly(value) {
    return value.replace(/\D/g, '')
}

/**
 * Retorna CPF com máscara
 * 
 * @param {int} value 
 */
export function maskCPF(value) {
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')

    return value;
}

/**
 * Remove a mascara do cpf
 * 
 * @param {int} value 
 */
export function RemoverMascaraCPF(value) {
    value = value.replace('.', '')
    value = value.replace('.', '')
    value = value.replace('-', '')

    return value;
}


/**
 * Valida CPF
 * 
 * @param {string} value 
 */
export function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    var i;
    Soma = 0;

    if (strCPF === undefined)
        return false;

    if (strCPF === '00000000000' ||
        strCPF === '11111111111' ||
        strCPF === '22222222222' ||
        strCPF === '33333333333' ||
        strCPF === '44444444444' ||
        strCPF === '55555555555' ||
        strCPF === '66666666666' ||
        strCPF === '77777777777' ||
        strCPF === '88888888888' ||
        strCPF === '99999999999')
        return false;

    for (i = 1; i <= 9; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i), 0) * (11 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11))
        Resto = 0;

    if (Resto !== parseInt(strCPF.substring(9, 10), 0))
        return false;

    Soma = 0;

    for (i = 1; i <= 10; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i), 0) * (12 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11))
        Resto = 0;

    if (Resto !== parseInt(strCPF.substring(10, 11), 0))
        return false;

    return true;
}

export function numberFormatBR(value, decimals = 2) {
    return parseFloat(value)
        .toFixed(decimals)
        .toString()
        .replace('.', ',');
}

export function formatMoney(amount, decimalCount = 2, decimal = ",", thousands = ".") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount), 0).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}

/**
 * Formatar a data
 */
export function formatDate(dateTime) {
    if (dateTime) {
        const date = new Date(dateTime);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;
        return `${day}`.concat('/', month, '/', date.getFullYear());
    }
    return '-';
}

/**
 * Validar Ano Campo data
 */
export function validarDataAno(value) {
    let anoFim = parseInt(value.substring(0, 4))
    return anoFim.toString().length > 3 ? true : false
}

/**
 * Formatar a data/Hora
 */
export function formatDateTime(dateTime) {
    return formatDate(dateTime) + ` ${dateTime.substring(11, 19)}`
}

/**
 * Mascarando o numero do cep
 */
export function mascaraCEP(t) {
    var mask = '#####-###';
    var i = t.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) !== saida) {
        t += texto.substring(0, 1);
    }

    return t
}

export const ufs = [
    { id: 0, sigla: 'Todas', nome: 'Todas' },
    { id: 1, sigla: 'AC', nome: 'Acre' },
    { id: 2, sigla: 'AL', nome: 'Alagoas' },
    { id: 3, sigla: 'AP', nome: 'Amapá' },
    { id: 4, sigla: 'AM', nome: 'Amazonas' },
    { id: 5, sigla: 'BA', nome: 'Bahia' },
    { id: 6, sigla: 'CE', nome: 'Ceará' },
    { id: 7, sigla: 'DF', nome: 'Distrito Federal' },
    { id: 8, sigla: 'ES', nome: 'Espírito Santo' },
    { id: 9, sigla: 'GO', nome: 'Goiás' },
    { id: 10, sigla: 'MA', nome: 'Maranhão' },
    { id: 11, sigla: 'MT', nome: 'Mato Grosso' },
    { id: 12, sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { id: 13, sigla: 'MG', nome: 'Minas Gerais' },
    { id: 14, sigla: 'PA', nome: 'Pará' },
    { id: 15, sigla: 'PB', nome: 'Paraíba' },
    { id: 16, sigla: 'PR', nome: 'Paraná' },
    { id: 17, sigla: 'PE', nome: 'Pernambuco' },
    { id: 18, sigla: 'PI', nome: 'Piauí' },
    { id: 19, sigla: 'RJ', nome: 'Rio de Janeiro' },
    { id: 20, sigla: 'RN', nome: 'Rio Grande do Norte' },
    { id: 21, sigla: 'RS', nome: 'Rio Grande do Sul' },
    { id: 22, sigla: 'RO', nome: 'Rondônia' },
    { id: 23, sigla: 'RR', nome: 'Roraima' },
    { id: 24, sigla: 'SC', nome: 'Santa Catarina' },
    { id: 25, sigla: 'SP', nome: 'São Paulo' },
    { id: 26, sigla: 'SE', nome: 'Sergipe' },
    { id: 27, sigla: 'TO', nome: 'Tocantins' }
];

export function validarPeriodo(dataInicial, dataFinal) {
    if (Number(dataFinal.substr(0, 4)) > 2000) {
        return dataInicial > dataFinal
    }
}
export function maskTelefone(value) {
    value = value.substring(0, 15)
    value = value.replace(/\D/g, "")

    if (value.length >= 10 && value.length <= 15) {

        value = value.replace(/(\d{6})(\d)/, "$1-$2")

        if (value.length === 11) {
            value = removerMaskTelefone(value)
            value = value.replace(/\D/g, "")
            value = value.replace(/(\d{6})(\d)/, "$1-$2")
        }
        if (value.length === 12) {
            value = removerMaskTelefone(value)
            value = value.replace(/\D/g, "")
            value = value.replace(/(\d{7})(\d)/, "$1-$2")
        }
    }
    value = value.replace(/^(\d\d)(\d)/g, "($1) $2")

    return value
}

/**
 * Retorna Telefone sem máscara
 * 
 * @param {int} value 
 */
export function removerMaskTelefone(value) {

    value = value.replace('(', '')
    value = value.replace(')', '')
    value = value.replace(' ', '')
    value = value.replace('-', '')

    return value
}

export function padLeft(nr, n, str) {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
}