const util = {};
util.submitToLocalStorage = name => {
    localStorage.setItem(name+'Value', document.getElementById(name).value);
    localStorage.setItem(name+'Checked', document.getElementById(name).checked);
    return false;
};
util.retrieveFromLocalStorage = name => {
    document.getElementById(name).value = localStorage.getItem(name+'Value');
    document.getElementById(name).checked = localStorage.getItem(name+'Checked') === 'true';
    return false;
};
util.handleLargeNumber = (a, cullZeroes = false) => {
    if (cullZeroes && a == 0) {
        return '';
    }

    if (a < Math.pow(10, 3)) {
        return '' + a.toFixed(0);
    }
    
    if (a < Math.pow(10, 6)) {
        return (a / Math.pow(10, 3)).toFixed(2) + "k";
    }
    
    if (a < Math.pow(10, 9)) {
        return (a / Math.pow(10, 6)).toFixed(2) + "m";
    }
    
    if (a < Math.pow(10, 12)) {
        return (a / Math.pow(10, 9)).toFixed(2) + "b";
    }
    
    if (a < Math.pow(10, 15)) {
        return (a / Math.pow(10, 12)).toFixed(2) + "t";
    }
    
    return (a / Math.pow(10, 15)).toFixed(2) + "q";
    
};
util.timeForHumans = x => {
    // ought to be in seconds
    let seconds = x % 60;
    x /= 60; x = Math.floor(x);
    let minutes = x % 60;
    x /= 60; x = Math.floor(x);
    let hours = x % 24;
    x /= 24; x = Math.floor(x);
    let days = x;
    let y = '';
    function weh(z, text) {
        if (z) { y = y + ((y === '') ? '' : ', ') + z + ' ' + text + ((z > 1) ? 's' : ''); }
    }
    weh(days, 'day');
    weh(hours, 'hour');
    weh(minutes, 'minute');
    weh(seconds, 'second');
    if (y === '') { y = 'less than a second'; }
    return y;
};
util.addArticle = string => {
    return (/[aeiouAEIOU]/.test(string[0])) ? 'an ' + string : 'a ' + string;
};
util.formatLargeNumber = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
util.pullJSON = async filename => {
    let url = `/json/${filename}.json`;
    console.log("Loading JSON from " + url);
    try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error('Network response was not ok ' + response.statusText);
		}
		const data = await response.json();
		console.log('JSON load complete.');
		return data;
	} catch (error) {
		console.error('JSON load failed:', error);
		throw error;
	}

};

export { util };