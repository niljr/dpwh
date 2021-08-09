const getYear = () => {
    const d = new Date();
    const n = JSON.stringify(d.getFullYear());

    return n.slice(2, 4);
}

const zeroPad = (num) => num.toString().padStart(4, '0');

module.exports = {
    getYear,
    zeroPad
}
