export const getRequiredErrorMassege = (name) => {
    if(!name) return false;

    let pattern = /{([a-zA-Z0-9_]+)\+?([가-힝]{2})?}/g;
    let type = '{name+을를} 입력 하세요.';

    pattern.exec(type);
    let tail = (RegExp.$2) ? josa(eval(RegExp.$1), RegExp.$2) : '';

    return name + `${tail}` + ` 입력 하세요.`;
};
/*
export const josa = (str, tail) => {
    return (this.hasFinalConsonant(this.getStrArray(str))) ? tail.substring(0, 1) : tail.substring(1, 2);
};

export const hasFinalConsonant = (str) => {
    let strTemp = str[str.length-1];
    return ((strTemp.charCodeAt(0)-16)%28!==0);
};

export const getStrArray = (str) => {
    let strArray = [];

    let i = 0;
    let len = str.length;
    for (; i < len ; i++ ) {
        strArray.push(str.charAt(i));
    }

    return strArray;
};
*/

function josa(str, tail) {
    return (hasFinalConsonant(getStrArray(str))) ? tail.substring(0, 1) : tail.substring(1, 2);
}
function hasFinalConsonant(str) {
    let strTemp = str[str.length-1];
    return ((strTemp.charCodeAt(0)-16)%28!==0);
}
function getStrArray(str) {

    let strArray = [];

    let i = 0;
    let len = str.length;
    for (; i < len ; i++ ) {
        strArray.push(str.charAt(i));
    }

    return strArray;
}
