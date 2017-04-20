const browserHistory = () => {
    const callbackContainer = [];

    const runCallbacks = () => {
        callbackContainer.forEach((cb) => cb());
    }

    addEventListener('popstate', runCallbacks);

    return {
        subscribe(cb){
            callbackContainer.push(cb);
        },
        navigateTo(path){
            history.pushState({}, null, path);
            runCallbacks();
        }
    }
}

export default browserHistory();