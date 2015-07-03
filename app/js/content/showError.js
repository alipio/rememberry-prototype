const ERROR_MESSAGE = chrome.i18n.getMessage('no_connection_to_extension', [ chrome.i18n.getMessage('ext_name') ]);

export default e => {
    if (e.message.includes('Error connecting to extension')) {
        window.setTimeout(() => {
            window.alert(ERROR_MESSAGE);
        });
    }
};