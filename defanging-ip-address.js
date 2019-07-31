// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

var defangIPaddr = function(address) {
    let separated = address.split('');
    for(let i = 0; i < separated.length; i++) {
        if (separated[i] === '.') {
            separated[i] = '[.]';
        }
    }
    return separated.join('');
};