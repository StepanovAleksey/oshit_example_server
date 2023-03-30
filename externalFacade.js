const dataStorage = {
    test: "init data"
};
const testPrivateSet = (key, data) => {
    console.log("testPrivateSet hidden method");
    dataStorage[key] = data
}
const testPrivateGet = (key) => {
    console.log("testPrivateGet hidden method");
    return dataStorage[key];
}

module.exports = {
    setData(key, data) {
        testPrivateSet(key, data);
    },
    getData(key) {
        return !!key ? testPrivateGet(key) : dataStorage;
    }
}